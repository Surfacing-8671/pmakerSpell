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

export interface EndInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "Art"
      | "bag"
      | "cage()"
      | "cage(bytes32)"
      | "cash"
      | "cat"
      | "cure"
      | "debt"
      | "deny"
      | "dog"
      | "file(bytes32,uint256)"
      | "file(bytes32,address)"
      | "fix"
      | "flow"
      | "free"
      | "gap"
      | "live"
      | "out"
      | "pack"
      | "pot"
      | "rely"
      | "skim"
      | "skip"
      | "snip"
      | "spot"
      | "tag"
      | "thaw"
      | "vat"
      | "vow"
      | "wait"
      | "wards"
      | "when"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Cage()"
      | "Cage(bytes32)"
      | "Cash"
      | "Deny"
      | "File(bytes32,uint256)"
      | "File(bytes32,address)"
      | "Flow"
      | "Free"
      | "Pack"
      | "Rely"
      | "Skim"
      | "Skip"
      | "Snip"
      | "Thaw"
  ): EventFragment;

  encodeFunctionData(functionFragment: "Art", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "bag", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "cage()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "cage(bytes32)",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cash",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "cat", values?: undefined): string;
  encodeFunctionData(functionFragment: "cure", values?: undefined): string;
  encodeFunctionData(functionFragment: "debt", values?: undefined): string;
  encodeFunctionData(functionFragment: "deny", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "dog", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,uint256)",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,address)",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "fix", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "flow", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "free", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "gap", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "live", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "out",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "pack", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "pot", values?: undefined): string;
  encodeFunctionData(functionFragment: "rely", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "skim",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "skip",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "snip",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "spot", values?: undefined): string;
  encodeFunctionData(functionFragment: "tag", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "thaw", values?: undefined): string;
  encodeFunctionData(functionFragment: "vat", values?: undefined): string;
  encodeFunctionData(functionFragment: "vow", values?: undefined): string;
  encodeFunctionData(functionFragment: "wait", values?: undefined): string;
  encodeFunctionData(functionFragment: "wards", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "when", values?: undefined): string;

  decodeFunctionResult(functionFragment: "Art", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bag", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cage()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cage(bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cat", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cure", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "debt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dog", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fix", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "flow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "free", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "gap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "out", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pack", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "skim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "skip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "snip", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "spot", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tag", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "thaw", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wait", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "when", data: BytesLike): Result;
}

