/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { FlopLike, FlopLikeInterface } from "../../vow.sol/FlopLike";

const _abi = [
  {
    inputs: [],
    name: "cage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "gal",
        type: "address",
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
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class FlopLike__factory {
  static readonly abi = _abi;
  static createInterface(): FlopLikeInterface {
    return new Interface(_abi) as FlopLikeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): FlopLike {
    return new Contract(address, _abi, runner) as unknown as FlopLike;
  }
}
