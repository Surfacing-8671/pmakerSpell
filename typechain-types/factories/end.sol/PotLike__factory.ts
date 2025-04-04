/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { PotLike, PotLikeInterface } from "../../end.sol/PotLike";

const _abi = [
  {
    inputs: [],
    name: "cage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class PotLike__factory {
  static readonly abi = _abi;
  static createInterface(): PotLikeInterface {
    return new Interface(_abi) as PotLikeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): PotLike {
    return new Contract(address, _abi, runner) as unknown as PotLike;
  }
}
