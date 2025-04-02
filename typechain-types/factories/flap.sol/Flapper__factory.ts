/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Flapper, FlapperInterface } from "../../flap.sol/Flapper";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vat_",
        type: "address",
      },
      {
        internalType: "address",
        name: "gem_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lot",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
    ],
    name: "Kick",
    type: "event",
  },
  {
    inputs: [],
    name: "beg",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bids",
    outputs: [
      {
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lot",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
      {
        internalType: "uint48",
        name: "tic",
        type: "uint48",
      },
      {
        internalType: "uint48",
        name: "end",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rad",
        type: "uint256",
      },
    ],
    name: "cage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "deal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "what",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "file",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fill",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "gem",
    outputs: [
      {
        internalType: "contract GemLike",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
    ],
    name: "kick",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "kicks",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lid",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "live",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "rely",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "tau",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lot",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "bid",
        type: "uint256",
      },
    ],
    name: "tend",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "tick",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "ttl",
    outputs: [
      {
        internalType: "uint48",
        name: "",
        type: "uint48",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "vat",
    outputs: [
      {
        internalType: "contract VatLike",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "yank",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052670e92596fd6290000600455612a30600560006101000a81548165ffffffffffff021916908365ffffffffffff1602179055506202a300600560066101000a81548165ffffffffffff021916908365ffffffffffff160217905550600060065534801561007057600080fd5b506040516123313803806123318339818101604052604081101561009357600080fd5b81019080805190602001909291908051906020019092919050505060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555081600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600160078190555050506121a48061018d6000396000f3fe608060405234801561001057600080fd5b506004361061012c5760003560e01c8063957aa58c116100ad578063ca40c41911610071578063ca40c41914610481578063cfc4af55146104cd578063cfdd3302146104f3578063d9c55ce114610511578063fc7b6aee1461052f5761012c565b8063957aa58c1461036b5780639c52a7f114610389578063a2f91af2146103cd578063bf353dbb146103fb578063c959c42b146104535761012c565b80634b43ed12116100f45780634b43ed121461026d5780634e8b1dd5146102af57806365fae35e146102d55780637bd2bea7146103195780637d780d821461034d5761012c565b806326d2addc1461013157806326e027f11461014f57806329ae81141461017d57806336569e77146101b55780634423c5f1146101e9575b600080fd5b61013961055d565b6040518082815260200191505060405180910390f35b61017b6004803603602081101561016557600080fd5b8101908080359060200190929190505050610563565b005b6101b36004803603604081101561019357600080fd5b81019080803590602001909291908035906020019092919050505061084b565b005b6101bd610a80565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610215600480360360208110156101ff57600080fd5b8101908080359060200190929190505050610aa6565b604051808681526020018581526020018473ffffffffffffffffffffffffffffffffffffffff1681526020018365ffffffffffff1681526020018265ffffffffffff1681526020019550505050505060405180910390f35b6102ad6004803603606081101561028357600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050610b20565b005b6102b76112df565b604051808265ffffffffffff16815260200191505060405180910390f35b610317600480360360208110156102eb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112f7565b005b6103216113f2565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b610355611418565b6040518082815260200191505060405180910390f35b61037361141e565b6040518082815260200191505060405180910390f35b6103cb6004803603602081101561039f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611424565b005b6103f9600480360360208110156103e357600080fd5b810190808035906020019092919050505061151f565b005b61043d6004803603602081101561041157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506116a7565b6040518082815260200191505060405180910390f35b61047f6004803603602081101561046957600080fd5b81019080803590602001909291905050506116bf565b005b6104b76004803603604081101561049757600080fd5b810190808035906020019092919080359060200190929190505050611ac3565b6040518082815260200191505060405180910390f35b6104d5611f1c565b604051808265ffffffffffff16815260200191505060405180910390f35b6104fb611f34565b6040518082815260200191505060405180910390f35b610519611f3a565b6040518082815260200191505060405180910390f35b61055b6004803603602081101561054557600080fd5b8101908080359060200190929190505050611f40565b005b60085481565b6000600754146105db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260128152602001807f466c61707065722f7374696c6c2d6c697665000000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600083815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614156106b4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f466c61707065722f6775792d6e6f742d7365740000000000000000000000000081525060200191505060405180910390fd5b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb35783b306001600085815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016000868152602001908152602001600020600001546040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b1580156107b157600080fd5b505af11580156107c5573d6000803e3d6000fd5b505050506001600082815260200190815260200160002060008082016000905560018201600090556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160146101000a81549065ffffffffffff021916905560028201601a6101000a81549065ffffffffffff0219169055505050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146108ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f466c61707065722f6e6f742d617574686f72697a65640000000000000000000081525060200191505060405180910390fd5b7f62656700000000000000000000000000000000000000000000000000000000008214156109335780600481905550610a7c565b7f74746c00000000000000000000000000000000000000000000000000000000008214156109855780600560006101000a81548165ffffffffffff021916908365ffffffffffff160217905550610a7b565b7f74617500000000000000000000000000000000000000000000000000000000008214156109d75780600560066101000a81548165ffffffffffff021916908365ffffffffffff160217905550610a7a565b7f6c69640000000000000000000000000000000000000000000000000000000000821415610a0b5780600881905550610a79565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f466c61707065722f66696c652d756e7265636f676e697a65642d706172616d0081525060200191505060405180910390fd5b5b5b5b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060020160149054906101000a900465ffffffffffff169080600201601a9054906101000a900465ffffffffffff16905085565b600160075414610b98576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f466c61707065722f6e6f742d6c6976650000000000000000000000000000000081525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff166001600085815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610c71576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f466c61707065722f6775792d6e6f742d7365740000000000000000000000000081525060200191505060405180910390fd5b426001600085815260200190815260200160002060020160149054906101000a900465ffffffffffff1665ffffffffffff161180610cdf575060006001600085815260200190815260200160002060020160149054906101000a900465ffffffffffff1665ffffffffffff16145b610d51576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f466c61707065722f616c72656164792d66696e69736865642d7469630000000081525060200191505060405180910390fd5b4260016000858152602001908152602001600020600201601a9054906101000a900465ffffffffffff1665ffffffffffff1611610df6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f466c61707065722f616c72656164792d66696e69736865642d656e640000000081525060200191505060405180910390fd5b60016000848152602001908152602001600020600101548214610e81576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260188152602001807f466c61707065722f6c6f742d6e6f742d6d61746368696e67000000000000000081525060200191505060405180910390fd5b60016000848152602001908152602001600020600001548111610f0c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f466c61707065722f6269642d6e6f742d6869676865720000000000000000000081525060200191505060405180910390fd5b610f2e60045460016000868152602001908152602001600020600001546120e4565b610f4082670de0b6b3a76400006120e4565b1015610fb4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f466c61707065722f696e73756666696369656e742d696e63726561736500000081525060200191505060405180910390fd5b6001600084815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461118857600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb35783b336001600087815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016000888152602001908152602001600020600001546040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b15801561111a57600080fd5b505af115801561112e573d6000803e3d6000fd5b50505050336001600085815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb35783b3330600160008881526020019081526020016000206000015485036040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b15801561125157600080fd5b505af1158015611265573d6000803e3d6000fd5b505050508060016000858152602001908152602001600020600001819055506112a242600560009054906101000a900465ffffffffffff16612110565b6001600085815260200190815260200160002060020160146101000a81548165ffffffffffff021916908365ffffffffffff160217905550505050565b600560009054906101000a900465ffffffffffff1681565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146113ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f466c61707065722f6e6f742d617574686f72697a65640000000000000000000081525060200191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60045481565b60075481565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146114d8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f466c61707065722f6e6f742d617574686f72697a65640000000000000000000081525060200191505060405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146115d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f466c61707065722f6e6f742d617574686f72697a65640000000000000000000081525060200191505060405180910390fd5b6000600781905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb35783b3033846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b15801561168c57600080fd5b505af11580156116a0573d6000803e3d6000fd5b5050505050565b60006020528060005260406000206000915090505481565b600160075414611737576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f466c61707065722f6e6f742d6c6976650000000000000000000000000000000081525060200191505060405180910390fd5b60006001600083815260200190815260200160002060020160149054906101000a900465ffffffffffff1665ffffffffffff16141580156117e15750426001600083815260200190815260200160002060020160149054906101000a900465ffffffffffff1665ffffffffffff1610806117e057504260016000838152602001908152602001600020600201601a9054906101000a900465ffffffffffff1665ffffffffffff16105b5b611853576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f466c61707065722f6e6f742d66696e697368656400000000000000000000000081525060200191505060405180910390fd5b600060016000838152602001908152602001600020600101549050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb35783b306001600086815260200190815260200160002060020160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16846040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b15801561195557600080fd5b505af1158015611969573d6000803e3d6000fd5b50505050600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639dc29fac3060016000868152602001908152602001600020600001546040518363ffffffff1660e01b8152600401808373ffffffffffffffffffffffffffffffffffffffff16815260200182815260200192505050600060405180830381600087803b158015611a1657600080fd5b505af1158015611a2a573d6000803e3d6000fd5b505050506001600083815260200190815260200160002060008082016000905560018201600090556002820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556002820160146101000a81549065ffffffffffff021916905560028201601a6101000a81549065ffffffffffff02191690555050611ab96009548261213a565b6009819055505050565b600060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414611b79576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f466c61707065722f6e6f742d617574686f72697a65640000000000000000000081525060200191505060405180910390fd5b600160075414611bf1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f466c61707065722f6e6f742d6c6976650000000000000000000000000000000081525060200191505060405180910390fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60065410611c88576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f466c61707065722f6f766572666c6f770000000000000000000000000000000081525060200191505060405180910390fd5b611c9460095484612154565b6009819055506008546009541115611d14576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f466c61707065722f6f7665722d6c69640000000000000000000000000000000081525060200191505060405180910390fd5b6006600081546001019190508190559050816001600083815260200190815260200160002060000181905550826001600083815260200190815260200160002060010181905550336001600083815260200190815260200160002060020160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611dce42600560069054906101000a900465ffffffffffff16612110565b60016000838152602001908152602001600020600201601a6101000a81548165ffffffffffff021916908365ffffffffffff160217905550600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb35783b3330866040518463ffffffff1660e01b8152600401808473ffffffffffffffffffffffffffffffffffffffff1681526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019350505050600060405180830381600087803b158015611eb757600080fd5b505af1158015611ecb573d6000803e3d6000fd5b505050507fe6dde59cbc017becba89714a037778d234a84ce7f0a137487142a007e580d60981848460405180848152602001838152602001828152602001935050505060405180910390a192915050565b600560069054906101000a900465ffffffffffff1681565b60065481565b60095481565b4260016000838152602001908152602001600020600201601a9054906101000a900465ffffffffffff1665ffffffffffff1610611fe5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f466c61707065722f6e6f742d66696e697368656400000000000000000000000081525060200191505060405180910390fd5b60006001600083815260200190815260200160002060020160149054906101000a900465ffffffffffff1665ffffffffffff161461208b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f466c61707065722f6269642d616c72656164792d706c6163656400000000000081525060200191505060405180910390fd5b6120a942600560069054906101000a900465ffffffffffff16612110565b60016000838152602001908152602001600020600201601a6101000a81548165ffffffffffff021916908365ffffffffffff16021790555050565b60008082148061210157508282838502925082816120fe57fe5b04145b61210a57600080fd5b92915050565b60008265ffffffffffff1682840191508165ffffffffffff16101561213457600080fd5b92915050565b600082828403915081111561214e57600080fd5b92915050565b600082828401915081101561216857600080fd5b9291505056fea264697066735822122066f58e801639dfd907fd2b4c60ae9bf2f4eb9cf877c8e9f49c1b55bb009569cd64736f6c634300060c0033";

type FlapperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: FlapperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Flapper__factory extends ContractFactory {
  constructor(...args: FlapperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    vat_: AddressLike,
    gem_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(vat_, gem_, overrides || {});
  }
  override deploy(
    vat_: AddressLike,
    gem_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(vat_, gem_, overrides || {}) as Promise<
      Flapper & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Flapper__factory {
    return super.connect(runner) as Flapper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): FlapperInterface {
    return new Interface(_abi) as FlapperInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Flapper {
    return new Contract(address, _abi, runner) as unknown as Flapper;
  }
}
