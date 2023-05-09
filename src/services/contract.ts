export const Address = "0xDbEfa52EFe0676Bf25527c0f1EA806a0a90d86eb";
export const Abi = {
    "abi": [
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_servicePercent",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "previousOwner",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "OwnershipTransferred",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "luckyNumberId",
              "type": "uint256"
            }
          ],
          "name": "buyTicket",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "title",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "image",
              "type": "string"
            },
            {
              "internalType": "uint256",
              "name": "prize",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "ticketPrice",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "expiresAt",
              "type": "uint256"
            }
          ],
          "name": "createLottery",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "getLotteries",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "title",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "image",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "prize",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "ticketPrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "participants",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "drawn",
                  "type": "bool"
                },
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "createdAt",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiresAt",
                  "type": "uint256"
                }
              ],
              "internalType": "struct DappLottery.LotteryStruct[]",
              "name": "Lotteries",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "getLottery",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "string",
                  "name": "title",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "description",
                  "type": "string"
                },
                {
                  "internalType": "string",
                  "name": "image",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "prize",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "ticketPrice",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "participants",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "drawn",
                  "type": "bool"
                },
                {
                  "internalType": "address",
                  "name": "owner",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "createdAt",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "expiresAt",
                  "type": "uint256"
                }
              ],
              "internalType": "struct DappLottery.LotteryStruct",
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
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "getLotteryLuckyNumbers",
          "outputs": [
            {
              "internalType": "string[]",
              "name": "",
              "type": "string[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "getLotteryParticipants",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "lotteryNumber",
                  "type": "string"
                },
                {
                  "internalType": "bool",
                  "name": "paid",
                  "type": "bool"
                }
              ],
              "internalType": "struct DappLottery.ParticipantStruct[]",
              "name": "",
              "type": "tuple[]"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            }
          ],
          "name": "getLotteryResult",
          "outputs": [
            {
              "components": [
                {
                  "internalType": "uint256",
                  "name": "id",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "completed",
                  "type": "bool"
                },
                {
                  "internalType": "bool",
                  "name": "paidout",
                  "type": "bool"
                },
                {
                  "internalType": "uint256",
                  "name": "timestamp",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "sharePerWinner",
                  "type": "uint256"
                },
                {
                  "components": [
                    {
                      "internalType": "address",
                      "name": "account",
                      "type": "address"
                    },
                    {
                      "internalType": "string",
                      "name": "lotteryNumber",
                      "type": "string"
                    },
                    {
                      "internalType": "bool",
                      "name": "paid",
                      "type": "bool"
                    }
                  ],
                  "internalType": "struct DappLottery.ParticipantStruct[]",
                  "name": "winners",
                  "type": "tuple[]"
                }
              ],
              "internalType": "struct DappLottery.LotteryResultStruct",
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
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "string[]",
              "name": "luckyNumbers",
              "type": "string[]"
            }
          ],
          "name": "importLuckyNumbers",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "owner",
          "outputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "id",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "numOfWinners",
              "type": "uint256"
            }
          ],
          "name": "randomlySelectWinners",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "renounceOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "serviceBalance",
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
          "name": "servicePercent",
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
          "inputs": [
            {
              "internalType": "address",
              "name": "newOwner",
              "type": "address"
            }
          ],
          "name": "transferOwnership",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        }
      ],
}