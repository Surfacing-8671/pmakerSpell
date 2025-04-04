/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  DSAuthority,
  DSAuthorityInterface,
} from "../../DssPause.sol/DSAuthority";

const _abi = [
  {
    constant: true,
    inputs: [
      {
        internalType: "address",
        name: "src",
        type: "address",
      },
      {
        internalType: "address",
        name: "dst",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
    ],
    name: "canCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
] as const;

export class DSAuthority__factory {
  static readonly abi = _abi;
  static createInterface(): DSAuthorityInterface {
    return new Interface(_abi) as DSAuthorityInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DSAuthority {
    return new Contract(address, _abi, runner) as unknown as DSAuthority;
  }
}
