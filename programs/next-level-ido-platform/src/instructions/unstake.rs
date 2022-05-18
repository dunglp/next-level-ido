use crate::state::{PriceChange, User};
use crate::utils::{get_price, update_user_tier};
use anchor_lang::prelude::*;
use anchor_spl::token::{self, Mint, Token, TokenAccount};
use std::convert::TryInto;

#[derive(Accounts)]
pub struct Unstake<'info> {
    pub token_mint: Account<'info, Mint>,

    #[account(
        mut,
        seeds = [ b"mint", token_mint.key().as_ref() ],
        bump,
    )]
    pub x_token_mint: Account<'info, Mint>,

    #[account(mut)]
    //the token account to withdraw from
    pub x_token_from: Account<'info, TokenAccount>,

    //the authority allowed to transfer from x_token_from
    pub x_token_from_authority: Signer<'info>,

    #[account(
        mut,
        seeds = [b"vault", token_mint.key().as_ref() ],
        bump,
    )]
    pub token_vault: Account<'info, TokenAccount>,

    #[account(
        mut,
        seeds = [
           b"user", x_token_from_authority.key.as_ref(),
        ],
        bump
    )]
    user: Box<Account<'info, User>>,

    #[account(mut)]
    //the token account to send token
    pub token_to: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>,
}

pub fn exe(ctx: Context<Unstake>, amount: u64) -> Result<()> {
    let total_token = ctx.accounts.token_vault.amount;
    let total_x_token = ctx.accounts.x_token_mint.supply;
    let old_price = get_price(&ctx.accounts.token_vault, &ctx.accounts.x_token_mint);

    // update user info
    ctx.accounts.user.staked_amount = ctx.accounts.user.staked_amount.checked_sub(amount).unwrap();
    let now = Clock::get().unwrap().unix_timestamp;
    update_user_tier(&mut ctx.accounts.user, now);
    //burn what is being sent
    let cpi_ctx = CpiContext::new(
        ctx.accounts.token_program.to_account_info(),
        token::Burn {
            mint: ctx.accounts.x_token_mint.to_account_info(),
            from: ctx.accounts.x_token_from.to_account_info(),
            authority: ctx.accounts.x_token_from_authority.to_account_info(),
        },
    );
    token::burn(cpi_ctx, amount)?;

    //determine user share of vault
    let what: u64 = (amount as u128)
        .checked_mul(total_token as u128)
        .unwrap()
        .checked_div(total_x_token as u128)
        .unwrap()
        .try_into()
        .unwrap();

    //compute vault signer seeds
    let token_mint_key = ctx.accounts.token_mint.key();
    let seeds = &[
        b"vault",
        token_mint_key.as_ref(),
        &[*ctx.bumps.get("token_vault").unwrap()],
    ];
    let signer = &[&seeds[..]];

    //transfer from vault to user
    let cpi_ctx = CpiContext::new_with_signer(
        ctx.accounts.token_program.to_account_info(),
        token::Transfer {
            from: ctx.accounts.token_vault.to_account_info(),
            to: ctx.accounts.token_to.to_account_info(),
            authority: ctx.accounts.token_vault.to_account_info(),
        },
        signer,
    );
    token::transfer(cpi_ctx, what)?;

    (&mut ctx.accounts.token_vault).reload()?;
    (&mut ctx.accounts.x_token_mint).reload()?;

    let new_price = get_price(&ctx.accounts.token_vault, &ctx.accounts.x_token_mint);

    emit!(PriceChange {
        old_step_per_xstep_e9: old_price.0,
        old_step_per_xstep: old_price.1,
        new_step_per_xstep_e9: new_price.0,
        new_step_per_xstep: new_price.1,
    });

    Ok(())
}
