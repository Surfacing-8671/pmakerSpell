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

export interface DSPauseInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "authority"
      | "delay"
      | "drop"
      | "exec"
      | "owner"
      | "plans"
      | "plot"
      | "proxy"
      | "setAuthority"
      | "setDelay"
      | "setOwner"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "LogNote" | "LogSetAuthority" | "LogSetOwner"
  ): EventFragment;

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(functionFragment: "delay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "drop",
    values: [AddressLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "exec",
    values: [AddressLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "plans", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "plot",
    values: [AddressLike, BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "proxy", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDelay",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "delay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "drop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exec", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "plans", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "plot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proxy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setDelay", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
}

export namespace LogNoteEvent {
  export type InputTuple = [
    sig: BytesLike,
    guy: AddressLike,
    foo: BytesLike,
    bar: BytesLike,
    wad: BigNumberish,
    fax: BytesLike
  ];
  export type OutputTuple = [
    sig: string,
    guy: string,
    foo: string,
    bar: string,
    wad: bigint,
    fax: string
  ];
  export interface OutputObject {
    sig: string;
    guy: string;
    foo: string;
    bar: string;
    wad: bigint;
    fax: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogSetAuthorityEvent {
  export type InputTuple = [authority: AddressLike];
  export type OutputTuple = [authority: string];
  export interface OutputObject {
    authority: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace LogSetOwnerEvent {
  export type InputTuple = [owner: AddressLike];
  export type OutputTuple = [owner: string];
  export interface OutputObject {
    owner: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface DSPause extends BaseContract {
  connect(runner?: ContractRunner | null): DSPause;
  waitForDeployment(): Promise<this>;

  interface: DSPauseInterface;

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

  authority: TypedContractMethod<[], [string], "view">;

  delay: TypedContractMethod<[], [bigint], "view">;

  drop: TypedContractMethod<
    [usr: AddressLike, tag: BytesLike, fax: BytesLike, eta: BigNumberish],
    [void],
    "nonpayable"
  >;

  exec: TypedContractMethod<
    [usr: AddressLike, tag: BytesLike, fax: BytesLike, eta: BigNumberish],
    [string],
    "nonpayable"
  >;

  owner: TypedContractMethod<[], [string], "view">;

  plans: TypedContractMethod<[arg0: BytesLike], [boolean], "view">;

  plot: TypedContractMethod<
    [usr: AddressLike, tag: BytesLike, fax: BytesLike, eta: BigNumberish],
    [void],
    "nonpayable"
  >;

  proxy: TypedContractMethod<[], [string], "view">;

  setAuthority: TypedContractMethod<
    [authority_: AddressLike],
    [void],
    "nonpayable"
  >;

  setDelay: TypedContractMethod<[delay_: BigNumberish], [void], "nonpayable">;

  setOwner: TypedContractMethod<[owner_: AddressLike], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "authority"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "delay"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "drop"
  ): TypedContractMethod<
    [usr: AddressLike, tag: BytesLike, fax: BytesLike, eta: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "exec"
  ): TypedContractMethod<
    [usr: AddressLike, tag: BytesLike, fax: BytesLike, eta: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "plans"
  ): TypedContractMethod<[arg0: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "plot"
  ): TypedContractMethod<
    [usr: AddressLike, tag: BytesLike, fax: BytesLike, eta: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "proxy"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setAuthority"
  ): TypedContractMethod<[authority_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setDelay"
  ): TypedContractMethod<[delay_: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[owner_: AddressLike], [void], "nonpayable">;

  getEvent(
    key: "LogNote"
  ): TypedContractEvent<
    LogNoteEvent.InputTuple,
    LogNoteEvent.OutputTuple,
    LogNoteEvent.OutputObject
  >;
  getEvent(
    key: "LogSetAuthority"
  ): TypedContractEvent<
    LogSetAuthorityEvent.InputTuple,
    LogSetAuthorityEvent.OutputTuple,
    LogSetAuthorityEvent.OutputObject
  >;
  getEvent(
    key: "LogSetOwner"
  ): TypedContractEvent<
    LogSetOwnerEvent.InputTuple,
    LogSetOwnerEvent.OutputTuple,
    LogSetOwnerEvent.OutputObject
  >;

  filters: {
    "LogNote(bytes4,address,bytes32,bytes32,uint256,bytes)": TypedContractEvent<
      LogNoteEvent.InputTuple,
      LogNoteEvent.OutputTuple,
      LogNoteEvent.OutputObject
    >;
    LogNote: TypedContractEvent<
      LogNoteEvent.InputTuple,
      LogNoteEvent.OutputTuple,
      LogNoteEvent.OutputObject
    >;

    "LogSetAuthority(address)": TypedContractEvent<
      LogSetAuthorityEvent.InputTuple,
      LogSetAuthorityEvent.OutputTuple,
      LogSetAuthorityEvent.OutputObject
    >;
    LogSetAuthority: TypedContractEvent<
      LogSetAuthorityEvent.InputTuple,
      LogSetAuthorityEvent.OutputTuple,
      LogSetAuthorityEvent.OutputObject
    >;

    "LogSetOwner(address)": TypedContractEvent<
      LogSetOwnerEvent.InputTuple,
      LogSetOwnerEvent.OutputTuple,
      LogSetOwnerEvent.OutputObject
    >;
    LogSetOwner: TypedContractEvent<
      LogSetOwnerEvent.InputTuple,
      LogSetOwnerEvent.OutputTuple,
      LogSetOwnerEvent.OutputObject
    >;
  };
}
