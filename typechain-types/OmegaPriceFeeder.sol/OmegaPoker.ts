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

export interface OmegaPokerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "WPLS"
      | "WPLSEDAI"
      | "_oracles"
      | "_pairs"
      | "add"
      | "deny"
      | "medians"
      | "oracleFactory"
      | "poke"
      | "rely"
      | "remove"
      | "tokenIn"
      | "wards"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "WPLS", values?: undefined): string;
  encodeFunctionData(functionFragment: "WPLSEDAI", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "_oracles",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "_pairs",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "add",
    values: [AddressLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "deny", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "medians",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "oracleFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "poke", values?: undefined): string;
  encodeFunctionData(functionFragment: "rely", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "remove", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "tokenIn",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "wards", values: [AddressLike]): string;

  decodeFunctionResult(functionFragment: "WPLS", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WPLSEDAI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_oracles", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_pairs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "medians", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oracleFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "poke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tokenIn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
}

export interface OmegaPoker extends BaseContract {
  connect(runner?: ContractRunner | null): OmegaPoker;
  waitForDeployment(): Promise<this>;

  interface: OmegaPokerInterface;

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

  WPLS: TypedContractMethod<[], [string], "view">;

  WPLSEDAI: TypedContractMethod<[], [string], "view">;

  _oracles: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  _pairs: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  add: TypedContractMethod<
    [_median: AddressLike, _lp: AddressLike, _token: AddressLike],
    [void],
    "nonpayable"
  >;

  deny: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  medians: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  oracleFactory: TypedContractMethod<[], [string], "view">;

  poke: TypedContractMethod<[], [void], "nonpayable">;

  rely: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  remove: TypedContractMethod<[_median: AddressLike], [void], "nonpayable">;

  tokenIn: TypedContractMethod<[arg0: AddressLike], [string], "view">;

  wards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "WPLS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "WPLSEDAI"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "_oracles"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "_pairs"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "add"
  ): TypedContractMethod<
    [_median: AddressLike, _lp: AddressLike, _token: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "deny"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "medians"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "oracleFactory"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "poke"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "rely"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "remove"
  ): TypedContractMethod<[_median: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "tokenIn"
  ): TypedContractMethod<[arg0: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "wards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  filters: {};
}
