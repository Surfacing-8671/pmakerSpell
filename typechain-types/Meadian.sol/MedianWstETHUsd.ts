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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface MedianWstETHUsdInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "age"
      | "bar"
      | "bud"
      | "deny"
      | "diss(address[])"
      | "diss(address)"
      | "drop"
      | "kiss(address[])"
      | "kiss(address)"
      | "lift"
      | "orcl"
      | "peek"
      | "poke"
      | "read"
      | "rely"
      | "setBar"
      | "slot"
      | "wards"
      | "wat"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "Deny" | "LogMedianPrice" | "LogNote" | "Rely"
  ): EventFragment;

  encodeFunctionData(functionFragment: "age", values?: undefined): string;
  encodeFunctionData(functionFragment: "bar", values?: undefined): string;
  encodeFunctionData(functionFragment: "bud", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "deny", values: [AddressLike]): string;
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
  encodeFunctionData(functionFragment: "orcl", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "peek", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poke",
    values: [BigNumberish[], BigNumberish[]]
  ): string;
  encodeFunctionData(functionFragment: "read", values?: undefined): string;
  encodeFunctionData(functionFragment: "rely", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "setBar",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "slot", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "wards", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "wat", values?: undefined): string;

  decodeFunctionResult(functionFragment: "age", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bud", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
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
  decodeFunctionResult(functionFragment: "orcl", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peek", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setBar", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "slot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wat", data: BytesLike): Result;
}

export namespace DenyEvent {
  export type InputTuple = [usr: AddressLike];
  export type OutputTuple = [usr: string];
  export interface OutputObject {
    usr: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogMedianPriceEvent {
  export type InputTuple = [val: BigNumberish, age: BigNumberish];
  export type OutputTuple = [val: bigint, age: bigint];
  export interface OutputObject {
    val: bigint;
    age: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogNoteEvent {
  export type InputTuple = [
    sig: BytesLike,
    usr: AddressLike,
    arg1: BytesLike,
    arg2: BytesLike,
    data: BytesLike
  ];
  export type OutputTuple = [
    sig: string,
    usr: string,
    arg1: string,
    arg2: string,
    data: string
  ];
  export interface OutputObject {
    sig: string;
    usr: string;
    arg1: string;
    arg2: string;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RelyEvent {
  export type InputTuple = [usr: AddressLike];
  export type OutputTuple = [usr: string];
  export interface OutputObject {
    usr: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface MedianWstETHUsd extends BaseContract {
  connect(runner?: ContractRunner | null): MedianWstETHUsd;
  waitForDeployment(): Promise<this>;

  interface: MedianWstETHUsdInterface;

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

  age: TypedContractMethod<[], [bigint], "view">;

  bar: TypedContractMethod<[], [bigint], "view">;

  bud: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  deny: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  "diss(address[])": TypedContractMethod<
    [a: AddressLike[]],
    [void],
    "nonpayable"
  >;

  "diss(address)": TypedContractMethod<[a: AddressLike], [void], "nonpayable">;

  drop: TypedContractMethod<[a: AddressLike[]], [void], "nonpayable">;

  "kiss(address[])": TypedContractMethod<
    [a: AddressLike[]],
    [void],
    "nonpayable"
  >;

  "kiss(address)": TypedContractMethod<[a: AddressLike], [void], "nonpayable">;

  lift: TypedContractMethod<[a: AddressLike[]], [void], "nonpayable">;

  orcl: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  peek: TypedContractMethod<[], [[bigint, boolean]], "view">;

  poke: TypedContractMethod<
    [val_: BigNumberish[], age_: BigNumberish[]],
    [void],
    "nonpayable"
  >;

  read: TypedContractMethod<[], [bigint], "view">;

  rely: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  setBar: TypedContractMethod<[bar_: BigNumberish], [void], "nonpayable">;

  slot: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  wards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  wat: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "age"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "bar"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "bud"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "deny"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "diss(address[])"
  ): TypedContractMethod<[a: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "diss(address)"
  ): TypedContractMethod<[a: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "drop"
  ): TypedContractMethod<[a: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "kiss(address[])"
  ): TypedContractMethod<[a: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "kiss(address)"
  ): TypedContractMethod<[a: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "lift"
  ): TypedContractMethod<[a: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "orcl"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "peek"
  ): TypedContractMethod<[], [[bigint, boolean]], "view">;
  getFunction(
    nameOrSignature: "poke"
  ): TypedContractMethod<
    [val_: BigNumberish[], age_: BigNumberish[]],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "read"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rely"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setBar"
  ): TypedContractMethod<[bar_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "slot"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "wards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "wat"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "Deny"
  ): TypedContractEvent<
    DenyEvent.InputTuple,
    DenyEvent.OutputTuple,
    DenyEvent.OutputObject
  >;
  getEvent(
    key: "LogMedianPrice"
  ): TypedContractEvent<
    LogMedianPriceEvent.InputTuple,
    LogMedianPriceEvent.OutputTuple,
    LogMedianPriceEvent.OutputObject
  >;
  getEvent(
    key: "LogNote"
  ): TypedContractEvent<
    LogNoteEvent.InputTuple,
    LogNoteEvent.OutputTuple,
    LogNoteEvent.OutputObject
  >;
  getEvent(
    key: "Rely"
  ): TypedContractEvent<
    RelyEvent.InputTuple,
    RelyEvent.OutputTuple,
    RelyEvent.OutputObject
  >;

  filters: {
    "Deny(address)": TypedContractEvent<
      DenyEvent.InputTuple,
      DenyEvent.OutputTuple,
      DenyEvent.OutputObject
    >;
    Deny: TypedContractEvent<
      DenyEvent.InputTuple,
      DenyEvent.OutputTuple,
      DenyEvent.OutputObject
    >;

    "LogMedianPrice(uint256,uint256)": TypedContractEvent<
      LogMedianPriceEvent.InputTuple,
      LogMedianPriceEvent.OutputTuple,
      LogMedianPriceEvent.OutputObject
    >;
    LogMedianPrice: TypedContractEvent<
      LogMedianPriceEvent.InputTuple,
      LogMedianPriceEvent.OutputTuple,
      LogMedianPriceEvent.OutputObject
    >;

    "LogNote(bytes4,address,bytes32,bytes32,bytes)": TypedContractEvent<
      LogNoteEvent.InputTuple,
      LogNoteEvent.OutputTuple,
      LogNoteEvent.OutputObject
    >;
    LogNote: TypedContractEvent<
      LogNoteEvent.InputTuple,
      LogNoteEvent.OutputTuple,
      LogNoteEvent.OutputObject
    >;

    "Rely(address)": TypedContractEvent<
      RelyEvent.InputTuple,
      RelyEvent.OutputTuple,
      RelyEvent.OutputObject
    >;
    Rely: TypedContractEvent<
      RelyEvent.InputTuple,
      RelyEvent.OutputTuple,
      RelyEvent.OutputObject
    >;
  };
}
