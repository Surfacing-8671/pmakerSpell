/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
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

export interface DssExecInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "action"
      | "cast"
      | "description"
      | "done"
      | "eta"
      | "expiration"
      | "log"
      | "nextCastTime"
      | "officeHours"
      | "pause"
      | "schedule"
      | "sig"
      | "tag"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "action", values?: undefined): string;
  encodeFunctionData(functionFragment: "cast", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "done", values?: undefined): string;
  encodeFunctionData(functionFragment: "eta", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "expiration",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "log", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nextCastTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "officeHours",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pause", values?: undefined): string;
  encodeFunctionData(functionFragment: "schedule", values?: undefined): string;
  encodeFunctionData(functionFragment: "sig", values?: undefined): string;
  encodeFunctionData(functionFragment: "tag", values?: undefined): string;

  decodeFunctionResult(functionFragment: "action", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "cast", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "done", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "eta", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "expiration", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "log", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextCastTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "officeHours",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pause", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "schedule", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sig", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tag", data: BytesLike): Result;
}

export interface DssExec extends BaseContract {
  connect(runner?: ContractRunner | null): DssExec;
  waitForDeployment(): Promise<this>;

  interface: DssExecInterface;

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

  action: TypedContractMethod<[], [string], "view">;

  cast: TypedContractMethod<[], [void], "nonpayable">;

  description: TypedContractMethod<[], [string], "view">;

  done: TypedContractMethod<[], [boolean], "view">;

  eta: TypedContractMethod<[], [bigint], "view">;

  expiration: TypedContractMethod<[], [bigint], "view">;

  log: TypedContractMethod<[], [string], "view">;

  nextCastTime: TypedContractMethod<[], [bigint], "view">;

  officeHours: TypedContractMethod<[], [boolean], "view">;

  pause: TypedContractMethod<[], [string], "view">;

  schedule: TypedContractMethod<[], [void], "nonpayable">;

  sig: TypedContractMethod<[], [string], "view">;

  tag: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "action"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "cast"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "description"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "done"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "eta"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "expiration"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "log"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "nextCastTime"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "officeHours"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "pause"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "schedule"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sig"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "tag"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
