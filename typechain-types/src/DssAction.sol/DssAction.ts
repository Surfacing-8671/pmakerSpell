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

export interface DssActionInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "actions"
      | "description"
      | "execute"
      | "nextCastTime"
      | "officeHours"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "actions", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "description",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "execute", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nextCastTime",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "officeHours",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "actions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "description",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nextCastTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "officeHours",
    data: BytesLike
  ): Result;
}

export interface DssAction extends BaseContract {
  connect(runner?: ContractRunner | null): DssAction;
  waitForDeployment(): Promise<this>;

  interface: DssActionInterface;

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

  actions: TypedContractMethod<[], [void], "nonpayable">;

  description: TypedContractMethod<[], [string], "view">;

  execute: TypedContractMethod<[], [void], "nonpayable">;

  nextCastTime: TypedContractMethod<[eta: BigNumberish], [bigint], "view">;

  officeHours: TypedContractMethod<[], [boolean], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "actions"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "description"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "execute"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "nextCastTime"
  ): TypedContractMethod<[eta: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "officeHours"
  ): TypedContractMethod<[], [boolean], "view">;

  filters: {};
}
