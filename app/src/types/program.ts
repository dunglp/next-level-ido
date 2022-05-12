export type NextLevelIdoPlatform = {
  "version": "0.1.0",
  "name": "next_level_ido_platform",
  "instructions": [
    {
      "name": "initialize",
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
          "name": "initializer",
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
          "name": "initializer",
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
          "name": "mintBump",
          "type": "u8"
        },
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
          "name": "vaultBump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "paused",
            "type": "bool"
          },
          {
            "name": "xTokenPoolVault",
            "type": "publicKey"
          },
          {
            "name": "stakingMint",
            "type": "publicKey"
          },
          {
            "name": "stakingVault",
            "type": "publicKey"
          },
          {
            "name": "rewardAMint",
            "type": "publicKey"
          },
          {
            "name": "rewardAVault",
            "type": "publicKey"
          },
          {
            "name": "rewardBMint",
            "type": "publicKey"
          },
          {
            "name": "rewardBVault",
            "type": "publicKey"
          },
          {
            "name": "rewardDuration",
            "type": "u64"
          },
          {
            "name": "rewardDurationEnd",
            "type": "u64"
          },
          {
            "name": "lastUpdateTime",
            "type": "u64"
          },
          {
            "name": "rewardARate",
            "type": "u64"
          },
          {
            "name": "rewardBRate",
            "type": "u64"
          },
          {
            "name": "rewardAPerTokenStored",
            "type": "u128"
          },
          {
            "name": "rewardBPerTokenStored",
            "type": "u128"
          },
          {
            "name": "userStakeCount",
            "type": "u32"
          },
          {
            "name": "funders",
            "type": {
              "array": [
                "publicKey",
                4
              ]
            }
          },
          {
            "name": "trailer",
            "type": {
              "array": [
                "u8",
                31
              ]
            }
          }
        ]
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
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "PriceChange",
      "fields": [
        {
          "name": "oldStepPerXstepE9",
          "type": "u64",
          "index": false
        },
        {
          "name": "oldStepPerXstep",
          "type": "string",
          "index": false
        },
        {
          "name": "newStepPerXstepE9",
          "type": "u64",
          "index": false
        },
        {
          "name": "newStepPerXstep",
          "type": "string",
          "index": false
        }
      ]
    },
    {
      "name": "Price",
      "fields": [
        {
          "name": "stepPerXstepE9",
          "type": "u64",
          "index": false
        },
        {
          "name": "stepPerXstep",
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
    }
  ]
};

export const IDL: NextLevelIdoPlatform = {
  "version": "0.1.0",
  "name": "next_level_ido_platform",
  "instructions": [
    {
      "name": "initialize",
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
          "name": "initializer",
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
          "name": "initializer",
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
          "name": "mintBump",
          "type": "u8"
        },
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
          "name": "vaultBump",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "pool",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "nonce",
            "type": "u8"
          },
          {
            "name": "paused",
            "type": "bool"
          },
          {
            "name": "xTokenPoolVault",
            "type": "publicKey"
          },
          {
            "name": "stakingMint",
            "type": "publicKey"
          },
          {
            "name": "stakingVault",
            "type": "publicKey"
          },
          {
            "name": "rewardAMint",
            "type": "publicKey"
          },
          {
            "name": "rewardAVault",
            "type": "publicKey"
          },
          {
            "name": "rewardBMint",
            "type": "publicKey"
          },
          {
            "name": "rewardBVault",
            "type": "publicKey"
          },
          {
            "name": "rewardDuration",
            "type": "u64"
          },
          {
            "name": "rewardDurationEnd",
            "type": "u64"
          },
          {
            "name": "lastUpdateTime",
            "type": "u64"
          },
          {
            "name": "rewardARate",
            "type": "u64"
          },
          {
            "name": "rewardBRate",
            "type": "u64"
          },
          {
            "name": "rewardAPerTokenStored",
            "type": "u128"
          },
          {
            "name": "rewardBPerTokenStored",
            "type": "u128"
          },
          {
            "name": "userStakeCount",
            "type": "u32"
          },
          {
            "name": "funders",
            "type": {
              "array": [
                "publicKey",
                4
              ]
            }
          },
          {
            "name": "trailer",
            "type": {
              "array": [
                "u8",
                31
              ]
            }
          }
        ]
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
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "PriceChange",
      "fields": [
        {
          "name": "oldStepPerXstepE9",
          "type": "u64",
          "index": false
        },
        {
          "name": "oldStepPerXstep",
          "type": "string",
          "index": false
        },
        {
          "name": "newStepPerXstepE9",
          "type": "u64",
          "index": false
        },
        {
          "name": "newStepPerXstep",
          "type": "string",
          "index": false
        }
      ]
    },
    {
      "name": "Price",
      "fields": [
        {
          "name": "stepPerXstepE9",
          "type": "u64",
          "index": false
        },
        {
          "name": "stepPerXstep",
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
    }
  ]
};
