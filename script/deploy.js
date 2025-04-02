
const { ethers } = require("hardhat");

let abi = [
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
async function deployRouter(){


     let omegaAddress = '0xA61E568C277edDc4f8D5D8Eab99A04aC399ff37a'
      //  let vat = await hre.ethers.getContractFactory('OSM')
      //     let omega = await vat.attach('0x348Fc3eF33373828e09270e9b2DC672Eb5e5FDf8')
      //   //  await omega.waitForDeployment();
      //   //  console.log(await omega.getAddress())
         try{
          await hre.run("verify:verify", {
             address:  '0x72550B5e1c3904faEEa48F0149C168386E4c4D65',   
            
             constructorArguments: [],
           });
          }
          catch(error){
             console.log(error)
          }

      let abi = [
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_accessControl",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_storage",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_SHIOFactory",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_mafths",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_xusd",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_tRewards",
              "type": "address"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "constructor"
        },
        {
          "inputs": [],
          "name": "NotAllowedAccess",
          "type": "error"
        },
        {
          "inputs": [
            {
              "internalType": "enum AuthLib.Rank",
              "name": "roleId",
              "type": "uint8"
            },
            {
              "internalType": "address",
              "name": "addr",
              "type": "address"
            }
          ],
          "name": "UnauthorizedAccess",
          "type": "error"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "classAddress",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "classType",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "string",
              "name": "description",
              "type": "string"
            }
          ],
          "name": "ClassAdded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "classAddress",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "uint256",
              "name": "classType",
              "type": "uint256"
            }
          ],
          "name": "ClassRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "contractWhite",
              "type": "address"
            }
          ],
          "name": "ContractRemovedFromWhitelistFrom",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "contractWhite",
              "type": "address"
            }
          ],
          "name": "ContractRemovedFromWhitelistTo",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "contractWhite",
              "type": "address"
            }
          ],
          "name": "ContractWhitelistedFrom",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "contractWhite",
              "type": "address"
            }
          ],
          "name": "ContractWhitelistedTo",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "uint64",
              "name": "userAura",
              "type": "uint64"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "blockNumber",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "tradeCount",
              "type": "uint256"
            }
          ],
          "name": "NewBlockProcessed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "aura",
              "type": "uint64"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "rewards",
              "type": "uint256"
            }
          ],
          "name": "RewardsCalculated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "classHash",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "reason",
              "type": "bytes"
            }
          ],
          "name": "RewardsCalculationFailed",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "minTaxBps",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "maxTaxBps",
              "type": "uint256"
            }
          ],
          "name": "TaxParametersUpdated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "newRewardsContract",
              "type": "address"
            }
          ],
          "name": "TradingRewardsSet",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
            },
            {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "userAura",
              "type": "uint64"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "currentBlock",
              "type": "uint256"
            }
          ],
          "name": "TransactionRecorded",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "classAddress",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "classType",
              "type": "uint256"
            }
          ],
          "name": "VibeClassRemoved",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "user",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint64",
              "name": "aura",
              "type": "uint64"
            },
            {
              "indexed": false,
              "internalType": "int256",
              "name": "vibes",
              "type": "int256"
            }
          ],
          "name": "VibesCalculated",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "classHash",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "bytes",
              "name": "reason",
              "type": "bytes"
            }
          ],
          "name": "VibesCalculationFailed",
          "type": "event"
        },
        {
          "inputs": [],
          "name": "BASIS_POINTS",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_contract",
              "type": "address"
            }
          ],
          "name": "SetTradingRewards",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_to",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_from",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "_caller",
              "type": "address"
            },
            {
              "internalType": "address",
              "name": "sender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "name": "calculateAndSumBasis",
          "outputs": [
            {
              "internalType": "int256",
              "name": "",
              "type": "int256"
            },
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_good",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_bad",
              "type": "uint256"
            }
          ],
          "name": "changeGoodBad",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "_storage",
              "type": "address"
            }
          ],
          "name": "changeStorage",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "keeperClassCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
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
          "name": "kepperClass",
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
          "name": "lastProcessedBlockI",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "mafths",
          "outputs": [
            {
              "internalType": "contract IVMREQ2",
              "name": "",
              "type": "address"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "maxTaxBps",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "minTaxBps",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "processClassCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
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
          "name": "processVibeClass",
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
              "name": "contractWhite",
              "type": "address"
            }
          ],
          "name": "removeWhitelistedContractFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "contractWhite",
              "type": "address"
            }
          ],
          "name": "removeWhitelistedContractTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "rewardClassCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
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
          "name": "rewardVibeClass",
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
              "name": "contractWhite",
              "type": "address"
            }
          ],
          "name": "setWhitelistedContractFrom",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "contractWhite",
              "type": "address"
            }
          ],
          "name": "setWhitelistedContractTo",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "singleClassCount",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
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
          "name": "singleVibeClass",
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
              "name": "_minTaxBps",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_maxTaxBps",
              "type": "uint256"
            }
          ],
          "name": "updateTaxParameters",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "user",
              "type": "address"
            }
          ],
          "name": "viewVibes",
          "outputs": [
            {
              "internalType": "int256",
              "name": "",
              "type": "int256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]

      const [owner] = await hre.ethers.getSigners();

      // let v = new ethers.Contract('0x2AeC8E5a0aFa5ADA684F0Ce571BF220d4c287786', abi, owner)

      // let t = await v.setWhitelistedContractFrom('0x749d997f9a3B2694d5921F78cF3f2d9559A6f220')
      // await t.wait()

      // let ts = await v.setWhitelistedContractTo('0x749d997f9a3B2694d5921F78cF3f2d9559A6f220')
      // await ts.wait()

       
        //  let med = await hre.ethers.getContractFactory('DaiPoker')
        //  let t = await med.deploy()
        //  await t.waitForDeployment()
        //  console.log('done')
        // let g = await med.attach('0x7B64f61f9C30c1A2979AE78ff00D3D1F6d8E51Fc')
//          let g1 = await med.attach('0x82e5e259Ed1569586FCCa571ce50A7D1D6786Bad')
//          let g2 = await med.attach('0xf11B5fd3839516DE7ac53755eaF277A74EcEf327')
//          let g3 = await med.attach('0x6E088B573694F1958C2FAdB2d4e926fD8FFF4f2C')
//          let g4 = await med.attach('0x2BD28b9C8B3B1ACDA7ad8e189Bc02e615A0a3C7c')
//          let g5 = await med.attach('0x623fE3720C94Ab42CE31CB255780E4d0e1D04a1b')
//          let g6 = await med.attach('0x4b9aD4401CBDe1ADa6adD90aC40f326fB88dDF4E')
//          let g7 = await med.attach('0x31df188997E1Fe0C7fb29b43C0D8148D83e1C584')
//          let g8 = await med.attach('0x5Cf7B83c17B70D2a06c592b91ad4F5C3cCa7c0Dd')
//          let g9 =await med.attach('0x6f34A64C5bcd197F200E974C2B8180c97bC308ef')
//          let g10 =await med.attach('0x1694676AA992D3C6aB859D6d9D2e7bc448f4332b')
//          let g11 = await med.attach('0x8f8cDd12d5F0Ec99B1314c37446ebC50481a16C5')
//          let g12 = await med.attach('0xB11eDc36668F5509EFE8A563CFA9E7a5A302003e')
//          let g13 =await med.attach('0x3882c9a2D251a972312e411BcB7E0D9c79788e8A')
//          let g14 =await med.attach('0x5bdF3B8fB8476f8250420B95e09c5c900a67EBe8')
//          let g15 =await med.attach('0xa4a1388473267f73F74141bcdF62426761e6C5C2')
//          let g16 =await med.attach('0x7B64f61f9C30c1A2979AE78ff00D3D1F6d8E51Fc')
//          let g17 =await med.attach('0x1662712Eb3C4bF961D58a0E118C567343Ac218fC')
//          let g18 =await med.attach('0x75aeb7a72200241E66d843926B5d584928e89011')
//          let g19 =await med.attach('0x5E08F4239847792dC6f65d0E178F7e544c119E77')
//          let g20 =await med.attach('0x9B2722BE6488ee2d2C6862eE316286522aFb9D5b')
//          let g21 =await med.attach('0xc6111BFCE7A59d3F86d8227DBEcb5255318dd2ad')

//         let q = [g, g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18, g19, g20, g21]

//          for(let i = 0; i < q.length; i++){

//           let h = await q[i].drop(['0x98469a1D0b2fBA13dB32386B670bEed2Ab46edEb'])
//           await h.wait()
//           console.log('dropped')
//          }

//          for(let i = 0; i < q.length; i++){

//           let h = await q[i].lift([await omega.getAddress()])
//           await h.wait()
//           console.log('lifted')
//          }

        
//         //  let median = await med.deploy(await omega.getAddress())
//         //  await median.waitForDeployment();
      // let tx =    await g.rely('0xbe8e3e3618f7474f8cb1d074a26affef007e98fb')
      // await tx.wait()
//         //  console.log(await median.getAddress())
//         //  try{
//         //  await hre.run("verify:verify", {
//         //     address:  await median.getAddress(),   
           
//         //     constructorArguments: [omegaAddress],
//         //   });
//         //  }
//         //  catch(error){
//         //     console.log(error)
//         //  }

    
//         //  let median1 = await med.deploy(await omega.getAddress())
//         //  await median1.waitForDeployment();
//         //  console.log(await median1.getAddress())
//         //  let median2 = await med.deploy(await omega.getAddress())
//         //  await median2.waitForDeployment();
//         //  console.log(await median2.getAddress())
//         //  let median3 = await med.deploy(await omega.getAddress())
//         //  await median3.waitForDeployment();
//         //  console.log(await median3.getAddress())
//         //  let median4 = await med.deploy(await omega.getAddress())
//         //  await median4.waitForDeployment();
//         //  console.log(await median4.getAddress())
//         //  let median5 = await med.deploy(await omega.getAddress())
//         //  await median5.waitForDeployment();
//         //  console.log(await median5.getAddress())
//         //  let median6 = await med.deploy(await omega.getAddress())
//         //  await median6.waitForDeployment();
//         //  console.log(await median6.getAddress())
//         //  let median7 = await med.deploy(await omega.getAddress())
//         //  await median7.waitForDeployment();
//         //  console.log(await median7.getAddress())
//         //  let median8 = await med.deploy(await omega.getAddress())
//         //  await median8.waitForDeployment();
//         //  console.log(await median8.getAddress())
//         //  let median9 = await med.deploy(await omega.getAddress())
//         //  await median9.waitForDeployment();
//         //  console.log(await median9.getAddress())
//         //  let median10 = await med.deploy(await omega.getAddress())
//         //  await median10.waitForDeployment();
//         //  console.log(await median10.getAddress())
//         //  let median11 = await med.deploy(await omega.getAddress())
//         //  await median11.waitForDeployment();
//         //  console.log(await median11.getAddress())
//         //  let median12 = await med.deploy(await omega.getAddress())
//         //  await median12.waitForDeployment();
//         //  console.log(await median12.getAddress())
//         //  let median13 = await med.deploy(await omega.getAddress())
//         //  await median13.waitForDeployment();
//         //  console.log(await median13.getAddress())
//         //  let median14 = await med.deploy(await omega.getAddress())
//         //  await median14.waitForDeployment();
//         //  console.log(await median14.getAddress())
//         //  let median15 = await med.deploy(await omega.getAddress())
//         //  await median15.waitForDeployment();
//         //  console.log(await median15.getAddress())
//         //  let median16 = await med.deploy(await omega.getAddress())
//         //  await median16.waitForDeployment();
//         //  console.log(await median16.getAddress())
//         //  let median17 = await med.deploy(await omega.getAddress())
//         //  await median17.waitForDeployment();
//         //  console.log(await median17.getAddress())
//         //  let median18 = await med.deploy(await omega.getAddress())
//         //  await median18.waitForDeployment();
//         //  console.log(await median18.getAddress())
//         //  let median19 = await med.deploy(await omega.getAddress())
//         //  await median19.waitForDeployment();
//         //  console.log(await median19.getAddress())
//         //  let median20 = await med.deploy(await omega.getAddress())
//         //  await median20.waitForDeployment();
//         //  console.log(await median20.getAddress())
//         //  let median21 = await med.deploy(await omega.getAddress())
//         //  await median21.waitForDeployment();
//         //  console.log(await median21.getAddress())
//         // let median22 = await med.deploy(await omega.getAddress())
  
//         //  let DaiPoker = await hre.ethers.getContractFactory('DaiPoker')
//         //  let di = await DaiPoker.deploy()
//         //  let lpOracle = await hre.ethers.getContractFactory('CurveLPOracle')
//         //  let lpO = await lpOracle.deploy(owner, '0xDC24316b9AE028F1497c275EB9192a3Ea0f67022', '0x435256563145544853544554482d410000000000000000000000000000000000', [await median1.getAddress(), await median2.getAddress()], true)

//         //  await median1.kiss(await lpO.getAddress())
//         //  await median2.kiss(await lpO.getAddress())

//       //   console.log(await di.poke())
        
         

//          let tx = await omega.add('0x613433AE2B8d3Ae6371CA6eC26bCe0A73c005bA2', '0x7994d526A127979BcB9Ec7C98509BB5C7ebD78FD', '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2')
//          await tx.wait()
//          console.log('add')
//         // console.log("pip 0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763 new median is", await median.getAddress())
//          let tx1 = await omega.add('0x82e5e259Ed1569586FCCa571ce50A7D1D6786Bad', '0xfF11034318cfc2c128Ab768a381121F78635fe6b', '0x0D8775F648430679A709E98d2b0Cb6250d2887EF')
//          await tx1.wait()
//          console.log('add')
//         // console.log("pip 0xB4eb54AF9Cc7882DF0121d26c5b97E802915ABe6 new median is", '0x82e5e259Ed1569586FCCa571ce50A7D1D6786Bad')
//          let tx2 = await omega.add('0xf11B5fd3839516DE7ac53755eaF277A74EcEf327', '0x6444456960C3f95b5b408f4d9E00220643f06F94', '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48')
//          await tx2.wait()
//          console.log('add')
//        //  console.log("pip 0x77b68899b99b686F415d074278a9a16b336085A0 new median is", await median.getAddress())
//          let tx3 = await omega.add('0x6E088B573694F1958C2FAdB2d4e926fD8FFF4f2C', '0x46E27Ea3A035FfC9e6d6D56702CE3D208FF1e58c', '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599')
//          await tx3.wait()
//          console.log('add')
//         // console.log("pip 0xf185d0682d50819263941e5f4EacC763CC5C6C42 new median is", await median.getAddress())
//          let tx4 = await omega.add('0x2BD28b9C8B3B1ACDA7ad8e189Bc02e615A0a3C7c', '0x0C330f304bA67CD4a41538BdebB7F20d057D965c', '0x0000000000085d4780B73119b644AE5ecd22b376')
//          await tx4.wait()
//          console.log('add')
//         // console.log("pip 0xeE13831ca96d191B688A670D47173694ba98f1e5 new median is", '0x2BD28b9C8B3B1ACDA7ad8e189Bc02e615A0a3C7c')
//          let tx5 =  await omega.add('0x623fE3720C94Ab42CE31CB255780E4d0e1D04a1b', '0x1DB0E113C3468c6EE49f4AA731d06c6887469163', '0xE41d2489571d322189246DaFA5ebDe1F4699F498')
//          await tx5.wait()
//          console.log('add')
//         // console.log("pip 0x7382c066801E7Acb2299aC8562847B9883f5CD3c new median is", '0x623fE3720C94Ab42CE31CB255780E4d0e1D04a1b')
//          let tx6 = await omega.add('0x4b9aD4401CBDe1ADa6adD90aC40f326fB88dDF4E', '0x6B9a8C58cAd240bb0D3f4be056A3247E606Cdd61', '0xdd974D5C2e2928deA5F71b9825b8b646686BD200')
//          await tx6.wait()
//          console.log('add')
//         // console.log("pip 0xf36B79BD4C0904A5F350F1e4f776B81208c13069 new median is", await median.getAddress())
//          let tx7 = await omega.add('0x31df188997E1Fe0C7fb29b43C0D8148D83e1C584', '0x4c3F603c3D7105f22C3B18dF4383ED8e13A7A516', '0x0F5D2fB29fb7d3CFeE444a200298f468908cC942')
//          await tx7.wait()
//          console.log('add')
// //console.log("pip 0x8067259EA630601f319FccE477977E55C6078C13 new median is", '0x31df188997E1Fe0C7fb29b43C0D8148D83e1C584')
//          let tx8 =  await omega.add('0x5Cf7B83c17B70D2a06c592b91ad4F5C3cCa7c0Dd', '0xFadc475639131C1EAC3655c37EDA430851d53716', '0xdAC17F958D2ee523a2206206994597C13D831ec7')
//          await tx8.wait()
//          console.log('add')
//         // console.log("pip 0x7a5918670B0C390aD25f7beE908c1ACc2d314A3C new median is", '0x5Cf7B83c17B70D2a06c592b91ad4F5C3cCa7c0Dd')
//          let tx9 = await omega.add('0x6f34A64C5bcd197F200E974C2B8180c97bC308ef', '0x1a2b07Ddc5F1B88713dfa4f1fA58717aF317e13A', '0x8E870D67F660D95d5be530380D0eC0bd388289E1')
//          await tx9.wait()
//          console.log('add')
//         // console.log("pip 0x043B963E1B2214eC90046167Ea29C2c8bDD7c0eC new median is", '0x6f34A64C5bcd197F200E974C2B8180c97bC308ef')
//          let tx10 = await omega.add('0x1694676AA992D3C6aB859D6d9D2e7bc448f4332b', '0x57251492b7F9b8ecd8A7209C9EEf555501C268BB', '0xc00e94Cb662C3520282E6f5717214004A7f26888')
//          await tx10.wait()
//          console.log('add')
//         // console.log("pip 0xBED0879953E633135a48a157718Aa791AC0108E4 new median is", await median.getAddress())
//          let tx11 =  await omega.add('0x8f8cDd12d5F0Ec99B1314c37446ebC50481a16C5', '0x62899bD22d5F279b447436971eE0F24c7459076E', '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD')
//          await tx11.wait()
//          console.log('add')
//       //   console.log("pip 0x9eb923339c24c40Bef2f4AF4961742AA7C23EF3a new median is", '0x8f8cDd12d5F0Ec99B1314c37446ebC50481a16C5')
//          let tx12 =  await omega.add('0xB11eDc36668F5509EFE8A563CFA9E7a5A302003e', '0x59F3374736b4705479F9CE070F846F6773682055', '0x514910771AF9Ca656af840dff83E8264EcF986CA')
//          await tx12.wait()
//          console.log('add')
//         // console.log("pip 0x9B0C694C6939b5EA9584e9b61C7815E8d97D9cC7 new median is", await median.getAddress())
//          let tx13 = await omega.add('0x3882c9a2D251a972312e411BcB7E0D9c79788e8A', '0xbBc3E76168708069A2889a1C179B14D56522102A', '0xba100000625a3754423978a60c9317c58a424e3D')
//          await tx13.wait()
//          console.log('add')
// //console.log("pip 0x3ff860c0F28D69F392543A16A397D0dAe85D16dE new median is", await median.getAddress())
//          let tx14 = await omega.add('0x5bdF3B8fB8476f8250420B95e09c5c900a67EBe8', '0xb11C910451BE27FBeDD28eA0ECF723a3263cCD48', '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e')
//          await tx14.wait()
//          console.log('add')
//        //  console.log("pip 0x5F122465bCf86F45922036970Be6DD7F58820214 new median is", await median.getAddress())
//          let tx15 = await omega.add('0xa4a1388473267f73F74141bcdF62426761e6C5C2', '0xc234DD4b93DaDBe927F1b40ff0f18E06F477B745', '0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd')
//          await tx15.wait()
//          console.log('add')
//         // console.log("pip 0xf45Ae69CcA1b9B043dAE2C83A5B65Bc605BEc5F5 new median is", await median.getAddress())
//          let tx16 =  await omega.add('0x7B64f61f9C30c1A2979AE78ff00D3D1F6d8E51Fc', '0xA9889269c6D42D91303539B6588637d42677e716', '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984')
//          await tx16.wait()
//          console.log('add')
//         // console.log("pip 0xf363c7e351C96b910b92b45d34190650df4aE8e7 new median is", '0x7B64f61f9C30c1A2979AE78ff00D3D1F6d8E51Fc')
//          let tx17 =  await omega.add('0x1662712Eb3C4bF961D58a0E118C567343Ac218fC', '0x99E4F4b99Ebb3407C9Fa656D7650232eC9A4c65C', '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9')
//          await tx17.wait()
//          console.log('add')
//       //   console.log("pip 0x8Df8f06DC2dE0434db40dcBb32a82A104218754c new median is", '0x1662712Eb3C4bF961D58a0E118C567343Ac218fC')
//          let tx18 =  await omega.add('0x75aeb7a72200241E66d843926B5d584928e89011', '0xDFa856333bBE3E9c3f2C0B6e0F034C6D1FD31DC9', '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0')
//          await tx18.wait()
//          console.log('add')
//       //   console.log("pip 0x8874964279302e6d4e523Fb1789981C39a1034Ba new median is", '0x75aeb7a72200241E66d843926B5d584928e89011')
//          let tx19 =  await omega.add('0x5E08F4239847792dC6f65d0E178F7e544c119E77', '0xF585f6552aAd80e287169fe6c6B150c811c853c7', '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0')
//          await tx19.wait()
//          console.log('add')
//        //  console.log("pip 0xFe7a2aC0B945f12089aEEB6eCebf4F384D9f043F new median is", await median.getAddress())
//          let tx20 =  await omega.add('0x9B2722BE6488ee2d2C6862eE316286522aFb9D5b', '0xb806F72511D33F128E759Eb43531Dd3764a4Df8D', '0xae78736Cd615f374D3085123A210448E74Fc6393')
//          await tx20.wait()
//          console.log('add')
//         // console.log("pip 0xeE7F0b350aA119b3d05DC733a4621a81972f7D47 new median is", '0x9B2722BE6488ee2d2C6862eE316286522aFb9D5b')
//          let tx21 =  await omega.add('0xc6111BFCE7A59d3F86d8227DBEcb5255318dd2ad', '0x7C69B191990891392ea6909e5C8679E16ae9EFD5', '0x6810e776880C02933D47DB1b9fc05908e5386b96')
//          await tx21.wait()
//          console.log('add')
         //console.log("pip 0xd800ca44fFABecd159c7889c3bf64a217361AEc8 new median is", await median.getAddress())



}
         async function main() {
            console.log("Starting main deployment script...");
            await deployRouter();
            //await deployFactory();
            console.log("Main deployment script completed.");
          }
          
          main()
            .then(() => {
              console.log(`Successfully wait all contracts!`);
              process.exit(0);
            })
            .catch((error) => {
              console.error("Deployment failed:", error);
              process.exitCode = 1;
            });
          