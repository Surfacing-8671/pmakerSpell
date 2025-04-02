import { expect } from 'chai';
import fs from "fs"
import hre, {ethers, network} from 'hardhat'
// import { causeDebt } from './helpers/auctionSimulators';
import {createDssPause, createDssSpell, createJoin, getContract} from './contractUtils';
import {loadFixture, mine, time} from "@nomicfoundation/hardhat-toolbox/network-helpers";


describe('Debt Auction', () => {

    beforeEach(async () => {
        // Reset at the block where with the previous MCD_FLOP contract version
        //await reset(14052140);
        //await causeDebt();
    });
    it('should take less than 500ms', function (done) {
        this.timeout(500);
        setTimeout(done, 300);
      });
    it('Flopper kicked',  async function ()  {
        this.timeout(0);
     
      //  const debtContract = await getContract('MCD_FLOP');
     // this.timeout(100000); 
      const [owner] = await hre.ethers.getSigners();
      const tx = await owner.sendTransaction({
        to: '0x208266c96F9A4e61856EFe2417eaB3b9EF59B22f',
        value: 100000000000000000000000n,
      });
      // const kicks = await debtContract.kicks();
      let med = await hre.ethers.getContractFactory('MedianGnoUsd')
//       let g =  med.connect(owner).attach('0x7B64f61f9C30c1A2979AE78ff00D3D1F6d8E51Fc')
// await g.rely('0xbe8e3e3618f7474f8cb1d074a26affef007e98fb')
       const pauser = await createDssPause()
       const speller = await createDssSpell()
    //    const speller2 = await createDssSpell()

      // const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID");

       // Get the code at the address
       const code = await hre.ethers.provider.getCode(await speller.getAddress());
     //  const code2 = await hre.ethers.provider.getCode(await speller2.getAddress());
     
       // The hash of the code is the equivalent of `extcodehash`
       const codeHash = ethers.solidityPackedKeccak256(["bytes"], [code]);
     //  const codeHash2 = ethers.solidityPackedKeccak256(["bytes"], [code2]);
       console.log(codeHash)
       let timer = await time.latest()
       //await gaugeController.setGenesis(timer);
let abi = [
  {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "anonymous": true,
      "inputs": [
          {
              "indexed": true,
              "internalType": "bytes4",
              "name": "sig",
              "type": "bytes4"
          },
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "arg1",
              "type": "bytes32"
          },
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "arg2",
              "type": "bytes32"
          },
          {
              "indexed": true,
              "internalType": "bytes32",
              "name": "arg3",
              "type": "bytes32"
          },
          {
              "indexed": false,
              "internalType": "bytes",
              "name": "data",
              "type": "bytes"
          }
      ],
      "name": "LogNote",
      "type": "event"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "Line",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [],
      "name": "cage",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "can",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "dai",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "debt",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "usr",
              "type": "address"
          }
      ],
      "name": "deny",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "ilk",
              "type": "bytes32"
          },
          {
              "internalType": "bytes32",
              "name": "what",
              "type": "bytes32"
          },
          {
              "internalType": "uint256",
              "name": "data",
              "type": "uint256"
          }
      ],
      "name": "file",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "what",
              "type": "bytes32"
          },
          {
              "internalType": "uint256",
              "name": "data",
              "type": "uint256"
          }
      ],
      "name": "file",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "ilk",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "src",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "dst",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "wad",
              "type": "uint256"
          }
      ],
      "name": "flux",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "i",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "u",
              "type": "address"
          },
          {
              "internalType": "int256",
              "name": "rate",
              "type": "int256"
          }
      ],
      "name": "fold",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "ilk",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "src",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "dst",
              "type": "address"
          },
          {
              "internalType": "int256",
              "name": "dink",
              "type": "int256"
          },
          {
              "internalType": "int256",
              "name": "dart",
              "type": "int256"
          }
      ],
      "name": "fork",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "i",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "u",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "v",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "w",
              "type": "address"
          },
          {
              "internalType": "int256",
              "name": "dink",
              "type": "int256"
          },
          {
              "internalType": "int256",
              "name": "dart",
              "type": "int256"
          }
      ],
      "name": "frob",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "gem",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "i",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "u",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "v",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "w",
              "type": "address"
          },
          {
              "internalType": "int256",
              "name": "dink",
              "type": "int256"
          },
          {
              "internalType": "int256",
              "name": "dart",
              "type": "int256"
          }
      ],
      "name": "grab",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "uint256",
              "name": "rad",
              "type": "uint256"
          }
      ],
      "name": "heal",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "usr",
              "type": "address"
          }
      ],
      "name": "hope",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          }
      ],
      "name": "ilks",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "Art",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "rate",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "spot",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "line",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "dust",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "ilk",
              "type": "bytes32"
          }
      ],
      "name": "init",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "live",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "src",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "dst",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "rad",
              "type": "uint256"
          }
      ],
      "name": "move",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "usr",
              "type": "address"
          }
      ],
      "name": "nope",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "usr",
              "type": "address"
          }
      ],
      "name": "rely",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "sin",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "ilk",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "usr",
              "type": "address"
          },
          {
              "internalType": "int256",
              "name": "wad",
              "type": "int256"
          }
      ],
      "name": "slip",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": false,
      "inputs": [
          {
              "internalType": "address",
              "name": "u",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "v",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "rad",
              "type": "uint256"
          }
      ],
      "name": "suck",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [
          {
              "internalType": "bytes32",
              "name": "",
              "type": "bytes32"
          },
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "urns",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "ink",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "art",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
      "inputs": [],
      "name": "vice",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  },
  {
      "constant": true,
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
      "payable": false,
      "stateMutability": "view",
      "type": "function"
  }
]
     let omegaAddress = '0x7c142f113a9a173FFd835E27fDEDDA00e5a45675'
       let vaogt = await hre.ethers.getContractFactory('OmegaPokerFeed')
         let omega =  vaogt.attach(omegaAddress)
       // advance to next epoch
       let vatContract = new ethers.Contract('0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B', abi, owner)
       let m = await vatContract.Line()
       let mn2 = await vatContract.debt()
     
       await pauser.plot(await speller.getAddress(), codeHash, '0x61461954', 1743560705)
       await time.increaseTo(1743560705 + 500);
       await pauser.exec(await speller.getAddress(), codeHash, '0x61461954', 1743560705)

       let dai = await hre.ethers.getContractFactory('DaiPoker')
       let daipoker =  dai.attach('0x72550B5e1c3904faEEa48F0149C168386E4c4D65')

       await daipoker.poke()

      // await time.increaseTo(1743560705 + 3600 +500);
    //    await pauser.plot(await speller2.getAddress(), codeHash2, '0x61461954', 1743560705 + 3600)
      // await time.increaseTo(1743560705 + 3600);
       await omega.poke()
    //    await pauser.exec(await speller2.getAddress(), codeHash2, '0x61461954', 1743560705 + 3600)
    //await omega.poke()

    const addresses = [
        "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763",
        "0xB4eb54AF9Cc7882DF0121d26c5b97E802915ABe6",
        "0x64ee82FC3Af7785fBD78A2Be24b0b31cd7Bfd2E0",
        "0xf185d0682d50819263941e5f4EacC763CC5C6C42",
        "0x3A2D8aDb238F47B4D258545701439E05DB201574",
        "0x7382c066801E7Acb2299aC8562847B9883f5CD3c",
        "0xf36B79BD4C0904A5F350F1e4f776B81208c13069",
        "0x8067259EA630601f319FccE477977E55C6078C13",
        "0x7a5918670B0C390aD25f7beE908c1ACc2d314A3C",
        "0x348Fc3eF33373828e09270e9b2DC672Eb5e5FDf8",
        "0xBED0879953E633135a48a157718Aa791AC0108E4",
        "0x9eb923339c24c40Bef2f4AF4961742AA7C23EF3a",
        "0x9B0C694C6939b5EA9584e9b61C7815E8d97D9cC7",
        "0x3ff860c0F28D69F392543A16A397D0dAe85D16dE",
        "0x5F122465bCf86F45922036970Be6DD7F58820214",
        "0x828169221293Cb90d747B17341b7b7b20E58E039",
        "0xf363c7e351C96b910b92b45d34190650df4aE8e7",
        "0x8Df8f06DC2dE0434db40dcBb32a82A104218754c",
        "0x8874964279302e6d4e523Fb1789981C39a1034Ba",
        "0xFe7a2aC0B945f12089aEEB6eCebf4F384D9f043F",
        "0xeE7F0b350aA119b3d05DC733a4621a81972f7D47",
        "0xd800ca44fFABecd159c7889c3bf64a217361AEc8"
      ];
      
    let ilks = [
        '0x4554482d41000000000000000000000000000000000000000000000000000000',
        '0x4554482d42000000000000000000000000000000000000000000000000000000',
        '0x4554482d43000000000000000000000000000000000000000000000000000000',
        '0x4241542d41000000000000000000000000000000000000000000000000000000',
        '0x555344432d410000000000000000000000000000000000000000000000000000',
        '0x555344432d420000000000000000000000000000000000000000000000000000',
        '0x574254432d410000000000000000000000000000000000000000000000000000',
        '0x545553442d410000000000000000000000000000000000000000000000000000',
        '0x5a52582d41000000000000000000000000000000000000000000000000000000',
        '0x4b4e432d41000000000000000000000000000000000000000000000000000000',
        '0x4d414e412d410000000000000000000000000000000000000000000000000000',
        '0x555344542d410000000000000000000000000000000000000000000000000000',
        '0x5041585553442d41000000000000000000000000000000000000000000000000',
        '0x434f4d502d410000000000000000000000000000000000000000000000000000',
        '0x4c52432d41000000000000000000000000000000000000000000000000000000',
        '0x4c494e4b2d410000000000000000000000000000000000000000000000000000',
        '0x42414c2d41000000000000000000000000000000000000000000000000000000',
        '0x5946492d41000000000000000000000000000000000000000000000000000000',
        '0x475553442d410000000000000000000000000000000000000000000000000000',
        '0x554e492d41000000000000000000000000000000000000000000000000000000',
        '0x52454e4254432d41000000000000000000000000000000000000000000000000',
        '0x414156452d410000000000000000000000000000000000000000000000000000',
        '0x554e4956324441494554482d4100000000000000000000000000000000000000',
        '0x554e495632574254434554482d41000000000000000000000000000000000000',
        '0x554e495632555344434554482d41000000000000000000000000000000000000',
        '0x554e495632444149555344432d41000000000000000000000000000000000000',
        '0x554e495632455448555344542d41000000000000000000000000000000000000',
        '0x554e4956324c494e4b4554482d41000000000000000000000000000000000000',
        '0x554e495632554e494554482d4100000000000000000000000000000000000000',
        '0x554e495632574254434441492d41000000000000000000000000000000000000',
        '0x554e495632414156454554482d41000000000000000000000000000000000000',
        '0x554e495632444149555344542d41000000000000000000000000000000000000',
        '0x50534d2d555344432d4100000000000000000000000000000000000000000000',
        '0x5257413030312d41000000000000000000000000000000000000000000000000',
        '0x5257413030322d41000000000000000000000000000000000000000000000000',
        '0x5257413030332d41000000000000000000000000000000000000000000000000',
        '0x5257413030342d41000000000000000000000000000000000000000000000000',
        '0x5257413030352d41000000000000000000000000000000000000000000000000',
        '0x5257413030362d41000000000000000000000000000000000000000000000000',
        '0x50534d2d5041582d410000000000000000000000000000000000000000000000',
        '0x4d415449432d4100000000000000000000000000000000000000000000000000',
        '0x47554e49563344414955534443312d4100000000000000000000000000000000',
        '0x5753544554482d41000000000000000000000000000000000000000000000000',
        '0x5257413031332d41000000000000000000000000000000000000000000000000',
        '0x574254432d420000000000000000000000000000000000000000000000000000',
        '0x574254432d430000000000000000000000000000000000000000000000000000',
        '0x50534d2d475553442d4100000000000000000000000000000000000000000000',
        '0x47554e49563344414955534443322d4100000000000000000000000000000000',
        '0x435256563145544853544554482d410000000000000000000000000000000000',
        '0x5753544554482d42000000000000000000000000000000000000000000000000',
        '0x5257413030382d41000000000000000000000000000000000000000000000000',
        '0x5257413030392d41000000000000000000000000000000000000000000000000',
        
        '0x5257413030372d41000000000000000000000000000000000000000000000000',
        '0x524554482d410000000000000000000000000000000000000000000000000000',
        '0x4449524543542d434f4d5056322d444149000000000000000000000000000000',
        '0x474e4f2d41000000000000000000000000000000000000000000000000000000',
        '0x5257413031302d41000000000000000000000000000000000000000000000000',
        '0x5257413031312d41000000000000000000000000000000000000000000000000',
        '0x5257413031322d41000000000000000000000000000000000000000000000000',
        '0x4449524543542d4141564556322d444149000000000000000000000000000000',
        '0x4449524543542d535041524b2d44414900000000000000000000000000000000'
      ]
    
    let sp = await hre.ethers.getContractFactory('Spotter')
    let osm = await hre.ethers.getContractFactory('OSM')

  

    for(let i = 0; i < addresses.length; i++){
        let ooosm =  osm.attach(addresses[i])
     
        await ooosm.poke()

    }
    
    let spotter =  sp.attach('0x65C79fcB50Ca1594B025960e539eD7A9a6D434A3')

    for(let i = 0; i < ilks.length; i++){

        await spotter.poke(ilks[i])

    }

    await time.increaseTo(1743560705 + 3600 +500);
    await omega.poke()
    for(let i = 0; i < addresses.length; i++){
        let ooosm =  osm.attach(addresses[i])
  
        await ooosm.poke()

    }
    


    for(let i = 0; i < ilks.length; i++){

        await spotter.poke(ilks[i])

    }
    
    // await time.increaseTo(1743560705 + 3600 +500 + 3600);
    // await ooosm.poke()
    // await spotter.poke('0x4554482d41000000000000000000000000000000000000000000000000000000')
       let ilk = await hre.ethers.getContractFactory('IlkRegistry')
       let ilker =  ilk.attach('0x5a464C28D19848f44199D003BeF5ecc87d090F87')

       let vat = await hre.ethers.getContractFactory('Vat')
       //let jug = await hre.ethers.getContractFactory('Jug')
       let vaters =  vat.attach('0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B')
      // let jugger =  vat.attach('0x19c0976f590D67707E62397C87829d896Dc0f1F1')

    //    let m2 = await vatContract.Line()
    //    let mn = await vatContract.debt()

    //    console.log(m)
    //    console.log((m) - (m2))
    //    console.log((m2) - (mn))
         let list = await ilker.list();
  console.log(list);
  interface Moo2 {
    name: string;
    symbol: string;
    IlkName: string;
    class: string;
    dec: number;
    gem: string;
    pip: string;
    join: string;
    xlip: string;
    art: bigint;
    rate: bigint;
    spot: bigint;
    line: bigint;
    dust: bigint;
    AvailableDebt: number;
    Ilk: string;
}

  let dude : Moo2[] = [] 
  
   for(let i = 0; i < list.length; i ++){
    let g2 = await vaters.ilks(list[i])
     let g1 = await ilker.info(list[i]);

     const decodedIlk = ethers.decodeBytes32String(list[i])
     const nLine = g2[0] * g2[1]
     const moo = g2[3] - nLine;
     const co = Number(moo)/1e45

     let moo2 : Moo2 = {
        "name": g1[0],   // Removed extra colon
        "symbol": g1[1],
        "IlkName": decodedIlk,
        "class": g1[2],
        "dec": g1[3], 
        "gem": g1[4],
        "pip": g1[5],
        "join": g1[6],
        "xlip": g1[7],
        "art": g2[0],
        "rate": g2[1],
        "spot": g2[2],
        "line": g2[3],
        "dust": g2[4],
        "AvailableDebt": co,  // Removed space inside key
        "Ilk": list[i]        // Removed space inside key
    };
    
    dude.push(moo2);

     console.log("Name:", g1[0]);
     console.log("Symbol:", g1[1]);
     console.log("Ilk Name:", decodedIlk)
     console.log("Class:", g1[2])
     console.log("Dec:", g1[3])
     console.log("Gem:", g1[4])
     console.log("Pip:", g1[5])
     console.log("Join:", g1[6])
     console.log("xlip:", g1[7])
     console.log("Art:", g2[0])
     console.log("Rate:", g2[1])
     console.log("Spot:", g2[2])
     console.log("Line:", g2[3])
     console.log("Dust:", g2[4])
     console.log("AvailableDebt: ", co)
     console.log("Ilk: ", list[i])
     console.log('____________________________________________________')
     console.log('                                                      ')
    
}

