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

export interface DSValueInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "authority"
      | "owner"
      | "peek"
      | "poke"
      | "read"
      | "setAuthority"
      | "setOwner"
      | "void"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "LogNote" | "LogSetAuthority" | "LogSetOwner"
  ): EventFragment;

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "peek", values?: undefined): string;
  encodeFunctionData(functionFragment: "poke", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "read", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setOwner",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "void", values?: undefined): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "peek", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poke", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "read", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "void", data: BytesLike): Result;
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

export interface DSValue extends BaseContract {
  connect(runner?: ContractRunner | null): DSValue;
  waitForDeployment(): Promise<this>;

  interface: DSValueInterface;

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

  owner: TypedContractMethod<[], [string], "view">;

  peek: TypedContractMethod<[], [[string, boolean]], "view">;

  poke: TypedContractMethod<[wut: BytesLike], [void], "nonpayable">;

  read: TypedContractMethod<[], [string], "view">;

  setAuthority: TypedContractMethod<
    [authority_: AddressLike],
    [void],
    "nonpayable"
  >;

  setOwner: TypedContractMethod<[owner_: AddressLike], [void], "nonpayable">;

  void: TypedContractMethod<[], [void], "nonpayable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "authority"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "peek"
  ): TypedContractMethod<[], [[string, boolean]], "view">;
  getFunction(
    nameOrSignature: "poke"
  ): TypedContractMethod<[wut: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "read"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setAuthority"
  ): TypedContractMethod<[authority_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "setOwner"
  ): TypedContractMethod<[owner_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "void"
  ): TypedContractMethod<[], [void], "nonpayable">;

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
