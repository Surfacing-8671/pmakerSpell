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
import type { GemInfo, GemInfoInterface } from "../../ilkReg.sol/GemInfo";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061047b806100206000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063019848921461003b578063a86e3576146100f8575b600080fd5b61007d6004803603602081101561005157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506101b5565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156100bd5780820151818401526020810190506100a2565b50505050905090810190601f1680156100ea5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61013a6004803603602081101561010e57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506102fd565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561017a57808201518184015260208101905061015f565b50505050905090810190601f1680156101a75780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b60608173ffffffffffffffffffffffffffffffffffffffff166306fdde036040518163ffffffff1660e01b815260040160006040518083038186803b1580156101fd57600080fd5b505afa158015610211573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561023b57600080fd5b810190808051604051939291908464010000000082111561025b57600080fd5b8382019150602082018581111561027157600080fd5b825186600182028301116401000000008211171561028e57600080fd5b8083526020830192505050908051906020019080838360005b838110156102c25780820151818401526020810190506102a7565b50505050905090810190601f1680156102ef5780820380516001836020036101000a031916815260200191505b506040525050509050919050565b60608173ffffffffffffffffffffffffffffffffffffffff166395d89b416040518163ffffffff1660e01b815260040160006040518083038186803b15801561034557600080fd5b505afa158015610359573d6000803e3d6000fd5b505050506040513d6000823e3d601f19601f82011682018060405250602081101561038357600080fd5b81019080805160405193929190846401000000008211156103a357600080fd5b838201915060208201858111156103b957600080fd5b82518660018202830111640100000000821117156103d657600080fd5b8083526020830192505050908051906020019080838360005b8381101561040a5780820151818401526020810190506103ef565b50505050905090810190601f1680156104375780820380516001836020036101000a031916815260200191505b50604052505050905091905056fea2646970667358221220ab6d83a31b68735a2ddd332604b7655b67d32f31691937679bf367710056b11a64736f6c634300060c0033";

type GemInfoConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GemInfoConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class GemInfo__factory extends ContractFactory {
  constructor(...args: GemInfoConstructorParams) {
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
      GemInfo & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): GemInfo__factory {
    return super.connect(runner) as GemInfo__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GemInfoInterface {
    return new Interface(_abi) as GemInfoInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): GemInfo {
    return new Contract(address, _abi, runner) as unknown as GemInfo;
  }
}
