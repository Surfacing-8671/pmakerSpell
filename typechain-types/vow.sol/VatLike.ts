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

export interface VatLikeInterface extends Interface {
  getFunction(
    nameOrSignature: "dai" | "heal" | "hope" | "nope" | "sin"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "dai", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "heal", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "hope", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "nope", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "sin", values: [AddressLike]): string;

  decodeFunctionResult(functionFragment: "dai", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "heal", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hope", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nope", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sin", data: BytesLike): Result;
}

export interface VatLike extends BaseContract {
  connect(runner?: ContractRunner | null): VatLike;
  waitForDeployment(): Promise<this>;

  interface: VatLikeInterface;

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

  dai: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  heal: TypedContractMethod<[arg0: BigNumberish], [void], "nonpayable">;

  hope: TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;

  nope: TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;

  sin: TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "dai"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "heal"
  ): TypedContractMethod<[arg0: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "hope"
  ): TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "nope"
  ): TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "sin"
  ): TypedContractMethod<[arg0: AddressLike], [bigint], "view">;

  filters: {};
}
