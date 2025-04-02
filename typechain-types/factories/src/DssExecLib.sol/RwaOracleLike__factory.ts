/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  RwaOracleLike,
  RwaOracleLikeInterface,
} from "../../../src/DssExecLib.sol/RwaOracleLike";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
    ],
    name: "bump",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class RwaOracleLike__factory {
  static readonly abi = _abi;
  static createInterface(): RwaOracleLikeInterface {
    return new Interface(_abi) as RwaOracleLikeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): RwaOracleLike {
    return new Contract(address, _abi, runner) as unknown as RwaOracleLike;
  }
}
