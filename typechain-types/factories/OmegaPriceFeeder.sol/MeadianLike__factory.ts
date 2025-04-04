/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  MeadianLike,
  MeadianLikeInterface,
} from "../../OmegaPriceFeeder.sol/MeadianLike";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "val_",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "age_",
        type: "uint256[]",
      },
    ],
    name: "poke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class MeadianLike__factory {
  static readonly abi = _abi;
  static createInterface(): MeadianLikeInterface {
    return new Interface(_abi) as MeadianLikeInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): MeadianLike {
    return new Contract(address, _abi, runner) as unknown as MeadianLike;
  }
}
