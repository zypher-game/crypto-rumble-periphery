const Level = [
  {
    "inputs": [],
    "name": "AccessControlBadConfirmation",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "internalType": "bytes32",
        "name": "neededRole",
        "type": "bytes32"
      }
    ],
    "name": "AccessControlUnauthorizedAccount",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "target",
        "type": "address"
      }
    ],
    "name": "AddressEmptyCode",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "AtLeastOneOperatorRole",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "ERC1967InvalidImplementation",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "ERC1967NonPayable",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "FailedInnerCall",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "InvalidInitialization",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "NotInitializing",
    "type": "error"
  },
  {
    "inputs": [],
    "name": "UUPSUnauthorizedCallContext",
    "type": "error"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "slot",
        "type": "bytes32"
      }
    ],
    "name": "UUPSUnsupportedProxiableUUID",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint64",
        "name": "version",
        "type": "uint64"
      }
    ],
    "name": "Initialized",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "previousAdminRole",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "newAdminRole",
        "type": "bytes32"
      }
    ],
    "name": "RoleAdminChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleGranted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "account",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "sender",
        "type": "address"
      }
    ],
    "name": "RoleRevoked",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "implementation",
        "type": "address"
      }
    ],
    "name": "Upgraded",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "DEFAULT_ADMIN_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "OPERATOR_ROLE",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "UPGRADE_INTERFACE_VERSION",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint32[5]",
            "name": "resistanceRatio",
            "type": "uint32[5]"
          },
          {
            "internalType": "uint32",
            "name": "moves",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "hp",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "class",
            "type": "uint32"
          },
          {
            "internalType": "uint32[5]",
            "name": "resistanceAbsolute",
            "type": "uint32[5]"
          },
          {
            "internalType": "uint32",
            "name": "vitCost",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "invulnerable",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "board",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "reward",
            "type": "address"
          }
        ],
        "internalType": "struct ILevel.Info",
        "name": "lv",
        "type": "tuple"
      }
    ],
    "name": "addLevel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint32[5]",
                "name": "resistanceRatio",
                "type": "uint32[5]"
              },
              {
                "internalType": "uint32",
                "name": "moves",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "hp",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "class",
                "type": "uint32"
              },
              {
                "internalType": "uint32[5]",
                "name": "resistanceAbsolute",
                "type": "uint32[5]"
              },
              {
                "internalType": "uint32",
                "name": "vitCost",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "invulnerable",
                "type": "uint32"
              },
              {
                "internalType": "uint256",
                "name": "board",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "reward",
                "type": "address"
              }
            ],
            "internalType": "struct ILevel.Info",
            "name": "info",
            "type": "tuple"
          },
          {
            "internalType": "uint32",
            "name": "timeStart",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "timeLength",
            "type": "uint32"
          }
        ],
        "internalType": "struct ILevel.Special",
        "name": "lv",
        "type": "tuple"
      }
    ],
    "name": "addSpecialLevel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
      }
    ],
    "name": "getLevel",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint32[5]",
            "name": "resistanceRatio",
            "type": "uint32[5]"
          },
          {
            "internalType": "uint32",
            "name": "moves",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "hp",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "class",
            "type": "uint32"
          },
          {
            "internalType": "uint32[5]",
            "name": "resistanceAbsolute",
            "type": "uint32[5]"
          },
          {
            "internalType": "uint32",
            "name": "vitCost",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "invulnerable",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "board",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "reward",
            "type": "address"
          }
        ],
        "internalType": "struct ILevel.Info",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      }
    ],
    "name": "getRoleAdmin",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
      }
    ],
    "name": "getSpecialLevel",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint32[5]",
                "name": "resistanceRatio",
                "type": "uint32[5]"
              },
              {
                "internalType": "uint32",
                "name": "moves",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "hp",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "class",
                "type": "uint32"
              },
              {
                "internalType": "uint32[5]",
                "name": "resistanceAbsolute",
                "type": "uint32[5]"
              },
              {
                "internalType": "uint32",
                "name": "vitCost",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "invulnerable",
                "type": "uint32"
              },
              {
                "internalType": "uint256",
                "name": "board",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "reward",
                "type": "address"
              }
            ],
            "internalType": "struct ILevel.Info",
            "name": "info",
            "type": "tuple"
          },
          {
            "internalType": "uint32",
            "name": "timeStart",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "timeLength",
            "type": "uint32"
          }
        ],
        "internalType": "struct ILevel.Special",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "grantRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "hasRole",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "initialize",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
      }
    ],
    "name": "isLevelValid",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxLevel",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "maxSpecialLevel",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proxiableUUID",
    "outputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "callerConfirmation",
        "type": "address"
      }
    ],
    "name": "renounceRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "role",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "account",
        "type": "address"
      }
    ],
    "name": "revokeRole",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
      },
      {
        "components": [
          {
            "internalType": "uint32[5]",
            "name": "resistanceRatio",
            "type": "uint32[5]"
          },
          {
            "internalType": "uint32",
            "name": "moves",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "hp",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "class",
            "type": "uint32"
          },
          {
            "internalType": "uint32[5]",
            "name": "resistanceAbsolute",
            "type": "uint32[5]"
          },
          {
            "internalType": "uint32",
            "name": "vitCost",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "invulnerable",
            "type": "uint32"
          },
          {
            "internalType": "uint256",
            "name": "board",
            "type": "uint256"
          },
          {
            "internalType": "address",
            "name": "reward",
            "type": "address"
          }
        ],
        "internalType": "struct ILevel.Info",
        "name": "lv",
        "type": "tuple"
      }
    ],
    "name": "setLevel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "level",
        "type": "uint256"
      },
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint32[5]",
                "name": "resistanceRatio",
                "type": "uint32[5]"
              },
              {
                "internalType": "uint32",
                "name": "moves",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "hp",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "class",
                "type": "uint32"
              },
              {
                "internalType": "uint32[5]",
                "name": "resistanceAbsolute",
                "type": "uint32[5]"
              },
              {
                "internalType": "uint32",
                "name": "vitCost",
                "type": "uint32"
              },
              {
                "internalType": "uint32",
                "name": "invulnerable",
                "type": "uint32"
              },
              {
                "internalType": "uint256",
                "name": "board",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "reward",
                "type": "address"
              }
            ],
            "internalType": "struct ILevel.Info",
            "name": "info",
            "type": "tuple"
          },
          {
            "internalType": "uint32",
            "name": "timeStart",
            "type": "uint32"
          },
          {
            "internalType": "uint32",
            "name": "timeLength",
            "type": "uint32"
          }
        ],
        "internalType": "struct ILevel.Special",
        "name": "lv",
        "type": "tuple"
      }
    ],
    "name": "setSpecialLevel",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "bytes4",
        "name": "interfaceId",
        "type": "bytes4"
      }
    ],
    "name": "supportsInterface",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "newImplementation",
        "type": "address"
      },
      {
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "upgradeToAndCall",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  }
] as const;
export { Level };
