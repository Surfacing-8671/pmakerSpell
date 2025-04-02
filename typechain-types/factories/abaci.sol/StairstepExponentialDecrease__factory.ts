/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  StairstepExponentialDecrease,
  StairstepExponentialDecreaseInterface,
} from "../../abaci.sol/StairstepExponentialDecrease";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "Deny",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "what",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "File",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "Rely",
    type: "event",
  },
  {
    inputs: [],
    name: "cut",
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
    inputs: [
      {
        internalType: "uint256",
        name: "top",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dur",
        type: "uint256",
      },
    ],
    name: "price",
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
    name: "step",
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
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a6060405160405180910390a2610876806100a76000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c80639c52a7f11161005b5780639c52a7f11461014a578063bf353dbb1461018e578063e25fe175146101e6578063e6fd604c146102045761007d565b806329ae811414610082578063487a2395146100ba57806365fae35e14610106575b600080fd5b6100b86004803603604081101561009857600080fd5b810190808035906020019092919080359060200190929190505050610222565b005b6100f0600480360360408110156100d057600080fd5b810190808035906020019092919080359060200190929190505050610412565b6040518082815260200191505060405180910390f35b6101486004803603602081101561011c57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610449565b005b61018c6004803603602081101561016057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061056a565b005b6101d0600480360360208110156101a457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061068b565b6040518082815260200191505060405180910390f35b6101ee6106a3565b6040518082815260200191505060405180910390f35b61020c6106a9565b6040518082815260200191505060405180910390f35b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146102b9576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806107bb602b913960400191505060405180910390fd5b7f6375740000000000000000000000000000000000000000000000000000000000821415610350576b033b2e3c9fd0803ce8000000816002819055111561034b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806107e66027913960400191505060405180910390fd5b6103d6565b7f737465700000000000000000000000000000000000000000000000000000000082141561038457806001819055506103d5565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603481526020018061080d6034913960400191505060405180910390fd5b5b817fe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7826040518082815260200191505060405180910390a25050565b60006104418361043c600254600154868161042957fe5b046b033b2e3c9fd0803ce80000006106af565b610775565b905092915050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146104e0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806107bb602b913960400191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508073ffffffffffffffffffffffffffffffffffffffff167fdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a6060405160405180910390a250565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610601576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b8152602001806107bb602b913960400191505060405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508073ffffffffffffffffffffffffffffffffffffffff167f184450df2e323acec0ed3b5c7531b81f9b4cdef7914dfd4c0a4317416bb5251b60405160405180910390a250565b60006020528060005260406000206000915090505481565b60015481565b60025481565b6000826000811461076957846000811461075e5760028506600081146106d7578693506106db565b8493505b50600284046002860495505b8515610758578687028760801c156106fe57600080fd5b8181018181101561070e57600080fd5b8681049850600288061561074b57888602868a820414158a1515161561073357600080fd5b8381018181101561074357600080fd5b888104975050505b50506002860495506106e7565b50610763565b600092505b5061076d565b8291505b509392505050565b60008183029050600082148061079357508282828161079057fe5b04145b61079c57600080fd5b6b033b2e3c9fd0803ce800000081816107b157fe5b0490509291505056fe5374616972737465704578706f6e656e7469616c44656372656173652f6e6f742d617574686f72697a65645374616972737465704578706f6e656e7469616c44656372656173652f6375742d67742d5241595374616972737465704578706f6e656e7469616c44656372656173652f66696c652d756e7265636f676e697a65642d706172616da264697066735822122058fa1c95004e8caa87ec84d5f0ac91c63d311934d7f7f480041c0d72c2440a6d64736f6c634300060c0033";

type StairstepExponentialDecreaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StairstepExponentialDecreaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StairstepExponentialDecrease__factory extends ContractFactory {
  constructor(...args: StairstepExponentialDecreaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      StairstepExponentialDecrease & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): StairstepExponentialDecrease__factory {
    return super.connect(runner) as StairstepExponentialDecrease__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StairstepExponentialDecreaseInterface {
    return new Interface(_abi) as StairstepExponentialDecreaseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): StairstepExponentialDecrease {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as StairstepExponentialDecrease;
  }
}
