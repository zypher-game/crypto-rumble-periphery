const IRewarder = [
  {
    "inputs": [],
    "name": "getReward",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "exp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "gp",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "token",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "heroReward",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "equipmentReward",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "nftReward",
            "type": "bool"
          }
        ],
        "internalType": "struct IRewarder.Reward",
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
        "internalType": "address",
        "name": "player",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "gameId",
        "type": "uint256"
      }
    ],
    "name": "reward",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;
export { IRewarder };
