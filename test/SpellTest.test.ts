import { expect } from 'chai';
import fs from "fs"
import hre, { ethers, network } from 'hardhat'

import { createDssPause, createDssSpell, createJoin, getContract } from './contractUtils';
import { loadFixture, mine, time } from "@nomicfoundation/hardhat-toolbox/network-helpers";


describe('Spell Cast', () => {

    beforeEach(async () => {
        // Reset at the block where with the previous MCD_FLOP contract version
        //await reset(14052140);
        //await causeDebt();
    });

    it('Cast Spell', async function () {
        this.timeout(0);

      
        const [owner] = await hre.ethers.getSigners();
        const tx = await owner.sendTransaction({
            to: '0x208266c96F9A4e61856EFe2417eaB3b9EF59B22f',
            value: 100000000000000000000000n,
        });
       
        let med = await hre.ethers.getContractFactory('MedianGnoUsd')
        let maker = await hre.ethers.getContractFactory('MakerAuctionOracle')
        let mo = maker.connect(owner).attach('0xFB6A63B465D04151DE94C5E3F52ACC0C37EF5003')



        const pauser = await createDssPause()
        const speller = await createDssSpell()



        // Get the code at the address
        const code = await hre.ethers.provider.getCode(await speller.getAddress());


        // The hash of the code is the equivalent of `extcodehash`
        const codeHash = ethers.solidityPackedKeccak256(["bytes"], [code]);

        console.log(codeHash)
        let timer = await time.latest()
      
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
        let omegaAddress = '0xCe5d1c4613f113fB8abFb9415e1F0D947B120Bf2'
        let vaogt = await hre.ethers.getContractFactory('OmegaPokerFeed')
        let omega = vaogt.attach(omegaAddress)
       
      
      

        expect(await pauser.plot(await speller.getAddress(), codeHash, '0x61461954', 1743680705)).to.not.be.reverted
        await time.increaseTo(1743680705 + 500);
        expect(await pauser.exec(await speller.getAddress(), codeHash, '0x61461954', 1743680705)).to.not.be.reverted

        let dai = await hre.ethers.getContractFactory('DaiPoker')
        let daipoker = dai.attach('0xCe5d1c4613f113fB8abFb9415e1F0D947B120Bf2')
        expect(await mo.poke()).to.not.be.reverted;
        expect(await daipoker.poke()).to.not.be.reverted;

       
        expect(await omega.poke()).to.not.be.reverted;
       

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



        for (let i = 0; i < addresses.length; i++) {
            let ooosm = osm.attach(addresses[i])

            expect(await ooosm.poke()).to.not.be.reverted;

        }

        let spotter = sp.attach('0x65C79fcB50Ca1594B025960e539eD7A9a6D434A3')

        for (let i = 0; i < ilks.length; i++) {

            expect(await spotter.poke(ilks[i])).to.not.be.reverted;

        }

        await time.increaseTo(1743680705 + 3600 + 500);
        await omega.poke()
        for (let i = 0; i < addresses.length; i++) {
            let ooosm = osm.attach(addresses[i])

            expect(await ooosm.poke()).to.not.be.reverted;

        }



        for (let i = 0; i < ilks.length; i++) {

            expect(await spotter.poke(ilks[i])).to.not.be.reverted;

        }

    
        let ilk = await hre.ethers.getContractFactory('IlkRegistry')
        let ilker = ilk.attach('0x5a464C28D19848f44199D003BeF5ecc87d090F87')

        let vat = await hre.ethers.getContractFactory('Vat')
    
        let vaters = vat.attach('0x35D1b3F3D7966A1DFe207aa4514C12a259A0492B')
       
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

        let dude: Moo2[] = []

        for (let i = 0; i < list.length; i++) {
            let g2 = await vaters.ilks(list[i])
            let g1 = await ilker.info(list[i]);

            const decodedIlk = ethers.decodeBytes32String(list[i])
            const nLine = g2[0] * g2[1]
            const moo = g2[3] - nLine;
            const co = Number(moo) / 1e45

            let moo2: Moo2 = {
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


});


