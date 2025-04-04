import { expect } from 'chai';
import fs from "fs"
import hre, {ethers, network} from 'hardhat'

import {createDssPause, createDssSpell, createJoin} from './contractUtils';
import {loadFixture, mine, time} from "@nomicfoundation/hardhat-toolbox/network-helpers";


describe('Omega Test', () => {

    beforeEach(async () => {
        // Reset at the block where with the previous MCD_FLOP contract version
        //await reset(14052140);
        //await causeDebt();
    });

    it('Omega Poke',  async function ()  {
        this.timeout(0);
        const [owner] = await hre.ethers.getSigners();
   
const omegaAbi = [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "WPLS",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "WPLSEDAI",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_oracles",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "_pairs",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_median",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_lp",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        }
      ],
      "name": "add",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "usr",
          "type": "address"
        }
      ],
      "name": "deny",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "medians",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "oracleFactory",
      "outputs": [
        {
          "internalType": "contract IPulsexV1OracleFactory",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "poke",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "usr",
          "type": "address"
        }
      ],
      "name": "rely",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_median",
          "type": "address"
        }
      ],
      "name": "remove",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "tokenIn",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "wards",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]


let omegaAddress = '0x7c142f113a9a173FFd835E27fDEDDA00e5a45675'
let vaogt = await hre.ethers.getContractFactory('OmegaPokerFeedTest')
let omega =  await vaogt.deploy()

const provider = new ethers.JsonRpcProvider('https://rpc.pulsechain.com')

let currentOmega = new ethers.Contract(omegaAddress, omegaAbi, provider)



const medians = [
    "0x613433AE2B8d3Ae6371CA6eC26bCe0A73c005bA2",
    "0x82e5e259Ed1569586FCCa571ce50A7D1D6786Bad",
    "0xf11B5fd3839516DE7ac53755eaF277A74EcEf327",
    "0x6E088B573694F1958C2FAdB2d4e926fD8FFF4f2C",
    "0x2BD28b9C8B3B1ACDA7ad8e189Bc02e615A0a3C7c",
    "0x623fE3720C94Ab42CE31CB255780E4d0e1D04a1b",
    "0x4b9aD4401CBDe1ADa6adD90aC40f326fB88dDF4E",
    "0x31df188997E1Fe0C7fb29b43C0D8148D83e1C584",
    "0x5Cf7B83c17B70D2a06c592b91ad4F5C3cCa7c0Dd",
    "0x6f34A64C5bcd197F200E974C2B8180c97bC308ef",
    "0x1694676AA992D3C6aB859D6d9D2e7bc448f4332b",
    "0x8f8cDd12d5F0Ec99B1314c37446ebC50481a16C5",
    "0xB11eDc36668F5509EFE8A563CFA9E7a5A302003e",
    "0x3882c9a2D251a972312e411BcB7E0D9c79788e8A",
    "0x5bdF3B8fB8476f8250420B95e09c5c900a67EBe8",
    "0xa4a1388473267f73F74141bcdF62426761e6C5C2",
    "0x7B64f61f9C30c1A2979AE78ff00D3D1F6d8E51Fc",
    "0x1662712Eb3C4bF961D58a0E118C567343Ac218fC",
    "0x75aeb7a72200241E66d843926B5d584928e89011",
    "0x5E08F4239847792dC6f65d0E178F7e544c119E77",
    "0x9B2722BE6488ee2d2C6862eE316286522aFb9D5b",
    "0xc6111BFCE7A59d3F86d8227DBEcb5255318dd2ad"
  

]

for(let i = 0; i < medians.length; i++){
  
console.log(i)
    await omega.add(medians[i], await currentOmega.medians(medians[i]), await currentOmega.tokenIn(medians[i]))


}

let price = await omega.poke()
for(let i = 0; i < price[0].length; i++){
    //check the price with tokenIn in both normal and human readable output

    console.log(await currentOmega.tokenIn(medians[i]), 'Price is:', price[0][i], 'or', Number(price[0][i])/1e18)


}



   

    });

  
});


