/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ClipperLike,
  ClipperLikeInterface,
} from "../../dog.sol/ClipperLike";

const _abi = [
  {
    inputs: [],
    name: "ilk",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tab",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lot",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        internalType: "address",
        name: "kpr",
        type: "address",
      },
    ],
    name: "kick",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ClipperLike__factory {
  static readonly abi = _abi;
  static createInterface(): ClipperLikeInterface {
    return new Interface(_abi) as ClipperLikeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ClipperLike {
    return new Contract(address, _abi, runner) as unknown as ClipperLike;
  }
}
