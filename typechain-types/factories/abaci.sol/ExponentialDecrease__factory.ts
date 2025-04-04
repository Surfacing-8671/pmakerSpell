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
  ExponentialDecrease,
  ExponentialDecreaseInterface,
} from "../../abaci.sol/ExponentialDecrease";

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
  "0x608060405234801561001057600080fd5b5060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055503373ffffffffffffffffffffffffffffffffffffffff167fdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a6060405160405180910390a26107db806100a76000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c806329ae811414610067578063487a23951461009f57806365fae35e146100eb5780639c52a7f11461012f578063bf353dbb14610173578063e6fd604c146101cb575b600080fd5b61009d6004803603604081101561007d57600080fd5b8101908080359060200190929190803590602001909291905050506101e9565b005b6100d5600480360360408110156100b557600080fd5b8101908080359060200190929190803590602001909291905050506103c1565b6040518082815260200191505060405180910390f35b61012d6004803603602081101561010157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506103ed565b005b6101716004803603602081101561014557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061050e565b005b6101b56004803603602081101561018957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061062f565b6040518082815260200191505060405180910390f35b6101d3610647565b6040518082815260200191505060405180910390f35b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610280576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806107846022913960400191505060405180910390fd5b7f6375740000000000000000000000000000000000000000000000000000000000821415610334576b033b2e3c9fd0803ce8000000816001819055111561032f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f4578706f6e656e7469616c44656372656173652f6375742d67742d524159000081525060200191505060405180910390fd5b610385565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180610759602b913960400191505060405180910390fd5b817fe986e40cc8c151830d4f61050f4fb2e4add8567caad2d5f5496f9158e91fe4c7826040518082815260200191505060405180910390a25050565b60006103e5836103e0600154856b033b2e3c9fd0803ce800000061064d565b610713565b905092915050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610484576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806107846022913960400191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508073ffffffffffffffffffffffffffffffffffffffff167fdd0e34038ac38b2a1ce960229778ac48a8719bc900b6c4f8d0475c6e8b385a6060405160405180910390a250565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146105a5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806107846022913960400191505060405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508073ffffffffffffffffffffffffffffffffffffffff167f184450df2e323acec0ed3b5c7531b81f9b4cdef7914dfd4c0a4317416bb5251b60405160405180910390a250565b60006020528060005260406000206000915090505481565b60015481565b600082600081146107075784600081146106fc57600285066000811461067557869350610679565b8493505b50600284046002860495505b85156106f6578687028760801c1561069c57600080fd5b818101818110156106ac57600080fd5b868104985060028806156106e957888602868a820414158a151516156106d157600080fd5b838101818110156106e157600080fd5b888104975050505b5050600286049550610685565b50610701565b600092505b5061070b565b8291505b509392505050565b60008183029050600082148061073157508282828161072e57fe5b04145b61073a57600080fd5b6b033b2e3c9fd0803ce8000000818161074f57fe5b0490509291505056fe4578706f6e656e7469616c44656372656173652f66696c652d756e7265636f676e697a65642d706172616d4578706f6e656e7469616c44656372656173652f6e6f742d617574686f72697a6564a26469706673582212209b1767e0673a58bd8d6983363d0ace762e9e9aba605535c44405e6018c8b5a3f64736f6c634300060c0033";

type ExponentialDecreaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExponentialDecreaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExponentialDecrease__factory extends ContractFactory {
  constructor(...args: ExponentialDecreaseConstructorParams) {
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
      ExponentialDecrease & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ExponentialDecrease__factory {
    return super.connect(runner) as ExponentialDecrease__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExponentialDecreaseInterface {
    return new Interface(_abi) as ExponentialDecreaseInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ExponentialDecrease {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ExponentialDecrease;
  }
}
