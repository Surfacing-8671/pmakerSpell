/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { FlapLike, FlapLikeInterface } from "../../vow.sol/FlapLike";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
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

export class FlapLike__factory {
  static readonly abi = _abi;
  static createInterface(): FlapLikeInterface {
    return new Interface(_abi) as FlapLikeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): FlapLike {
    return new Contract(address, _abi, runner) as unknown as FlapLike;
  }
}
