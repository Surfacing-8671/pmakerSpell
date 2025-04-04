/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  LerpFactoryLike,
  LerpFactoryLikeInterface,
} from "../../../src/DssExecLib.sol/LerpFactoryLike";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name_",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "target_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "ilk_",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "what_",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "startTime_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration_",
        type: "uint256",
      },
    ],
    name: "newIlkLerp",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "name_",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "target_",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "what_",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "startTime_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "start_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "end_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration_",
        type: "uint256",
      },
    ],
    name: "newLerp",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class LerpFactoryLike__factory {
  static readonly abi = _abi;
  static createInterface(): LerpFactoryLikeInterface {
    return new Interface(_abi) as LerpFactoryLikeInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): LerpFactoryLike {
    return new Contract(address, _abi, runner) as unknown as LerpFactoryLike;
  }
}
