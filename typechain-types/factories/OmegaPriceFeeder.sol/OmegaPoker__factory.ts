/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  OmegaPoker,
  OmegaPokerInterface,
} from "../../OmegaPriceFeeder.sol/OmegaPoker";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WPLS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WPLSEDAI",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_oracles",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "_pairs",
    outputs: [
      {
        internalType: "address",
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
        name: "_median",
        type: "address",
      },
      {
        internalType: "address",
        name: "_lp",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "medians",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "oracleFactory",
    outputs: [
      {
        internalType: "contract IPulsexV1OracleFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "rely",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_median",
        type: "address",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "tokenIn",
    outputs: [
      {
        internalType: "address",
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
  "0x608060405273646daa135c6cd060573ef5957c1da3cef735837e600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555034801561006557600080fd5b5060016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611cd6806100b96000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80639c52a7f11161008c578063bf353dbb11610066578063bf353dbb146101fc578063c7f7fb901461022c578063dd715b971461024a578063ef8ef56f1461027a576100cf565b80639c52a7f114610194578063a693686f146101b0578063b7ff14c7146101cc576100cf565b806318178358146100d457806329092d0e146100de57806333c82f56146100fa5780633d1259b21461012a57806365fae35e1461014857806399ce7e8514610164575b600080fd5b6100dc610298565b005b6100f860048036038101906100f391906113a0565b6108e4565b005b610114600480360381019061010f91906113a0565b610996565b60405161012191906113dc565b60405180910390f35b6101326109c9565b60405161013f91906113dc565b60405180910390f35b610162600480360381019061015d91906113a0565b6109e1565b005b61017e600480360381019061017991906113a0565b610aa9565b60405161018b91906113dc565b60405180910390f35b6101ae60048036038101906101a991906113a0565b610adc565b005b6101ca60048036038101906101c591906113f7565b610ba4565b005b6101e660048036038101906101e19190611480565b610d53565b6040516101f391906113dc565b60405180910390f35b610216600480360381019061021191906113a0565b610d92565b60405161022391906114bc565b60405180910390f35b610234610daa565b6040516102419190611536565b60405180910390f35b610264600480360381019061025f9190611480565b610dd0565b60405161027191906113dc565b60405180910390f35b610282610e0f565b60405161028f91906113dc565b60405180910390f35b60006102a46003610e27565b905060008060005b838110156108de5760006102ca826003610e3890919063ffffffff16565b9050600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169350600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1692506000600167ffffffffffffffff8111156103ad576103ac611551565b5b6040519080825280602002602001820160405280156103db5781602001602082028036833780820191505090505b5090506000600167ffffffffffffffff8111156103fb576103fa611551565b5b6040519080825280602002602001820160405280156104295781602001602082028036833780820191505090505b50905073a1077a294dde1b09bb078844df40758a5d0f9a2773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff160361060e576000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b646638473e56043671df55de5cdf8459710433c10324de0ae73a1077a294dde1b09bb078844df40758a5d0f9a27670de0b6b3a76400006040518463ffffffff1660e01b8152600401610504939291906115bb565b602060405180830381865afa158015610521573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105459190611607565b9050633b9aca00816105579190611663565b9050808360008151811061056e5761056d6116a5565b5b602002602001018181525050428260008151811061058f5761058e6116a5565b5b6020026020010181815250508373ffffffffffffffffffffffffffffffffffffffff16632d687b3184846040518363ffffffff1660e01b81526004016105d6929190611792565b600060405180830381600087803b1580156105f057600080fd5b505af1158015610604573d6000803e3d6000fd5b50505050506108d0565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b646638488888973ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa15801561069b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106bf9190611802565b600a6106cb9190611962565b6040518463ffffffff1660e01b81526004016106e9939291906119ad565b602060405180830381865afa158015610706573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072a9190611607565b90506000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b646638473e56043671df55de5cdf8459710433c10324de0ae73a1077a294dde1b09bb078844df40758a5d0f9a27670de0b6b3a76400006040518463ffffffff1660e01b81526004016107bd939291906115bb565b602060405180830381865afa1580156107da573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107fe9190611607565b9050600061081b82633b9aca0085610e839092919063ffffffff16565b90508085600081518110610832576108316116a5565b5b6020026020010181815250504284600081518110610853576108526116a5565b5b6020026020010181815250508573ffffffffffffffffffffffffffffffffffffffff16632d687b3186866040518363ffffffff1660e01b815260040161089a929190611792565b600060405180830381600087803b1580156108b457600080fd5b505af11580156108c8573d6000803e3d6000fd5b505050505050505b5050508060010190506102ac565b50505050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610965576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095c90611a41565b60405180910390fd5b610979816003610ecf90919063ffffffff16565b1561099357610992816003610fa190919063ffffffff16565b5b50565b60026020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b73e56043671df55de5cdf8459710433c10324de0ae81565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610a62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a5990611a41565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b60016020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610b5d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b5490611a41565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208190555050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610c25576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1c90611a41565b60405180910390fd5b610c39836003610ecf90919063ffffffff16565b610d4e57610c518360036111c290919063ffffffff16565b81600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b505050565b60068181548110610d6357600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60006020528060005260406000206000915090505481565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60078181548110610de057600080fd5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b73a1077a294dde1b09bb078844df40758a5d0f9a2781565b600081600101805490509050919050565b6000826001018281548110610e5057610e4f6116a5565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905092915050565b6000827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0484118302158202610eb857600080fd5b818385020460008385870206110190509392505050565b600080836001018054905003610ee85760009050610f9b565b8173ffffffffffffffffffffffffffffffffffffffff16836001018460000160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205481548110610f5657610f556116a5565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161490505b92915050565b610fab8282610ecf565b610fea576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fe190611ad3565b60405180910390fd5b6000826001016001610ffb85610e27565b6110059190611af3565b81548110611016576110156116a5565b5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905060008360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050808460000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550818460010182815481106110e6576110e56116a5565b5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508360000160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600090558360010180548061118757611186611b27565b5b6001900381819060005260206000200160006101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055905550505050565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603611231576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122890611bc8565b60405180910390fd5b61123b8282610ecf565b1561127b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161127290611c80565b60405180910390fd5b81600101819080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600182600101805490506112f49190611af3565b8260000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061136d82611342565b9050919050565b61137d81611362565b811461138857600080fd5b50565b60008135905061139a81611374565b92915050565b6000602082840312156113b6576113b561133d565b5b60006113c48482850161138b565b91505092915050565b6113d681611362565b82525050565b60006020820190506113f160008301846113cd565b92915050565b6000806000606084860312156114105761140f61133d565b5b600061141e8682870161138b565b935050602061142f8682870161138b565b92505060406114408682870161138b565b9150509250925092565b6000819050919050565b61145d8161144a565b811461146857600080fd5b50565b60008135905061147a81611454565b92915050565b6000602082840312156114965761149561133d565b5b60006114a48482850161146b565b91505092915050565b6114b68161144a565b82525050565b60006020820190506114d160008301846114ad565b92915050565b6000819050919050565b60006114fc6114f76114f284611342565b6114d7565b611342565b9050919050565b600061150e826114e1565b9050919050565b600061152082611503565b9050919050565b61153081611515565b82525050565b600060208201905061154b6000830184611527565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000819050919050565b60006115a56115a061159b84611580565b6114d7565b61144a565b9050919050565b6115b58161158a565b82525050565b60006060820190506115d060008301866113cd565b6115dd60208301856113cd565b6115ea60408301846115ac565b949350505050565b60008151905061160181611454565b92915050565b60006020828403121561161d5761161c61133d565b5b600061162b848285016115f2565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061166e8261144a565b91506116798361144a565b92508282026116878161144a565b9150828204841483151761169e5761169d611634565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b6117098161144a565b82525050565b600061171b8383611700565b60208301905092915050565b6000602082019050919050565b600061173f826116d4565b61174981856116df565b9350611754836116f0565b8060005b8381101561178557815161176c888261170f565b975061177783611727565b925050600181019050611758565b5085935050505092915050565b600060408201905081810360008301526117ac8185611734565b905081810360208301526117c08184611734565b90509392505050565b600060ff82169050919050565b6117df816117c9565b81146117ea57600080fd5b50565b6000815190506117fc816117d6565b92915050565b6000602082840312156118185761181761133d565b5b6000611826848285016117ed565b91505092915050565b60008160011c9050919050565b6000808291508390505b60018511156118865780860481111561186257611861611634565b5b60018516156118715780820291505b808102905061187f8561182f565b9450611846565b94509492505050565b60008261189f576001905061195b565b816118ad576000905061195b565b81600181146118c357600281146118cd576118fc565b600191505061195b565b60ff8411156118df576118de611634565b5b8360020a9150848211156118f6576118f5611634565b5b5061195b565b5060208310610133831016604e8410600b84101617156119315782820a90508381111561192c5761192b611634565b5b61195b565b61193e848484600161183c565b9250905081840481111561195557611954611634565b5b81810290505b9392505050565b600061196d8261144a565b9150611978836117c9565b92506119a57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff848461188f565b905092915050565b60006060820190506119c260008301866113cd565b6119cf60208301856113cd565b6119dc60408301846114ad565b949350505050565b600082825260208201905092915050565b7f466c69707065722f6e6f742d617574686f72697a656400000000000000000000600082015250565b6000611a2b6016836119e4565b9150611a36826119f5565b602082019050919050565b60006020820190508181036000830152611a5a81611a1e565b9050919050565b7f556e6f7264657265644b65795365742831303229202d2041646472657373202860008201527f6b65792920646f6573206e6f7420657869737420696e20746865207365742e00602082015250565b6000611abd603f836119e4565b9150611ac882611a61565b604082019050919050565b60006020820190508181036000830152611aec81611ab0565b9050919050565b6000611afe8261144a565b9150611b098361144a565b9250828203905081811115611b2157611b20611634565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603160045260246000fd5b7f556e6f7264657265644b65795365742831303029202d204b65792063616e6e6f60008201527f7420626520307830000000000000000000000000000000000000000000000000602082015250565b6000611bb26028836119e4565b9150611bbd82611b56565b604082019050919050565b60006020820190508181036000830152611be181611ba5565b9050919050565b7f556e6f726465726564416464726573735365742831303129202d20416464726560008201527f737320286b65792920616c72656164792065786973747320696e20746865207360208201527f65742e0000000000000000000000000000000000000000000000000000000000604082015250565b6000611c6a6043836119e4565b9150611c7582611be8565b606082019050919050565b60006020820190508181036000830152611c9981611c5d565b905091905056fea26469706673582212209e8b67c3354e225e852e1e003ced0e4d5caf2d020c4dff607b40998331030d2b64736f6c63430008180033";

type OmegaPokerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OmegaPokerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OmegaPoker__factory extends ContractFactory {
  constructor(...args: OmegaPokerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      OmegaPoker & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): OmegaPoker__factory {
    return super.connect(runner) as OmegaPoker__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OmegaPokerInterface {
    return new Interface(_abi) as OmegaPokerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): OmegaPoker {
    return new Contract(address, _abi, runner) as unknown as OmegaPoker;
  }
}
