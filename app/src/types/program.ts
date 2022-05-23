export type NextLevelIdoPlatform = {
  "version": "0.1.0",
  "name": "next_level_ido_platform",
  "instructions": [
    {
      "name": "initializeStakePool",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "reclaimMintAuthority",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "xTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "xTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "xTokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "xTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "xTokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "xTokenFromAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeIdoPool",
      "accounts": [
        {
          "name": "idoAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "idoAuthorityToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "idoTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redeemableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "usdcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "idoName",
          "type": "string"
        },
        {
          "name": "initialTokenAmount",
          "type": "u64"
        },
        {
          "name": "tokenPriceNumerator",
          "type": "u8"
        },
        {
          "name": "tokenPriceDenominator",
          "type": "u8"
        },
        {
          "name": "idoTimes",
          "type": {
            "defined": "IdoTimes"
          }
        }
      ]
    },
    {
      "name": "participatePool",
      "accounts": [
        {
          "name": "userAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userUsdc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userRedeemable",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redeemableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimToken",
      "accounts": [
        {
          "name": "idoUser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userIdoToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userRedeemable",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "idoTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "idoTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redeemableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "stakePool",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "stakedAmount",
            "type": "u64"
          },
          {
            "name": "tier",
            "type": {
              "defined": "StakeTier"
            }
          },
          {
            "name": "lastStakeTs",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "idoPool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "idoName",
            "type": "string"
          },
          {
            "name": "idoAuthority",
            "type": "publicKey"
          },
          {
            "name": "usdcTokenMint",
            "type": "publicKey"
          },
          {
            "name": "redeemableTokenMint",
            "type": "publicKey"
          },
          {
            "name": "idoTokenMint",
            "type": "publicKey"
          },
          {
            "name": "usdcVault",
            "type": "publicKey"
          },
          {
            "name": "idoTokenVault",
            "type": "publicKey"
          },
          {
            "name": "idoTokenPriceNumerator",
            "type": "u8"
          },
          {
            "name": "idoTokenPriceDenominator",
            "type": "u8"
          },
          {
            "name": "currentWeight",
            "type": "u16"
          },
          {
            "name": "idoTokenAmount",
            "type": "u64"
          },
          {
            "name": "idoTimes",
            "type": {
              "defined": "IdoTimes"
            }
          },
          {
            "name": "participantCount",
            "type": "u16"
          },
          {
            "name": "participants",
            "type": {
              "vec": {
                "defined": "Participant"
              }
            }
          }
        ]
      }
    },
    {
      "name": "idoUser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "depositAmount",
            "type": "u64"
          },
          {
            "name": "tier",
            "type": {
              "defined": "StakeTier"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "IdoTimes",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "startIdo",
            "type": "i64"
          },
          {
            "name": "endDeposits",
            "type": "i64"
          },
          {
            "name": "endIdo",
            "type": "i64"
          },
          {
            "name": "endEscrow",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "Participant",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "poolWeight",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "StakeTier",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NoTier"
          },
          {
            "name": "Brone"
          },
          {
            "name": "Silver"
          },
          {
            "name": "Gold"
          },
          {
            "name": "Platium"
          },
          {
            "name": "Dimond"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "Log",
      "fields": [
        {
          "name": "message",
          "type": "string",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "U128CannotConvert",
      "msg": "u128 cannot be converted into u64"
    },
    {
      "code": 6001,
      "name": "IdoFuture",
      "msg": "IDO must start in the future"
    },
    {
      "code": 6002,
      "name": "SeqTimes",
      "msg": "IDO times are non-sequential"
    },
    {
      "code": 6003,
      "name": "NotWhitelist",
      "msg": "Your are not whitelist"
    },
    {
      "code": 6004,
      "name": "LowUsdc",
      "msg": "Insufficient USDC"
    }
  ]
};

export const IDL: NextLevelIdoPlatform = {
  "version": "0.1.0",
  "name": "next_level_ido_platform",
  "instructions": [
    {
      "name": "initializeStakePool",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "reclaimMintAuthority",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "xTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "stake",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "xTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "xTokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "unstake",
      "accounts": [
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "xTokenMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "xTokenFrom",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "xTokenFromAuthority",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "tokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenTo",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "initializeIdoPool",
      "accounts": [
        {
          "name": "idoAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "idoAuthorityToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "idoTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redeemableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "usdcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "idoName",
          "type": "string"
        },
        {
          "name": "initialTokenAmount",
          "type": "u64"
        },
        {
          "name": "tokenPriceNumerator",
          "type": "u8"
        },
        {
          "name": "tokenPriceDenominator",
          "type": "u8"
        },
        {
          "name": "idoTimes",
          "type": {
            "defined": "IdoTimes"
          }
        }
      ]
    },
    {
      "name": "participatePool",
      "accounts": [
        {
          "name": "userAuthority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "user",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoUser",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userUsdc",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "userRedeemable",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redeemableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "usdcVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoPool",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "rent",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimToken",
      "accounts": [
        {
          "name": "idoUser",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "payer",
          "isMut": false,
          "isSigner": true
        },
        {
          "name": "userAuthority",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userIdoToken",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userRedeemable",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "idoAccount",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "idoTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "idoTokenVault",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "redeemableMint",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    }
  ],
  "accounts": [
    {
      "name": "stakePool",
      "type": {
        "kind": "struct",
        "fields": []
      }
    },
    {
      "name": "user",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "stakedAmount",
            "type": "u64"
          },
          {
            "name": "tier",
            "type": {
              "defined": "StakeTier"
            }
          },
          {
            "name": "lastStakeTs",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "idoPool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "idoName",
            "type": "string"
          },
          {
            "name": "idoAuthority",
            "type": "publicKey"
          },
          {
            "name": "usdcTokenMint",
            "type": "publicKey"
          },
          {
            "name": "redeemableTokenMint",
            "type": "publicKey"
          },
          {
            "name": "idoTokenMint",
            "type": "publicKey"
          },
          {
            "name": "usdcVault",
            "type": "publicKey"
          },
          {
            "name": "idoTokenVault",
            "type": "publicKey"
          },
          {
            "name": "idoTokenPriceNumerator",
            "type": "u8"
          },
          {
            "name": "idoTokenPriceDenominator",
            "type": "u8"
          },
          {
            "name": "currentWeight",
            "type": "u16"
          },
          {
            "name": "idoTokenAmount",
            "type": "u64"
          },
          {
            "name": "idoTimes",
            "type": {
              "defined": "IdoTimes"
            }
          },
          {
            "name": "participantCount",
            "type": "u16"
          },
          {
            "name": "participants",
            "type": {
              "vec": {
                "defined": "Participant"
              }
            }
          }
        ]
      }
    },
    {
      "name": "idoUser",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "owner",
            "type": "publicKey"
          },
          {
            "name": "depositAmount",
            "type": "u64"
          },
          {
            "name": "tier",
            "type": {
              "defined": "StakeTier"
            }
          }
        ]
      }
    }
  ],
  "types": [
    {
      "name": "IdoTimes",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "startIdo",
            "type": "i64"
          },
          {
            "name": "endDeposits",
            "type": "i64"
          },
          {
            "name": "endIdo",
            "type": "i64"
          },
          {
            "name": "endEscrow",
            "type": "i64"
          }
        ]
      }
    },
    {
      "name": "Participant",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "pubkey",
            "type": "publicKey"
          },
          {
            "name": "poolWeight",
            "type": "u8"
          }
        ]
      }
    },
    {
      "name": "StakeTier",
      "type": {
        "kind": "enum",
        "variants": [
          {
            "name": "NoTier"
          },
          {
            "name": "Brone"
          },
          {
            "name": "Silver"
          },
          {
            "name": "Gold"
          },
          {
            "name": "Platium"
          },
          {
            "name": "Dimond"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "Log",
      "fields": [
        {
          "name": "message",
          "type": "string",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "U128CannotConvert",
      "msg": "u128 cannot be converted into u64"
    },
    {
      "code": 6001,
      "name": "IdoFuture",
      "msg": "IDO must start in the future"
    },
    {
      "code": 6002,
      "name": "SeqTimes",
      "msg": "IDO times are non-sequential"
    },
    {
      "code": 6003,
      "name": "NotWhitelist",
      "msg": "Your are not whitelist"
    },
    {
      "code": 6004,
      "name": "LowUsdc",
      "msg": "Insufficient USDC"
    }
  ]
};
