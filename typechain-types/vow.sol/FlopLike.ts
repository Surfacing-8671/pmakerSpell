/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface FlopLikeInterface extends Interface {
  getFunction(nameOrSignature: "cage" | "kick" | "live"): FunctionFragment;

  encodeFunctionData(functionFragment: "cage", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "kick",
    values: [AddressLike, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "live", values?: undefined): string;

  decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "kick", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
}

export interface FlopLike extends BaseContract {
  connect(runner?: ContractRunner | null): FlopLike;
  waitForDeployment(): Promise<this>;

  interface: FlopLikeInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  cage: TypedContractMethod<[], [void], "nonpayable">;

  kick: TypedContractMethod<
    [gal: AddressLike, lot: BigNumberish, bid: BigNumberish],
    [bigint],
    "nonpayable"
  >;

  live: TypedContractMethod<[], [bigint], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "cage"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "kick"
  ): TypedContractMethod<
    [gal: AddressLike, lot: BigNumberish, bid: BigNumberish],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "live"
  ): TypedContractMethod<[], [bigint], "nonpayable">;

  filters: {};
}
