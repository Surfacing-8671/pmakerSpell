/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { VatLike, VatLikeInterface } from "../../ilkReg.sol/VatLike";

const _abi = [
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
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wards",
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

export class VatLike__factory {
  static readonly abi = _abi;
  static createInterface(): VatLikeInterface {
    return new Interface(_abi) as VatLikeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): VatLike {
    return new Contract(address, _abi, runner) as unknown as VatLike;
  }
}
