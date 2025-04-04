/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { Abacus, AbacusInterface } from "../../abaci.sol/Abacus";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "price",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class Abacus__factory {
  static readonly abi = _abi;
  static createInterface(): AbacusInterface {
    return new Interface(_abi) as AbacusInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Abacus {
    return new Contract(address, _abi, runner) as unknown as Abacus;
  }
}
