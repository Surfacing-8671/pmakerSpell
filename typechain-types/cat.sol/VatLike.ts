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
    nameOrSignature: "grab" | "hope" | "ilks" | "nope" | "urns"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "grab",
    values: [
      BytesLike,
      AddressLike,
      AddressLike,
      AddressLike,
      BigNumberish,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(functionFragment: "hope", values: [AddressLike]): string;
  encodeFunctionData(functionFragment: "ilks", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "nope", values: [AddressLike]): string;
  encodeFunctionData(
    functionFragment: "urns",
    values: [BytesLike, AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "grab", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hope", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ilks", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nope", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "urns", data: BytesLike): Result;
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

  grab: TypedContractMethod<
    [
      arg0: BytesLike,
      arg1: AddressLike,
      arg2: AddressLike,
      arg3: AddressLike,
      arg4: BigNumberish,
      arg5: BigNumberish
    ],
    [void],
    "nonpayable"
  >;

  hope: TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;

  ilks: TypedContractMethod<
    [arg0: BytesLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        Art: bigint;
        rate: bigint;
        spot: bigint;
        line: bigint;
        dust: bigint;
      }
    ],
    "view"
  >;

  nope: TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;

  urns: TypedContractMethod<
    [arg0: BytesLike, arg1: AddressLike],
    [[bigint, bigint] & { ink: bigint; art: bigint }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "grab"
  ): TypedContractMethod<
    [
      arg0: BytesLike,
      arg1: AddressLike,
      arg2: AddressLike,
      arg3: AddressLike,
      arg4: BigNumberish,
      arg5: BigNumberish
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hope"
  ): TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "ilks"
  ): TypedContractMethod<
    [arg0: BytesLike],
    [
      [bigint, bigint, bigint, bigint, bigint] & {
        Art: bigint;
        rate: bigint;
        spot: bigint;
        line: bigint;
        dust: bigint;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "nope"
  ): TypedContractMethod<[arg0: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "urns"
  ): TypedContractMethod<
    [arg0: BytesLike, arg1: AddressLike],
    [[bigint, bigint] & { ink: bigint; art: bigint }],
    "view"
  >;

  filters: {};
}