export namespace Cage__Event {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace Cage_bytes32_Event {
  export type InputTuple = [ilk: BytesLike];
  export type OutputTuple = [ilk: string];
  export interface OutputObject {
    ilk: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CashEvent {
  export type InputTuple = [
    ilk: BytesLike,
    usr: AddressLike,
    wad: BigNumberish
  ];
  export type OutputTuple = [ilk: string, usr: string, wad: bigint];
  export interface OutputObject {
    ilk: string;
    usr: string;
    wad: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
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

export namespace File_bytes32_uint256_Event {
  export type InputTuple = [what: BytesLike, data: BigNumberish];
  export type OutputTuple = [what: string, data: bigint];
  export interface OutputObject {
    what: string;
    data: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace File_bytes32_address_Event {
  export type InputTuple = [what: BytesLike, data: AddressLike];
  export type OutputTuple = [what: string, data: string];
  export interface OutputObject {
    what: string;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FlowEvent {
  export type InputTuple = [ilk: BytesLike];
  export type OutputTuple = [ilk: string];
  export interface OutputObject {
    ilk: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace FreeEvent {
  export type InputTuple = [
    ilk: BytesLike,
    usr: AddressLike,
    ink: BigNumberish
  ];
  export type OutputTuple = [ilk: string, usr: string, ink: bigint];
  export interface OutputObject {
    ilk: string;
    usr: string;
    ink: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace PackEvent {
  export type InputTuple = [usr: AddressLike, wad: BigNumberish];
  export type OutputTuple = [usr: string, wad: bigint];
  export interface OutputObject {
    usr: string;
    wad: bigint;
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

export namespace SkimEvent {
  export type InputTuple = [
    ilk: BytesLike,
    urn: AddressLike,
    wad: BigNumberish,
    art: BigNumberish
  ];
  export type OutputTuple = [
    ilk: string,
    urn: string,
    wad: bigint,
    art: bigint
  ];
  export interface OutputObject {
    ilk: string;
    urn: string;
    wad: bigint;
    art: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SkipEvent {
  export type InputTuple = [
    ilk: BytesLike,
    id: BigNumberish,
    usr: AddressLike,
    tab: BigNumberish,
    lot: BigNumberish,
    art: BigNumberish
  ];
  export type OutputTuple = [
    ilk: string,
    id: bigint,
    usr: string,
    tab: bigint,
    lot: bigint,
    art: bigint
  ];
  export interface OutputObject {
    ilk: string;
    id: bigint;
    usr: string;
    tab: bigint;
    lot: bigint;
    art: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SnipEvent {
  export type InputTuple = [
    ilk: BytesLike,
    id: BigNumberish,
    usr: AddressLike,
    tab: BigNumberish,
    lot: BigNumberish,
    art: BigNumberish
  ];
  export type OutputTuple = [
    ilk: string,
    id: bigint,
    usr: string,
    tab: bigint,
    lot: bigint,
    art: bigint
  ];
  export interface OutputObject {
    ilk: string;
    id: bigint;
    usr: string;
    tab: bigint;
    lot: bigint;
    art: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ThawEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface End extends BaseContract {
  connect(runner?: ContractRunner | null): End;
  waitForDeployment(): Promise<this>;

  interface: EndInterface;

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

  Art: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  bag: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  "cage()": TypedContractMethod<[], [void], "nonpayable">;

  "cage(bytes32)": TypedContractMethod<[ilk: BytesLike], [void], "nonpayable">;

  cash: TypedContractMethod<
    [ilk: BytesLike, wad: BigNumberish],
    [void],
    "nonpayable"
  >;

  cat: TypedContractMethod<[], [string], "view">;

  cure: TypedContractMethod<[], [string], "view">;

  debt: TypedContractMethod<[], [bigint], "view">;

  deny: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  dog: TypedContractMethod<[], [string], "view">;

  "file(bytes32,uint256)": TypedContractMethod<
    [what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;

  "file(bytes32,address)": TypedContractMethod<
    [what: BytesLike, data: AddressLike],
    [void],
    "nonpayable"
  >;

  fix: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  flow: TypedContractMethod<[ilk: BytesLike], [void], "nonpayable">;

  free: TypedContractMethod<[ilk: BytesLike], [void], "nonpayable">;

  gap: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  live: TypedContractMethod<[], [bigint], "view">;

  out: TypedContractMethod<
    [arg0: BytesLike, arg1: AddressLike],
    [bigint],
    "view"
  >;

  pack: TypedContractMethod<[wad: BigNumberish], [void], "nonpayable">;

  pot: TypedContractMethod<[], [string], "view">;

  rely: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  skim: TypedContractMethod<
    [ilk: BytesLike, urn: AddressLike],
    [void],
    "nonpayable"
  >;

  skip: TypedContractMethod<
    [ilk: BytesLike, id: BigNumberish],
    [void],
    "nonpayable"
  >;

  snip: TypedContractMethod<
    [ilk: BytesLike, id: BigNumberish],
    [void],
    "nonpayable"
  >;

  spot: TypedContractMethod<[], [string], "view">;

  tag: TypedContractMethod<[arg0: BytesLike], [bigint], "view">;

  thaw: TypedContractMethod<[], [void], "nonpayable">;

  vat: TypedContractMethod<[], [string], "view">;

  vow: TypedContractMethod<[], [string], "view">;

  wait: TypedContractMethod<[], [bigint], "view">;

  wards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  when: TypedContractMethod<[], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "Art"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "bag"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "cage()"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cage(bytes32)"
  ): TypedContractMethod<[ilk: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "cash"
  ): TypedContractMethod<
    [ilk: BytesLike, wad: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cat"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "cure"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "debt"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "deny"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "dog"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "file(bytes32,uint256)"
  ): TypedContractMethod<
    [what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "file(bytes32,address)"
  ): TypedContractMethod<
    [what: BytesLike, data: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "fix"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "flow"
  ): TypedContractMethod<[ilk: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "free"
  ): TypedContractMethod<[ilk: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "gap"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "live"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "out"
  ): TypedContractMethod<
    [arg0: BytesLike, arg1: AddressLike],
    [bigint],
    "view"
  >;
  getFunction(
    nameOrSignature: "pack"
  ): TypedContractMethod<[wad: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "pot"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "rely"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "skim"
  ): TypedContractMethod<
    [ilk: BytesLike, urn: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "skip"
  ): TypedContractMethod<
    [ilk: BytesLike, id: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "snip"
  ): TypedContractMethod<
    [ilk: BytesLike, id: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "spot"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tag"
  ): TypedContractMethod<[arg0: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "thaw"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "vat"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "vow"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wait"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "wards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "when"
  ): TypedContractMethod<[], [bigint], "view">;

  getEvent(
    key: "Cage()"
  ): TypedContractEvent<
    Cage__Event.InputTuple,
    Cage__Event.OutputTuple,
    Cage__Event.OutputObject
  >;
  getEvent(
    key: "Cage(bytes32)"
  ): TypedContractEvent<
    Cage_bytes32_Event.InputTuple,
    Cage_bytes32_Event.OutputTuple,
    Cage_bytes32_Event.OutputObject
  >;
  getEvent(
    key: "Cash"
  ): TypedContractEvent<
    CashEvent.InputTuple,
    CashEvent.OutputTuple,
    CashEvent.OutputObject
  >;
  getEvent(
    key: "Deny"
  ): TypedContractEvent<
    DenyEvent.InputTuple,
    DenyEvent.OutputTuple,
    DenyEvent.OutputObject
  >;
  getEvent(
    key: "File(bytes32,uint256)"
  ): TypedContractEvent<
    File_bytes32_uint256_Event.InputTuple,
    File_bytes32_uint256_Event.OutputTuple,
    File_bytes32_uint256_Event.OutputObject
  >;
  getEvent(
    key: "File(bytes32,address)"
  ): TypedContractEvent<
    File_bytes32_address_Event.InputTuple,
    File_bytes32_address_Event.OutputTuple,
    File_bytes32_address_Event.OutputObject
  >;
  getEvent(
    key: "Flow"
  ): TypedContractEvent<
    FlowEvent.InputTuple,
    FlowEvent.OutputTuple,
    FlowEvent.OutputObject
  >;
  getEvent(
    key: "Free"
  ): TypedContractEvent<
    FreeEvent.InputTuple,
    FreeEvent.OutputTuple,
    FreeEvent.OutputObject
  >;
  getEvent(
    key: "Pack"
  ): TypedContractEvent<
    PackEvent.InputTuple,
    PackEvent.OutputTuple,
    PackEvent.OutputObject
  >;
  getEvent(
    key: "Rely"
  ): TypedContractEvent<
    RelyEvent.InputTuple,
    RelyEvent.OutputTuple,
    RelyEvent.OutputObject
  >;
  getEvent(
    key: "Skim"
  ): TypedContractEvent<
    SkimEvent.InputTuple,
    SkimEvent.OutputTuple,
    SkimEvent.OutputObject
  >;
  getEvent(
    key: "Skip"
  ): TypedContractEvent<
    SkipEvent.InputTuple,
    SkipEvent.OutputTuple,
    SkipEvent.OutputObject
  >;
  getEvent(
    key: "Snip"
  ): TypedContractEvent<
    SnipEvent.InputTuple,
    SnipEvent.OutputTuple,
    SnipEvent.OutputObject
  >;
  getEvent(
    key: "Thaw"
  ): TypedContractEvent<
    ThawEvent.InputTuple,
    ThawEvent.OutputTuple,
    ThawEvent.OutputObject
  >;

  filters: {
    "Cage()": TypedContractEvent<
      Cage__Event.InputTuple,
      Cage__Event.OutputTuple,
      Cage__Event.OutputObject
    >;
    "Cage(bytes32)": TypedContractEvent<
      Cage_bytes32_Event.InputTuple,
      Cage_bytes32_Event.OutputTuple,
      Cage_bytes32_Event.OutputObject
    >;

    "Cash(bytes32,address,uint256)": TypedContractEvent<
      CashEvent.InputTuple,
      CashEvent.OutputTuple,
      CashEvent.OutputObject
    >;
    Cash: TypedContractEvent<
      CashEvent.InputTuple,
      CashEvent.OutputTuple,
      CashEvent.OutputObject
    >;

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

    "File(bytes32,uint256)": TypedContractEvent<
      File_bytes32_uint256_Event.InputTuple,
      File_bytes32_uint256_Event.OutputTuple,
      File_bytes32_uint256_Event.OutputObject
    >;
    "File(bytes32,address)": TypedContractEvent<
      File_bytes32_address_Event.InputTuple,
      File_bytes32_address_Event.OutputTuple,
      File_bytes32_address_Event.OutputObject
    >;

    "Flow(bytes32)": TypedContractEvent<
      FlowEvent.InputTuple,
      FlowEvent.OutputTuple,
      FlowEvent.OutputObject
    >;
    Flow: TypedContractEvent<
      FlowEvent.InputTuple,
      FlowEvent.OutputTuple,
      FlowEvent.OutputObject
    >;

    "Free(bytes32,address,uint256)": TypedContractEvent<
      FreeEvent.InputTuple,
      FreeEvent.OutputTuple,
      FreeEvent.OutputObject
    >;
    Free: TypedContractEvent<
      FreeEvent.InputTuple,
      FreeEvent.OutputTuple,
      FreeEvent.OutputObject
    >;

    "Pack(address,uint256)": TypedContractEvent<
      PackEvent.InputTuple,
      PackEvent.OutputTuple,
      PackEvent.OutputObject
    >;
    Pack: TypedContractEvent<
      PackEvent.InputTuple,
      PackEvent.OutputTuple,
      PackEvent.OutputObject
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

    "Skim(bytes32,address,uint256,uint256)": TypedContractEvent<
      SkimEvent.InputTuple,
      SkimEvent.OutputTuple,
      SkimEvent.OutputObject
    >;
    Skim: TypedContractEvent<
      SkimEvent.InputTuple,
      SkimEvent.OutputTuple,
      SkimEvent.OutputObject
    >;

    "Skip(bytes32,uint256,address,uint256,uint256,uint256)": TypedContractEvent<
      SkipEvent.InputTuple,
      SkipEvent.OutputTuple,
      SkipEvent.OutputObject
    >;
    Skip: TypedContractEvent<
      SkipEvent.InputTuple,
      SkipEvent.OutputTuple,
      SkipEvent.OutputObject
    >;

    "Snip(bytes32,uint256,address,uint256,uint256,uint256)": TypedContractEvent<
      SnipEvent.InputTuple,
      SnipEvent.OutputTuple,
      SnipEvent.OutputObject
    >;
    Snip: TypedContractEvent<
      SnipEvent.InputTuple,
      SnipEvent.OutputTuple,
      SnipEvent.OutputObject
    >;

    "Thaw()": TypedContractEvent<
      ThawEvent.InputTuple,
      ThawEvent.OutputTuple,
      ThawEvent.OutputObject
    >;
    Thaw: TypedContractEvent<
      ThawEvent.InputTuple,
      ThawEvent.OutputTuple,
      ThawEvent.OutputObject
    >;
  };
}
