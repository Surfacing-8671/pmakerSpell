/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Spotter, SpotterInterface } from "../../spot.sol/Spotter";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "vat_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "spot",
        type: "uint256",
      },
    ],
    name: "Poke",
    type: "event",
  },
  {
    inputs: [],
    name: "cage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "deny",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "what",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "file",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "what",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "data",
        type: "uint256",
      },
    ],
    name: "file",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "what",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "pip_",
        type: "address",
      },
    ],
    name: "file",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "ilks",
    outputs: [
      {
        internalType: "contract PipLike",
        name: "pip",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "mat",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "live",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "par",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "ilk",
        type: "bytes32",
      },
    ],
    name: "poke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "guy",
        type: "address",
      },
    ],
    name: "rely",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vat",
    outputs: [
      {
        internalType: "contract VatLike",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "wards",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161102c38038061102c8339818101604052602081101561003357600080fd5b810190808051906020019092919050505060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555080600260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506b033b2e3c9fd0803ce8000000600381905550600160048190555050610f38806100f46000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c8063692450091161007157806369245009146101f7578063957aa58c146102015780639c52a7f11461021f578063bf353dbb14610263578063d9638d36146102bb578063ebecb39d1461031a576100b4565b80631504460f146100b95780631a0b287e146100e757806329ae81141461012957806336569e7714610161578063495d32cb1461019557806365fae35e146101b3575b600080fd5b6100e5600480360360208110156100cf57600080fd5b8101908080359060200190929190505050610372565b005b610127600480360360608110156100fd57600080fd5b81019080803590602001909291908035906020019092919080359060200190929190505050610591565b005b61015f6004803603604081101561013f57600080fd5b810190808035906020019092919080359060200190929190505050610778565b005b61016961094a565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b61019d610970565b6040518082815260200191505060405180910390f35b6101f5600480360360208110156101c957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610976565b005b6101ff610a71565b005b610209610b2f565b6040518082815260200191505060405180910390f35b6102616004803603602081101561023557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b35565b005b6102a56004803603602081101561027957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c30565b6040518082815260200191505060405180910390f35b6102e7600480360360208110156102d157600080fd5b8101908080359060200190929190505050610c48565b604051808373ffffffffffffffffffffffffffffffffffffffff1681526020018281526020019250505060405180910390f35b6103706004803603606081101561033057600080fd5b810190808035906020019092919080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610c8c565b005b6000806001600084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166359e02dd76040518163ffffffff1660e01b81526004016040805180830381600087803b1580156103f257600080fd5b505af1158015610406573d6000803e3d6000fd5b505050506040513d604081101561041c57600080fd5b81019080805190602001909291908051906020019092919050505091509150600081610449576000610485565b6104846104686104608560001c633b9aca00610ead565b600354610ed9565b6001600087815260200190815260200160002060010154610ed9565b5b9050600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16631a0b287e85836040518363ffffffff1660e01b815260040180838152602001807f73706f740000000000000000000000000000000000000000000000000000000081525060200182815260200192505050600060405180830381600087803b15801561052c57600080fd5b505af1158015610540573d6000803e3d6000fd5b505050507fdfd7467e425a8107cfd368d159957692c25085aacbcf5228ce08f10f2146486e84848360405180848152602001838152602001828152602001935050505060405180910390a150505050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610645576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53706f747465722f6e6f742d617574686f72697a65640000000000000000000081525060200191505060405180910390fd5b6001600454146106bd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f53706f747465722f6e6f742d6c6976650000000000000000000000000000000081525060200191505060405180910390fd5b7f6d6174000000000000000000000000000000000000000000000000000000000082141561070557806001600085815260200190815260200160002060010181905550610773565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f53706f747465722f66696c652d756e7265636f676e697a65642d706172616d0081525060200191505060405180910390fd5b505050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461082c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53706f747465722f6e6f742d617574686f72697a65640000000000000000000081525060200191505060405180910390fd5b6001600454146108a4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f53706f747465722f6e6f742d6c6976650000000000000000000000000000000081525060200191505060405180910390fd5b7f70617200000000000000000000000000000000000000000000000000000000008214156108d85780600381905550610946565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f53706f747465722f66696c652d756e7265636f676e697a65642d706172616d0081525060200191505060405180910390fd5b5050565b600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60035481565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610a2a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53706f747465722f6e6f742d617574686f72697a65640000000000000000000081525060200191505060405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610b25576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53706f747465722f6e6f742d617574686f72697a65640000000000000000000081525060200191505060405180910390fd5b6000600481905550565b60045481565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610be9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53706f747465722f6e6f742d617574686f72697a65640000000000000000000081525060200191505060405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b60006020528060005260406000206000915090505481565b60016020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154905082565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610d40576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f53706f747465722f6e6f742d617574686f72697a65640000000000000000000081525060200191505060405180910390fd5b600160045414610db8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f53706f747465722f6e6f742d6c6976650000000000000000000000000000000081525060200191505060405180910390fd5b7f7069700000000000000000000000000000000000000000000000000000000000821415610e3a57806001600085815260200190815260200160002060000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610ea8565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f53706f747465722f66696c652d756e7265636f676e697a65642d706172616d0081525060200191505060405180910390fd5b505050565b600080821480610eca5750828283850292508281610ec757fe5b04145b610ed357600080fd5b92915050565b600081610ef2846b033b2e3c9fd0803ce8000000610ead565b81610ef957fe5b0490509291505056fea26469706673582212202bef259c3e006de4e4f72097c1c2d68f5cc4c3678825f6573d833083ddf55dbd64736f6c634300060c0033";

type SpotterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SpotterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Spotter__factory extends ContractFactory {
  constructor(...args: SpotterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    vat_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(vat_, overrides || {});
  }
  override deploy(
    vat_: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(vat_, overrides || {}) as Promise<
      Spotter & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Spotter__factory {
    return super.connect(runner) as Spotter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SpotterInterface {
    return new Interface(_abi) as SpotterInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Spotter {
    return new Contract(address, _abi, runner) as unknown as Spotter;
  }
}
