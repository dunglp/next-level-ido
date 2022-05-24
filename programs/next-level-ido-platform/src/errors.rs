use anchor_lang::prelude::*;

#[error_code]
pub enum ErrorCode {
    #[msg("u128 cannot be converted into u64")]
    U128CannotConvert,
    // ido times
    #[msg("IDO must start in the future")]
    IdoFuture,
    #[msg("IDO times are non-sequential")]
    SeqTimes,
    #[msg("Whitelist has not started")]
    StartWhitelistTime,
    #[msg("Whitelist has ended")]
    EndWhitelistTime,
    #[msg("IDO has not finished yet")]
    IdoNotOver,
    #[msg("Your are not whitelist")]
    NotWhitelist,
    #[msg("Insufficient USDC")]
    LowUsdc,
    #[msg("Invalid IDO Name")]
    InvalidIdoName,
}
