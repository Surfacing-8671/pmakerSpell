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

export interface DogInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "Dirt"
      | "Hole"
      | "bark"
      | "cage"
      | "chop"
      | "deny"
      | "digs"
      | "file(bytes32,bytes32,uint256)"
      | "file(bytes32,uint256)"
      | "file(bytes32,address)"
      | "file(bytes32,bytes32,address)"
      | "ilks"
      | "live"
      | "rely"
      | "vat"
      | "vow"
      | "wards"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Bark"
      | "Cage"
      | "Deny"
      | "Digs"
      | "File(bytes32,uint256)"
      | "File(bytes32,address)"
      | "File(bytes32,bytes32,uint256)"
      | "File(bytes32,bytes32,address)"
      | "Rely"
  ): EventFragment;

  encodeFunctionData(functionFragment: "Dirt", values?: undefined): string;
  encodeFunctionData(functionFragment: "Hole", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "bark",
    values: [BytesLike, AddressLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "cage", values?: undefined): string;
  encodeFunctionData(functionFragment: "chop", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "deny", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "digs",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,bytes32,uint256)",
    values: [BytesLike, BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,uint256)",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,address)",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "file(bytes32,bytes32,address)",
    values: [BytesLike, BytesLike, AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "ilks", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "live", values?: undefined): string;
  encodeFunctionData(functionFragment: "rely", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "vat", values?: undefined): string;
  encodeFunctionData(functionFragment: "vow", values?: undefined): string;
  encodeFunctionData(functionFragment: "wards", values: [AddressLike]): string;

  decodeFunctionResult(functionFragment: "Dirt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Hole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "bark", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cage", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "chop", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "digs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,bytes32,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "file(bytes32,bytes32,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ilks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "live", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vat", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "vow", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;
}

export namespace BarkEvent {
  export type InputTuple = [
    ilk: BytesLike,
    urn: AddressLike,
    ink: BigNumberish,
    art: BigNumberish,
    due: BigNumberish,
    clip: AddressLike,
    id: BigNumberish
  ];
  export type OutputTuple = [
    ilk: string,
    urn: string,
    ink: bigint,
    art: bigint,
    due: bigint,
    clip: string,
    id: bigint
  ];
  export interface OutputObject {
    ilk: string;
    urn: string;
    ink: bigint;
    art: bigint;
    due: bigint;
    clip: string;
    id: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace CageEvent {
  export type InputTuple = [];
  export type OutputTuple = [];
  export interface OutputObject {}
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

export namespace DigsEvent {
  export type InputTuple = [ilk: BytesLike, rad: BigNumberish];
  export type OutputTuple = [ilk: string, rad: bigint];
  export interface OutputObject {
    ilk: string;
    rad: bigint;
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

export namespace File_bytes32_bytes32_uint256_Event {
  export type InputTuple = [
    ilk: BytesLike,
    what: BytesLike,
    data: BigNumberish
  ];
  export type OutputTuple = [ilk: string, what: string, data: bigint];
  export interface OutputObject {
    ilk: string;
    what: string;
    data: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace File_bytes32_bytes32_address_Event {
  export type InputTuple = [ilk: BytesLike, what: BytesLike, clip: AddressLike];
  export type OutputTuple = [ilk: string, what: string, clip: string];
  export interface OutputObject {
    ilk: string;
    what: string;
    clip: string;
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

export interface Dog extends BaseContract {
  connect(runner?: ContractRunner | null): Dog;
  waitForDeployment(): Promise<this>;

  interface: DogInterface;

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

  Dirt: TypedContractMethod<[], [bigint], "view">;

  Hole: TypedContractMethod<[], [bigint], "view">;

  bark: TypedContractMethod<
    [ilk: BytesLike, urn: AddressLike, kpr: AddressLike],
    [bigint],
    "nonpayable"
  >;

  cage: TypedContractMethod<[], [void], "nonpayable">;

  chop: TypedContractMethod<[ilk: BytesLike], [bigint], "view">;

  deny: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  digs: TypedContractMethod<
    [ilk: BytesLike, rad: BigNumberish],
    [void],
    "nonpayable"
  >;

  "file(bytes32,bytes32,uint256)": TypedContractMethod<
    [ilk: BytesLike, what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;

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

  "file(bytes32,bytes32,address)": TypedContractMethod<
    [ilk: BytesLike, what: BytesLike, clip: AddressLike],
    [void],
    "nonpayable"
  >;

  ilks: TypedContractMethod<
    [arg0: BytesLike],
    [
      [string, bigint, bigint, bigint] & {
        clip: string;
        chop: bigint;
        hole: bigint;
        dirt: bigint;
      }
    ],
    "view"
  >;

  live: TypedContractMethod<[], [bigint], "view">;

  rely: TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;

  vat: TypedContractMethod<[], [string], "view">;

  vow: TypedContractMethod<[], [string], "view">;

  wards: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "Dirt"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "Hole"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "bark"
  ): TypedContractMethod<
    [ilk: BytesLike, urn: AddressLike, kpr: AddressLike],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "cage"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "chop"
  ): TypedContractMethod<[ilk: BytesLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "deny"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "digs"
  ): TypedContractMethod<
    [ilk: BytesLike, rad: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "file(bytes32,bytes32,uint256)"
  ): TypedContractMethod<
    [ilk: BytesLike, what: BytesLike, data: BigNumberish],
    [void],
    "nonpayable"
  >;
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
    nameOrSignature: "file(bytes32,bytes32,address)"
  ): TypedContractMethod<
    [ilk: BytesLike, what: BytesLike, clip: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "ilks"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [
      [string, bigint, bigint, bigint] & {
        clip: string;
        chop: bigint;
        hole: bigint;
        dirt: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "live"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "rely"
  ): TypedContractMethod<[usr: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "vat"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "vow"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "wards"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getEvent(
    key: "Bark"
  ): TypedContractEvent<
    BarkEvent.InputTuple,
    BarkEvent.OutputTuple,
    BarkEvent.OutputObject
  >;
  getEvent(
    key: "Cage"
  ): TypedContractEvent<
    CageEvent.InputTuple,
    CageEvent.OutputTuple,
    CageEvent.OutputObject
  >;
  getEvent(
    key: "Deny"
  ): TypedContractEvent<
    DenyEvent.InputTuple,
    DenyEvent.OutputTuple,
    DenyEvent.OutputObject
  >;
  getEvent(
    key: "Digs"
  ): TypedContractEvent<
    DigsEvent.InputTuple,
    DigsEvent.OutputTuple,
    DigsEvent.OutputObject
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
    key: "File(bytes32,bytes32,uint256)"
  ): TypedContractEvent<
    File_bytes32_bytes32_uint256_Event.InputTuple,
    File_bytes32_bytes32_uint256_Event.OutputTuple,
    File_bytes32_bytes32_uint256_Event.OutputObject
  >;
  getEvent(
    key: "File(bytes32,bytes32,address)"
  ): TypedContractEvent<
    File_bytes32_bytes32_address_Event.InputTuple,
    File_bytes32_bytes32_address_Event.OutputTuple,
    File_bytes32_bytes32_address_Event.OutputObject
  >;
  getEvent(
    key: "Rely"
  ): TypedContractEvent<
    RelyEvent.InputTuple,
    RelyEvent.OutputTuple,
    RelyEvent.OutputObject
  >;

  filters: {
    "Bark(bytes32,address,uint256,uint256,uint256,address,uint256)": TypedContractEvent<
      BarkEvent.InputTuple,
      BarkEvent.OutputTuple,
      BarkEvent.OutputObject
    >;
    Bark: TypedContractEvent<
      BarkEvent.InputTuple,
      BarkEvent.OutputTuple,
      BarkEvent.OutputObject
    >;

    "Cage()": TypedContractEvent<
      CageEvent.InputTuple,
      CageEvent.OutputTuple,
      CageEvent.OutputObject
    >;
    Cage: TypedContractEvent<
      CageEvent.InputTuple,
      CageEvent.OutputTuple,
      CageEvent.OutputObject
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

    "Digs(bytes32,uint256)": TypedContractEvent<
      DigsEvent.InputTuple,
      DigsEvent.OutputTuple,
      DigsEvent.OutputObject
    >;
    Digs: TypedContractEvent<
      DigsEvent.InputTuple,
      DigsEvent.OutputTuple,
      DigsEvent.OutputObject
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
    "File(bytes32,bytes32,uint256)": TypedContractEvent<
      File_bytes32_bytes32_uint256_Event.InputTuple,
      File_bytes32_bytes32_uint256_Event.OutputTuple,
      File_bytes32_bytes32_uint256_Event.OutputObject
    >;
    "File(bytes32,bytes32,address)": TypedContractEvent<
      File_bytes32_bytes32_address_Event.InputTuple,
      File_bytes32_bytes32_address_Event.OutputTuple,
      File_bytes32_bytes32_address_Event.OutputObject
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
