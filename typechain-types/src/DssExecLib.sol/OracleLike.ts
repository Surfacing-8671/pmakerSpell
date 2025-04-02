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
} from "../../common";

export interface OracleLikeInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "diss(address[])"
      | "diss(address)"
      | "drop"
      | "kiss(address[])"
      | "kiss(address)"
      | "lift"
      | "orb0"
      | "orb1"
      | "setBar"
      | "src"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "diss(address[])",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "diss(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "drop", values: [AddressLike[]]): string;
  encodeFunctionData(
    functionFragment: "kiss(address[])",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "kiss(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "lift", values: [AddressLike[]]): string;
  encodeFunctionData(functionFragment: "orb0", values?: undefined): string;
  encodeFunctionData(functionFragment: "orb1", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setBar",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "src", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "diss(address[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "diss(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "drop", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "kiss(address[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "kiss(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "lift", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orb0", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "orb1", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "src", data: BytesLike): Result;
}

export interface OracleLike extends BaseContract {
  connect(runner?: ContractRunner | null): OracleLike;
  waitForDeployment(): Promise<this>;

  interface: OracleLikeInterface;

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

  "diss(address[])": TypedContractMethod<
    [arg0: AddressLike[]],
    [void],
    "nonpayable"
  >;

  "diss(address)": TypedContractMethod<
    [arg0: AddressLike],
    [void],
    "nonpayable"
  >;

  drop: TypedContractMethod<[arg0: AddressLike[]], [void], "nonpayable">;

  "kiss(address[])": TypedContractMethod<
    [arg0: AddressLike[]],
    [void],
    "nonpayable"
  >;

  "kiss(address)": TypedContractMethod<
    [arg0: AddressLike],
    [void],
    "nonpayable"
  >;

  lift: TypedContractMethod<[arg0: AddressLike[]], [void], "nonpayable">;

  orb0: TypedContractMethod<[], [string], "view">;

  orb1: TypedContractMethod<[], [string], "view">;

  setBar: TypedContractMethod<[arg0: BigNumberish], [void], "nonpayable">;

  src: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "diss(address[])"
  ): TypedContractMethod<[arg0: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "diss(address)"
  ): TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "drop"
  ): TypedContractMethod<[arg0: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "kiss(address[])"
  ): TypedContractMethod<[arg0: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "kiss(address)"
  ): TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lift"
  ): TypedContractMethod<[arg0: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "orb0"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "orb1"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setBar"
  ): TypedContractMethod<[arg0: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "src"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
