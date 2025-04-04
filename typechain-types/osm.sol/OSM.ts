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

export interface OSMInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "bud"
      | "change"
      | "deny"
      | "diss(address[])"
      | "diss(address)"
      | "hop"
      | "kiss(address[])"
      | "kiss(address)"
      | "pass"
      | "peek"
      | "peep"
      | "poke"
      | "read"
      | "rely"
      | "src"
      | "start"
      | "step"
      | "stop"
      | "stopped"
      | "void"
      | "wards"
      | "zzz"
  ): FunctionFragment;

  getEvent(nameOrSignatureOrTopic: "LogNote" | "LogValue"): EventFragment;

  encodeFunctionData(functionFragment: "bud", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "change", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "deny", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "diss(address[])",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "diss(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "hop", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "kiss(address[])",
    values: [AddressLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "kiss(address)",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "pass", values?: undefined): string;
  encodeFunctionData(functionFragment: "peek", values?: undefined): string;
  encodeFunctionData(functionFragment: "peep", values?: undefined): string;
  encodeFunctionData(functionFragment: "poke", values?: undefined): string;
  encodeFunctionData(functionFragment: "read", values?: undefined): string;
  encodeFunctionData(functionFragment: "rely", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "src", values?: undefined): string;
  encodeFunctionData(functionFragment: "start", values?: undefined): string;
  encodeFunctionData(functionFragment: "step", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "stop", values?: undefined): string;
  encodeFunctionData(functionFragment: "stopped", values?: undefined): string;
  encodeFunctionData(functionFragment: "void", values?: undefined): string;
  encodeFunctionData(functionFragment: "wards", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "zzz", values?: undefined): string;

  decodeFunctionResult(functionFragment: "bud", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "change", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "diss(address[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "diss(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hop", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "kiss(address[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "kiss(address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pass", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peek", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peep", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "src", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "start", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "step", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stopped", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "void", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zzz", data: BytesLike): Result;
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

export namespace LogValueEvent {
  export type InputTuple = [val: BytesLike];
  export type OutputTuple = [val: string];
  export interface OutputObject {
    val: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface OSM extends BaseContract {
  connect(runner?: ContractRunner | null): OSM;
  waitForDeployment(): Promise<this>;

  interface: OSMInterface;

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

  bud: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  change: TypedContractMethod<[src_: AddressLike], [void], "nonpayable">;

  deny: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  "diss(address[])": TypedContractMethod<
    [a: AddressLike[]],
    [void],
    "nonpayable"
  >;

  "diss(address)": TypedContractMethod<[a: AddressLike], [void], "nonpayable">;

  hop: TypedContractMethod<[], [bigint], "view">;

  "kiss(address[])": TypedContractMethod<
    [a: AddressLike[]],
    [void],
    "nonpayable"
  >;

  "kiss(address)": TypedContractMethod<[a: AddressLike], [void], "nonpayable">;

  pass: TypedContractMethod<[], [boolean], "view">;

  peek: TypedContractMethod<[], [[string, boolean]], "view">;

  peep: TypedContractMethod<[], [[string, boolean]], "view">;

  poke: TypedContractMethod<[], [void], "nonpayable">;

  read: TypedContractMethod<[], [string], "view">;

  rely: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  src: TypedContractMethod<[], [string], "view">;

  start: TypedContractMethod<[], [void], "nonpayable">;

  step: TypedContractMethod<[ts: BigNumberish], [void], "nonpayable">;

  stop: TypedContractMethod<[], [void], "nonpayable">;

  stopped: TypedContractMethod<[], [bigint], "view">;

  void: TypedContractMethod<[], [void], "nonpayable">;

  wards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  zzz: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "bud"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "change"
  ): TypedContractMethod<[src_: AddressLike], [void], "nonpayable">;
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
    nameOrSignature: "hop"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "kiss(address[])"
  ): TypedContractMethod<[a: AddressLike[]], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "kiss(address)"
  ): TypedContractMethod<[a: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "pass"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "peek"
  ): TypedContractMethod<[], [[string, boolean]], "view">;
  getFunction(
    nameOrSignature: "peep"
  ): TypedContractMethod<[], [[string, boolean]], "view">;
  getFunction(
    nameOrSignature: "poke"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "read"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rely"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "src"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "start"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "step"
  ): TypedContractMethod<[ts: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stop"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "stopped"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "void"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "wards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "zzz"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "LogNote"
  ): TypedContractEvent<
    LogNoteEvent.InputTuple,
    LogNoteEvent.OutputTuple,
    LogNoteEvent.OutputObject
  >;
  getEvent(
    key: "LogValue"
  ): TypedContractEvent<
    LogValueEvent.InputTuple,
    LogValueEvent.OutputTuple,
    LogValueEvent.OutputObject
  >;

  filters: {
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

    "LogValue(bytes32)": TypedContractEvent<
      LogValueEvent.InputTuple,
      LogValueEvent.OutputTuple,
      LogValueEvent.OutputObject
    >;
    LogValue: TypedContractEvent<
      LogValueEvent.InputTuple,
      LogValueEvent.OutputTuple,
      LogValueEvent.OutputObject
    >;
  };
}
