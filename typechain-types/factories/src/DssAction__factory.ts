/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { DssAction, DssActionInterface } from "../../src/DssAction";

const _abi = [
  {
    inputs: [],
    name: "actions",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
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
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "eta",
        type: "uint256",
      },
    ],
    name: "nextCastTime",
    outputs: [
      {
        internalType: "uint256",
        name: "castTime",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "officeHours",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class DssAction__factory {
  static readonly abi = _abi;
  static createInterface(): DssActionInterface {
    return new Interface(_abi) as DssActionInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): DssAction {
    return new Contract(address, _abi, runner) as unknown as DssAction;
  }
}
