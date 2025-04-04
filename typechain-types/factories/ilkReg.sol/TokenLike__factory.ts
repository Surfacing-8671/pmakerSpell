/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { TokenLike, TokenLikeInterface } from "../../ilkReg.sol/TokenLike";

const _abi = [
  {
    inputs: [],
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
    inputs: [],
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

export class TokenLike__factory {
  static readonly abi = _abi;
  static createInterface(): TokenLikeInterface {
    return new Interface(_abi) as TokenLikeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): TokenLike {
    return new Contract(address, _abi, runner) as unknown as TokenLike;
  }
}
