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
import type {
  MedianBalUsd,
  MedianBalUsdInterface,
} from "../../Meadian.sol/MedianBalUsd";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_oracle",
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
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "Deny",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "val",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "age",
        type: "uint256",
      },
    ],
    name: "LogMedianPrice",
    type: "event",
  },
  {
    anonymous: true,
    inputs: [
      {
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4",
      },
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "LogNote",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address",
      },
    ],
    name: "Rely",
    type: "event",
  },
  {
    inputs: [],
    name: "age",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "bar",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "bud",
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
        internalType: "address[]",
        name: "a",
        type: "address[]",
      },
    ],
    name: "diss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "diss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "a",
        type: "address[]",
      },
    ],
    name: "drop",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "a",
        type: "address[]",
      },
    ],
    name: "kiss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "a",
        type: "address",
      },
    ],
    name: "kiss",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "a",
        type: "address[]",
      },
    ],
    name: "lift",
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
    name: "orcl",
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
    name: "peek",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "val_",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "age_",
        type: "uint256[]",
      },
    ],
    name: "poke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "read",
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
        internalType: "uint256",
        name: "bar_",
        type: "uint256",
      },
    ],
    name: "setBar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    name: "slot",
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
  {
    inputs: [],
    name: "wat",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405260016002553480156200001657600080fd5b506040516200209c3803806200209c83398181016040528101906200003c919062000136565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505062000168565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620000fe82620000d1565b9050919050565b6200011081620000f1565b81146200011c57600080fd5b50565b600081519050620001308162000105565b92915050565b6000602082840312156200014f576200014e620000cc565b5b60006200015f848285016200011f565b91505092915050565b611f2480620001786000396000f3fe608060405234801561001057600080fd5b50600436106101215760003560e01c806359e02dd7116100ad578063943181061161007157806394318106146102f35780639c52a7f11461030f578063bf353dbb1461032b578063f29c29c41461035b578063febb0f7e1461037757610121565b806359e02dd71461025057806365c4ce7a1461026f57806365fae35e1461028b5780638d0e5a9a146102a75780638ef5eaf0146102d757610121565b8063352d3fba116100f4578063352d3fba146101ac57806346d4577d146101c85780634ca29923146101e45780634fce7a2a1461020257806357de26a41461023257610121565b8063020b2e32146101265780631b25b65f14610156578063262a9dff146101725780632d687b3114610190575b600080fd5b610140600480360381019061013b9190611574565b610395565b60405161014d91906115ba565b60405180910390f35b610170600480360381019061016b919061163a565b6103ad565b005b61017a610583565b60405161018791906116a6565b60405180910390f35b6101aa60048036038101906101a59190611717565b610599565b005b6101c660048036038101906101c191906117c4565b61085a565b005b6101e260048036038101906101dd919061163a565b6109aa565b005b6101ec610aea565b6040516101f9919061180a565b60405180910390f35b61021c60048036038101906102179190611574565b610b0e565b60405161022991906115ba565b60405180910390f35b61023a610b26565b60405161024791906115ba565b60405180910390f35b610258610c53565b604051610266929190611840565b60405180910390f35b61028960048036038101906102849190611574565b610d48565b005b6102a560048036038101906102a09190611574565b610e44565b005b6102c160048036038101906102bc91906118a2565b610f3f565b6040516102ce91906118de565b60405180910390f35b6102f160048036038101906102ec919061163a565b610f72565b005b61030d6004803603810190610308919061163a565b6110b2565b005b61032960048036038101906103249190611574565b611288565b005b61034560048036038101906103409190611574565b611383565b60405161035291906115ba565b60405180910390f35b61037560048036038101906103709190611574565b61139b565b005b61037f611506565b60405161038c91906115ba565b60405180910390f35b60036020528060005260406000206000915090505481565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461042e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161042590611956565b60405180910390fd5b60005b8282905081101561054b57600073ffffffffffffffffffffffffffffffffffffffff1683838381811061046757610466611976565b5b905060200201602081019061047c9190611574565b73ffffffffffffffffffffffffffffffffffffffff16036104d2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104c9906119f1565b60405180910390fd5b6001600460008585858181106104eb576104ea611976565b5b90506020020160208101906105009190611574565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080600101915050610431565b505961012081016040526020815260e0602082015260e0600060408301376024356004353360003560e01c60e01b61012085a4505050565b600160109054906101000a900463ffffffff1681565b60025484849050146105e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d790611a5d565b60405180910390fd5b600080600160109054906101000a900463ffffffff1663ffffffff16905060005b8686905081101561076e576001600360003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461068e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068590611ac9565b60405180910390fd5b818585838181106106a2576106a1611976565b5b90506020020135116106e9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106e090611b35565b60405180910390fd5b828787838181106106fd576106fc611976565b5b905060200201351015610745576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073c90611ba1565b60405180910390fd5b86868281811061075857610757611976565b5b9050602002013592508080600101915050610601565b508585600188889050901c81811061078957610788611976565b5b90506020020135600160006101000a8154816fffffffffffffffffffffffffffffffff02191690836fffffffffffffffffffffffffffffffff16021790555042600160106101000a81548163ffffffff021916908363ffffffff1602179055507fb78ebc573f1f889ca9e1e0fb62c843c836f3d3a2e1f43ef62940e9b894f4ea4c600160009054906101000a90046fffffffffffffffffffffffffffffffff16600160109054906101000a900463ffffffff1660405161084a929190611c49565b60405180910390a1505050505050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054146108db576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108d290611956565b60405180910390fd5b6000811161091e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161091590611cbe565b60405180910390fd5b600060028261092d9190611d0d565b0361096d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096490611d8a565b60405180910390fd5b806002819055505961012081016040526020815260e0602082015260e0600060408301376024356004353360003560e01c60e01b61012085a45050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610a2b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2290611956565b60405180910390fd5b60005b82829050811015610ab257600060046000858585818110610a5257610a51611976565b5b9050602002016020810190610a679190611574565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080600101915050610a2e565b505961012081016040526020815260e0602082015260e0600060408301376024356004353360003560e01c60e01b61012085a4505050565b7f62616c757364000000000000000000000000000000000000000000000000000081565b60046020528060005260406000206000915090505481565b60006001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610baa576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ba190611df6565b60405180910390fd5b6000600160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1611610c1d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c1490611e62565b60405180910390fd5b600160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff16905090565b6000806001600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610cd8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ccf90611df6565b60405180910390fd5b600160009054906101000a90046fffffffffffffffffffffffffffffffff166000600160009054906101000a90046fffffffffffffffffffffffffffffffff166fffffffffffffffffffffffffffffffff1611816fffffffffffffffffffffffffffffffff169150915091509091565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610dc9576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dc090611956565b60405180910390fd5b6000600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505961012081016040526020815260e0602082015260e0600060408301376024356004353360003560e01c60e01b61012085a45050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610ec5576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ebc90611956565b60405180910390fd5b60016000808373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505961012081016040526020815260e0602082015260e0600060408301376024356004353360003560e01c60e01b61012085a45050565b60056020528060005260406000206000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414610ff3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fea90611956565b60405180910390fd5b60005b8282905081101561107a5760006003600085858581811061101a57611019611976565b5b905060200201602081019061102f9190611574565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080600101915050610ff6565b505961012081016040526020815260e0602082015260e0600060408301376024356004353360003560e01c60e01b61012085a4505050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414611133576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161112a90611956565b60405180910390fd5b60005b8282905081101561125057600073ffffffffffffffffffffffffffffffffffffffff1683838381811061116c5761116b611976565b5b90506020020160208101906111819190611574565b73ffffffffffffffffffffffffffffffffffffffff16036111d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016111ce90611ece565b60405180910390fd5b6001600360008585858181106111f0576111ef611976565b5b90506020020160208101906112059190611574565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508080600101915050611136565b505961012081016040526020815260e0602082015260e0600060408301376024356004353360003560e01c60e01b61012085a4505050565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205414611309576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161130090611956565b60405180910390fd5b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505961012081016040526020815260e0602082015260e0600060408301376024356004353360003560e01c60e01b61012085a45050565b60006020528060005260406000206000915090505481565b60016000803373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020541461141c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141390611956565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361148b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611482906119f1565b60405180910390fd5b6001600460008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055505961012081016040526020815260e0602082015260e0600060408301376024356004353360003560e01c60e01b61012085a45050565b60025481565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061154182611516565b9050919050565b61155181611536565b811461155c57600080fd5b50565b60008135905061156e81611548565b92915050565b60006020828403121561158a5761158961150c565b5b60006115988482850161155f565b91505092915050565b6000819050919050565b6115b4816115a1565b82525050565b60006020820190506115cf60008301846115ab565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f8401126115fa576115f96115d5565b5b8235905067ffffffffffffffff811115611617576116166115da565b5b602083019150836020820283011115611633576116326115df565b5b9250929050565b600080602083850312156116515761165061150c565b5b600083013567ffffffffffffffff81111561166f5761166e611511565b5b61167b858286016115e4565b92509250509250929050565b600063ffffffff82169050919050565b6116a081611687565b82525050565b60006020820190506116bb6000830184611697565b92915050565b60008083601f8401126116d7576116d66115d5565b5b8235905067ffffffffffffffff8111156116f4576116f36115da565b5b6020830191508360208202830111156117105761170f6115df565b5b9250929050565b600080600080604085870312156117315761173061150c565b5b600085013567ffffffffffffffff81111561174f5761174e611511565b5b61175b878288016116c1565b9450945050602085013567ffffffffffffffff81111561177e5761177d611511565b5b61178a878288016116c1565b925092505092959194509250565b6117a1816115a1565b81146117ac57600080fd5b50565b6000813590506117be81611798565b92915050565b6000602082840312156117da576117d961150c565b5b60006117e8848285016117af565b91505092915050565b6000819050919050565b611804816117f1565b82525050565b600060208201905061181f60008301846117fb565b92915050565b60008115159050919050565b61183a81611825565b82525050565b600060408201905061185560008301856115ab565b6118626020830184611831565b9392505050565b600060ff82169050919050565b61187f81611869565b811461188a57600080fd5b50565b60008135905061189c81611876565b92915050565b6000602082840312156118b8576118b761150c565b5b60006118c68482850161188d565b91505092915050565b6118d881611536565b82525050565b60006020820190506118f360008301846118cf565b92915050565b600082825260208201905092915050565b7f4d656469616e2f6e6f742d617574686f72697a65640000000000000000000000600082015250565b60006119406015836118f9565b915061194b8261190a565b602082019050919050565b6000602082019050818103600083015261196f81611933565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f4d656469616e2f6e6f2d636f6e74726163742d30000000000000000000000000600082015250565b60006119db6014836118f9565b91506119e6826119a5565b602082019050919050565b60006020820190508181036000830152611a0a816119ce565b9050919050565b7f4d656469616e2f6261722d746f6f2d6c6f770000000000000000000000000000600082015250565b6000611a476012836118f9565b9150611a5282611a11565b602082019050919050565b60006020820190508181036000830152611a7681611a3a565b9050919050565b7f4d656469616e2f696e76616c69642d6f7261636c650000000000000000000000600082015250565b6000611ab36015836118f9565b9150611abe82611a7d565b602082019050919050565b60006020820190508181036000830152611ae281611aa6565b9050919050565b7f4d656469616e2f7374616c652d6d657373616765000000000000000000000000600082015250565b6000611b1f6014836118f9565b9150611b2a82611ae9565b602082019050919050565b60006020820190508181036000830152611b4e81611b12565b9050919050565b7f4d656469616e2f6d657373616765732d6e6f742d696e2d6f7264657200000000600082015250565b6000611b8b601c836118f9565b9150611b9682611b55565b602082019050919050565b60006020820190508181036000830152611bba81611b7e565b9050919050565b60006fffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611c02611bfd611bf884611bc1565b611bdd565b6115a1565b9050919050565b611c1281611be7565b82525050565b6000611c33611c2e611c2984611687565b611bdd565b6115a1565b9050919050565b611c4381611c18565b82525050565b6000604082019050611c5e6000830185611c09565b611c6b6020830184611c3a565b9392505050565b7f4d656469616e2f71756f72756d2d69732d7a65726f0000000000000000000000600082015250565b6000611ca86015836118f9565b9150611cb382611c72565b602082019050919050565b60006020820190508181036000830152611cd781611c9b565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000611d18826115a1565b9150611d23836115a1565b925082611d3357611d32611cde565b5b828206905092915050565b7f4d656469616e2f71756f72756d2d6e6f742d6f64642d6e756d62657200000000600082015250565b6000611d74601c836118f9565b9150611d7f82611d3e565b602082019050919050565b60006020820190508181036000830152611da381611d67565b9050919050565b7f4d656469616e2f636f6e74726163742d6e6f742d77686974656c697374656400600082015250565b6000611de0601f836118f9565b9150611deb82611daa565b602082019050919050565b60006020820190508181036000830152611e0f81611dd3565b9050919050565b7f4d656469616e2f696e76616c69642d70726963652d6665656400000000000000600082015250565b6000611e4c6019836118f9565b9150611e5782611e16565b602082019050919050565b60006020820190508181036000830152611e7b81611e3f565b9050919050565b7f4d656469616e2f6e6f2d6f7261636c652d300000000000000000000000000000600082015250565b6000611eb86012836118f9565b9150611ec382611e82565b602082019050919050565b60006020820190508181036000830152611ee781611eab565b905091905056fea2646970667358221220caf2996f06d3280987f562fef6cf13b9741929f42aedb723d7802bd54f288b6264736f6c63430008180033";

type MedianBalUsdConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MedianBalUsdConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MedianBalUsd__factory extends ContractFactory {
  constructor(...args: MedianBalUsdConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _oracle: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_oracle, overrides || {});
  }
  override deploy(
    _oracle: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_oracle, overrides || {}) as Promise<
      MedianBalUsd & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): MedianBalUsd__factory {
    return super.connect(runner) as MedianBalUsd__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MedianBalUsdInterface {
    return new Interface(_abi) as MedianBalUsdInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): MedianBalUsd {
    return new Contract(address, _abi, runner) as unknown as MedianBalUsd;
  }
}
