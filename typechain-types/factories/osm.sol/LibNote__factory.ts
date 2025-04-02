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
import type { LibNote, LibNoteInterface } from "../../osm.sol/LibNote";

const _abi = [
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        name: "sig",
        type: "bytes4",
      },
      {
        indexed: true,
        name: "usr",
        type: "address",
      },
      {
        indexed: true,
        name: "arg1",
        type: "bytes32",
      },
      {
        indexed: true,
        name: "arg2",
        type: "bytes32",
      },
      {
        indexed: false,
        name: "data",
        type: "bytes",
      },
    ],
    name: "LogNote",
    type: "event",
  },
] as const;

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603580601d6000396000f3fe6080604052600080fdfea165627a7a72305820f9c56cc4090fab9606ca7dd3c032ae9b3912ff386ce7140e311f84e1252aa8a00029";

type LibNoteConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LibNoteConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LibNote__factory extends ContractFactory {
  constructor(...args: LibNoteConstructorParams) {
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
      LibNote & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): LibNote__factory {
    return super.connect(runner) as LibNote__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LibNoteInterface {
    return new Interface(_abi) as LibNoteInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): LibNote {
    return new Contract(address, _abi, runner) as unknown as LibNote;
  }
}