const jsonString = JSON.stringify(dude, (key, value) =>
    typeof value === "bigint" ? value.toString() : value, 2
);



// Save to a file
fs.writeFileSync('makerData.json', jsonString, 'utf-8');
     //  console.log(kicks)
     //  expect(kicks).to.eq('0x00');
    });

    it('poke test', async () => {
        //  const debtContract = await getContract('MCD_FLOP');
        const [owner] = await hre.ethers.getSigners();
    
         //await gaugeController.setGenesis(timer);
 
         
         let vat = await hre.ethers.getContractFactory('OmegaPoker')
         let omega = await vat.deploy()

         let med = await hre.ethers.getContractFactory('Median')
         let median = await med.deploy(await omega.getAddress())
         let median1 = await med.deploy(await omega.getAddress())
         let median2 = await med.deploy(await omega.getAddress())
         let median3 = await med.deploy(await omega.getAddress())
         let median4 = await med.deploy(await omega.getAddress())
         let median5 = await med.deploy(await omega.getAddress())
         let median6 = await med.deploy(await omega.getAddress())
         let median7 = await med.deploy(await omega.getAddress())
         let median8 = await med.deploy(await omega.getAddress())
         let median9 = await med.deploy(await omega.getAddress())
         let median10 = await med.deploy(await omega.getAddress())
         let median11 = await med.deploy(await omega.getAddress())
         let median12 = await med.deploy(await omega.getAddress())
         let median13 = await med.deploy(await omega.getAddress())
         let median14 = await med.deploy(await omega.getAddress())
         let median15 = await med.deploy(await omega.getAddress())
         let median16 = await med.deploy(await omega.getAddress())
         let median17 = await med.deploy(await omega.getAddress())
         let median18 = await med.deploy(await omega.getAddress())
         let median19 = await med.deploy(await omega.getAddress())
         let median20 = await med.deploy(await omega.getAddress())
         let median21 = await med.deploy(await omega.getAddress())
        // let median22 = await med.deploy(await omega.getAddress())
  
        //  let DaiPoker = await hre.ethers.getContractFactory('DaiPoker')
        //  let di = await DaiPoker.deploy()
        //  let lpOracle = await hre.ethers.getContractFactory('CurveLPOracle')
        //  let lpO = await lpOracle.deploy(owner, '0xDC24316b9AE028F1497c275EB9192a3Ea0f67022', '0x435256563145544853544554482d410000000000000000000000000000000000', [await median1.getAddress(), await median2.getAddress()], true)

        //  await median1.kiss(await lpO.getAddress())
        //  await median2.kiss(await lpO.getAddress())

      //   console.log(await di.poke())
        
         

         await omega.add(await median.getAddress(), '0x7994d526A127979BcB9Ec7C98509BB5C7ebD78FD', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
         await omega.add(await median1.getAddress(), '0xfF11034318cfc2c128Ab768a381121F78635fe6b', '0x0D8775F648430679A709E98d2b0Cb6250d2887EF')
         await omega.add(await median2.getAddress(), '0x6444456960C3f95b5b408f4d9E00220643f06F94', '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')
         await omega.add(await median3.getAddress(), '0x46E27Ea3A035FfC9e6d6D56702CE3D208FF1e58c', '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599')
         await omega.add(await median4.getAddress(), '0x0C330f304bA67CD4a41538BdebB7F20d057D965c', '0x0000000000085d4780B73119b644AE5ecd22b376')
         await omega.add(await median5.getAddress(), '0x1DB0E113C3468c6EE49f4AA731d06c6887469163', '0xE41d2489571d322189246DaFA5ebDe1F4699F498')
         await omega.add(await median6.getAddress(), '0x6B9a8C58cAd240bb0D3f4be056A3247E606Cdd61', '0xdd974D5C2e2928deA5F71b9825b8b646686BD200')
         await omega.add(await median7.getAddress(), '0x4c3F603c3D7105f22C3B18dF4383ED8e13A7A516', '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942')
         await omega.add(await median8.getAddress(), '0xFadc475639131C1EAC3655c37EDA430851d53716', '0xdAC17F958D2ee523a2206206994597C13D831ec7')
         await omega.add(await median9.getAddress(), '0x1a2b07Ddc5F1B88713dfa4f1fA58717aF317e13A', '0x8E870D67F660D95d5be530380D0eC0bd388289E1')
         await omega.add(await median10.getAddress(), '0x57251492b7F9b8ecd8A7209C9EEf555501C268BB', '0xc00e94Cb662C3520282E6f5717214004A7f26888')
         await omega.add(await median11.getAddress(), '0x62899bD22d5F279b447436971eE0F24c7459076E', '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD')
         await omega.add(await median12.getAddress(), '0x59F3374736b4705479F9CE070F846F6773682055', '0x514910771AF9Ca656af840dff83E8264EcF986CA')
         await omega.add(await median13.getAddress(), '0xbBc3E76168708069A2889a1C179B14D56522102A', '0xba100000625a3754423978a60c9317c58a424e3D')
         await omega.add(await median14.getAddress(), '0xb11C910451BE27FBeDD28eA0ECF723a3263cCD48', '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e')
         await omega.add(await median15.getAddress(), '0xc234DD4b93DaDBe927F1b40ff0f18E06F477B745', '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd')
         await omega.add(await median16.getAddress(), '0xA9889269c6D42D91303539B6588637d42677e716', '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')
         await omega.add(await median17.getAddress(), '0x99E4F4b99Ebb3407C9Fa656D7650232eC9A4c65C', '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9')
         await omega.add(await median18.getAddress(), '0xDFa856333bBE3E9c3f2C0B6e0F034C6D1FD31DC9', '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0')
         await omega.add(await median19.getAddress(), '0xF585f6552aAd80e287169fe6c6B150c811c853c7', '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0')
         await omega.add(await median20.getAddress(), '0xb806F72511D33F128E759Eb43531Dd3764a4Df8D', '0xae78736Cd615f374D3085123A210448E74Fc6393')
         await omega.add(await median21.getAddress(), '0x7C69B191990891392ea6909e5C8679E16ae9EFD5', '0x6810e776880C02933D47DB1b9fc05908e5386b96')
        // await omega.add(await median.getAddress(), '0x7994d526A127979BcB9Ec7C98509BB5C7ebD78FD', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
         await omega.poke()

        // await lpO.poke()
        // await time.increase(4605)
        // await lpO.poke()

         let v0 = await median.peek()
         let v1 = await median1.peek()
         let v2 = await median2.peek()
         let v3 = await median3.peek()
         let v4 = await median4.peek()
         let v5 = await median5.peek()
         let v6 = await median6.peek()
         let v7 = await median7.peek()
         let v8 = await median8.peek()
         let v9 = await median9.peek()
         let v10 = await median10.peek()
         let v11 = await median11.peek()
         let v12 = await median12.peek()
         let v13 = await median13.peek()
         let v14 = await median14.peek()
         let v15 = await median15.peek()
         let v16 = await median16.peek()
         let v17 = await median17.peek()
         let v18 = await median18.peek()
         let v19 = await median19.peek()
         let v20 = await median20.peek()
         let v21 = await median21.peek()

     
         console.log("WETH", Number(v0[0]) / 1e27)
         console.log("BAT", Number(v1[0]) / 1e27)
         console.log("USDC", Number(v2[0]) / 1e27)
         console.log("WBTC", Number(v3[0]) / 1e27)
         console.log("TUSD", Number(v4[0]) / 1e27)
         console.log("ZRX", Number(v5[0]) / 1e27)
         console.log("KNC", Number(v6[0]) / 1e27)
         console.log("MANA", Number(v7[0]) / 1e27)
         console.log("USDT", Number(v8[0]) / 1e27)
         console.log("PAX", Number(v9[0]) / 1e27)
         console.log("COMP", Number(v10[0]) / 1e27)
         console.log("LRC", Number(v11[0]) / 1e27)
         console.log("LINK", Number(v12[0]) / 1e27)
         console.log("BAL", Number(v13[0]) / 1e27)
         console.log("YFI", Number(v14[0]) / 1e27)
         console.log("GUSD", Number(v15[0]) / 1e27)
         console.log("UNI", Number(v16[0]) / 1e27)
         console.log("AAVE", Number(v17[0]) / 1e27)
         console.log("MATIC", Number(v18[0]) / 1e27)
         console.log("wstETH", Number(v19[0]) / 1e27)
         console.log("rETH", Number(v20[0]) / 1e27)
         console.log("GNO", Number(v21[0]) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)

        // console.log(await lpO.peek())
       //  console.log(kicks)
       //  expect(kicks).to.eq('0x00');
      });

      it('poke test2', async () => {
        //  const debtContract = await getContract('MCD_FLOP');
        const [owner] = await hre.ethers.getSigners();
    
         //await gaugeController.setGenesis(timer);
 
         
        //  let vat = await hre.ethers.getContractFactory('OmegaPoker')
        //  let omega = await vat.deploy()

        //  let med = await hre.ethers.getContractFactory('Median')
        //  let median = await med.deploy(await omega.getAddress())
        //  let median1 = await med.deploy(await omega.getAddress())
        //  let median2 = await med.deploy(await omega.getAddress())
        //  let median3 = await med.deploy(await omega.getAddress())
        //  let median4 = await med.deploy(await omega.getAddress())
        //  let median5 = await med.deploy(await omega.getAddress())
        //  let median6 = await med.deploy(await omega.getAddress())
        //  let median7 = await med.deploy(await omega.getAddress())
        //  let median8 = await med.deploy(await omega.getAddress())
        //  let median9 = await med.deploy(await omega.getAddress())
        //  let median10 = await med.deploy(await omega.getAddress())
        //  let median11 = await med.deploy(await omega.getAddress())
        //  let median12 = await med.deploy(await omega.getAddress())
        //  let median13 = await med.deploy(await omega.getAddress())
        //  let median14 = await med.deploy(await omega.getAddress())
        //  let median15 = await med.deploy(await omega.getAddress())
        //  let median16 = await med.deploy(await omega.getAddress())
        //  let median17 = await med.deploy(await omega.getAddress())
        //  let median18 = await med.deploy(await omega.getAddress())
        //  let median19 = await med.deploy(await omega.getAddress())
        //  let median20 = await med.deploy(await omega.getAddress())
        //  let median21 = await med.deploy(await omega.getAddress())
        // let median22 = await med.deploy(await omega.getAddress())
  
         let DaiPoker = await hre.ethers.getContractFactory('DaiPoker')
         let di = await DaiPoker.deploy()
        //  let lpOracle = await hre.ethers.getContractFactory('CurveLPOracle')
        //  let lpO = await lpOracle.deploy(owner, '0xDC24316b9AE028F1497c275EB9192a3Ea0f67022', '0x435256563145544853544554482d410000000000000000000000000000000000', [await median1.getAddress(), await median2.getAddress()], true)

        //  await median1.kiss(await lpO.getAddress())
        //  await median2.kiss(await lpO.getAddress())

        console.log(await di.poke())
        
         

        //  await omega.add(await median.getAddress(), '0x7994d526A127979BcB9Ec7C98509BB5C7ebD78FD', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
        //  await omega.add(await median1.getAddress(), '0xfF11034318cfc2c128Ab768a381121F78635fe6b', '0x0D8775F648430679A709E98d2b0Cb6250d2887EF')
        //  await omega.add(await median2.getAddress(), '0x6444456960C3f95b5b408f4d9E00220643f06F94', '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')
        //  await omega.add(await median3.getAddress(), '0x46E27Ea3A035FfC9e6d6D56702CE3D208FF1e58c', '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599')
        //  await omega.add(await median4.getAddress(), '0x0C330f304bA67CD4a41538BdebB7F20d057D965c', '0x0000000000085d4780B73119b644AE5ecd22b376')
        //  await omega.add(await median5.getAddress(), '0x1DB0E113C3468c6EE49f4AA731d06c6887469163', '0xE41d2489571d322189246DaFA5ebDe1F4699F498')
        //  await omega.add(await median6.getAddress(), '0x6B9a8C58cAd240bb0D3f4be056A3247E606Cdd61', '0xdd974D5C2e2928deA5F71b9825b8b646686BD200')
        //  await omega.add(await median7.getAddress(), '0x4c3F603c3D7105f22C3B18dF4383ED8e13A7A516', '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942')
        //  await omega.add(await median8.getAddress(), '0xFadc475639131C1EAC3655c37EDA430851d53716', '0xdAC17F958D2ee523a2206206994597C13D831ec7')
        //  await omega.add(await median9.getAddress(), '0x1a2b07Ddc5F1B88713dfa4f1fA58717aF317e13A', '0x8E870D67F660D95d5be530380D0eC0bd388289E1')
        //  await omega.add(await median10.getAddress(), '0x57251492b7F9b8ecd8A7209C9EEf555501C268BB', '0xc00e94Cb662C3520282E6f5717214004A7f26888')
        //  await omega.add(await median11.getAddress(), '0x62899bD22d5F279b447436971eE0F24c7459076E', '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD')
        //  await omega.add(await median12.getAddress(), '0x59F3374736b4705479F9CE070F846F6773682055', '0x514910771AF9Ca656af840dff83E8264EcF986CA')
        //  await omega.add(await median13.getAddress(), '0xbBc3E76168708069A2889a1C179B14D56522102A', '0xba100000625a3754423978a60c9317c58a424e3D')
        //  await omega.add(await median14.getAddress(), '0xb11C910451BE27FBeDD28eA0ECF723a3263cCD48', '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e')
        //  await omega.add(await median15.getAddress(), '0xc234DD4b93DaDBe927F1b40ff0f18E06F477B745', '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd')
        //  await omega.add(await median16.getAddress(), '0xA9889269c6D42D91303539B6588637d42677e716', '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')
        //  await omega.add(await median17.getAddress(), '0x99E4F4b99Ebb3407C9Fa656D7650232eC9A4c65C', '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9')
        //  await omega.add(await median18.getAddress(), '0xDFa856333bBE3E9c3f2C0B6e0F034C6D1FD31DC9', '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0')
        //  await omega.add(await median19.getAddress(), '0xF585f6552aAd80e287169fe6c6B150c811c853c7', '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0')
        //  await omega.add(await median20.getAddress(), '0xb806F72511D33F128E759Eb43531Dd3764a4Df8D', '0xae78736Cd615f374D3085123A210448E74Fc6393')
        //  await omega.add(await median21.getAddress(), '0x7C69B191990891392ea6909e5C8679E16ae9EFD5', '0x6810e776880C02933D47DB1b9fc05908e5386b96')
        // // await omega.add(await median.getAddress(), '0x7994d526A127979BcB9Ec7C98509BB5C7ebD78FD', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
        //  await omega.poke()

        // await lpO.poke()
        // await time.increase(4605)
        // await lpO.poke()

        //  let v0 = await median.peek()
        //  let v1 = await median1.peek()
        //  let v2 = await median2.peek()
        //  let v3 = await median3.peek()
        //  let v4 = await median4.peek()
        //  let v5 = await median5.peek()
        //  let v6 = await median6.peek()
        //  let v7 = await median7.peek()
        //  let v8 = await median8.peek()
        //  let v9 = await median9.peek()
        //  let v10 = await median10.peek()
        //  let v11 = await median11.peek()
        //  let v12 = await median12.peek()
        //  let v13 = await median13.peek()
        //  let v14 = await median14.peek()
        //  let v15 = await median15.peek()
        //  let v16 = await median16.peek()
        //  let v17 = await median17.peek()
        //  let v18 = await median18.peek()
        //  let v19 = await median19.peek()
        //  let v20 = await median20.peek()
        //  let v21 = await median21.peek()

        //  console.log(v0)

        //  console.log("WETH", Number(v0[0]) / 1e27)
        //  console.log("BAT", Number(v1[0]) / 1e27)
        //  console.log("USDC", Number(v2[0]) / 1e27)
        //  console.log("WBTC", Number(v3[0]) / 1e27)
        //  console.log("TUSD", Number(v4[0]) / 1e27)
        //  console.log("ZRX", Number(v5[0]) / 1e27)
        //  console.log("KNC", Number(v6[0]) / 1e27)
        //  console.log("MANA", Number(v7[0]) / 1e27)
        //  console.log("USDT", Number(v8[0]) / 1e27)
        //  console.log("PAX", Number(v9[0]) / 1e27)
        //  console.log("COMP", Number(v10[0]) / 1e27)
        //  console.log("LRC", Number(v11[0]) / 1e27)
        //  console.log("LINK", Number(v12[0]) / 1e27)
        //  console.log("BAL", Number(v13[0]) / 1e27)
        //  console.log("YFI", Number(v14[0]) / 1e27)
        //  console.log("GUSD", Number(v15[0]) / 1e27)
        //  console.log("UNI", Number(v16[0]) / 1e27)
        //  console.log("AAVE", Number(v17[0]) / 1e27)
        //  console.log("MATIC", Number(v18[0]) / 1e27)
        //  console.log("wstETH", Number(v19[0]) / 1e27)
        //  console.log("rETH", Number(v20[0]) / 1e27)
        //  console.log("GNO", Number(v21[0]) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)
        //  console.log("WETH", Number(v0) / 1e27)

        // console.log(await lpO.peek())
       //  console.log(kicks)
       //  expect(kicks).to.eq('0x00');
      });
});


