//  create and return access control contract intance
import {HardhatEthersSigner} from "@nomicfoundation/hardhat-ethers/signers";
import hre, {ethers} from "hardhat";
// import {ethers} from "ethers"
import MCD_DAI from './abis/MCD_DAI.json';
import MCD_VAT from './abis/MCD_VAT.json';
import CHAINLOG from './abis/CHAINLOG.json'
import MCD_JOIN_DAI from './abis/MCD_JOIN_DAI.json';
import MCD_JOIN from './abis/MCD_JOIN.json';
import MCD_CLIP_CALC from './abis/MCD_CLIP_CALC.json';
import MCD_CLIP from './abis/MCD_CLIP.json';
import MCD_DOG from './abis/MCD_DOG.json';
import MCD_FLAP from './abis/MCD_FLAP.json';
import MCD_FLOP from './abis/MCD_FLOP.json';
import MCD_GOV from './abis/MCD_GOV.json';
import WSTETH from './abis/WSTETH.json';
import WETH from './abis/WETH.json';
import UNISWAP from './abis/UNISWAP_V2_ROUTER_02.json';
import MCD_VOW from './abis/MCD_VOW.json';
import CDP_MANAGER from './abis/CDP_MANAGER.json';
import CDP_REGISTRY from './abis/CDP_REGISTRY.json';
import MCD_CROPPER from './abis/MCD_CROPPER.json';
import OSM_MOM from './abis/OSM_MOM.json';
import OSM from './abis/OSM.json';
import MEDIAN_PRICE_FEED from './abis/MEDIAN_PRICE_FEED.json';
import MCD_SPOT from './abis/MCD_SPOT.json';
import MCD_JUG from './abis/MCD_JUG.json';
import ERC20 from './abis/ERC20.json';
import MCD_ADM from './abis/MCD_ADM.json';
import PROXY_FACTORY from './abis/PROXY_FACTORY.json';
import PROXY_ACTIONS from './abis/PROXY_ACTIONS.json';
import MCD_PAUSE from './abis/MCD_PAUSE.json';
import LOCKSTAKE_ENGINE from './abis/LOCKSTAKE_ENGINE.json';
import LOCKSTAKE_CLIP from './abis/LOCKSTAKE_CLIP.json';
import gemJoin from '/home/surfacing8671/Desktop/dss/artifacts/contracts/join.sol/GemJoin.json'
import {
    ChainLog
} from "../typechain-types";
import { getAddress } from "../hardhat/getChainLog";
const changelog = '0xdA0Ab1e0017DEbCd72Be8599041a2aa3bA7e740F'

// let provider = new ethers.providers.JsonRpcProvider(`https://rpc.pulsechain.com`);
// async function getChangeLogContract(name: string) {
//     const changelog = '0xdA0Ab1e0017DEbCd72Be8599041a2aa3bA7e740F'
   
//    let provider = new ethers.providers.JsonRpcProvider(`https://rpc.pulsechain.com`);

//    const contract = new ethers.Contract(changelog, CHAINLOG, provider)

//         const encodedContractName = ethers.utils.formatBytes32String(name);
//         let g = await contract.getAddress(encodedContractName)
//         console.log(encodedContractName)
//         return g


// }


let names = [
    "MCD_DAI",
    "MCD_VOW",
    "MCD_VAT",
    "MCD_DOG",
    "MCD_FLAP",
    "MCD_FLOP",
    "WSTETH",
    "MCD_JOIN_DAI",
    "MCD_GOV",

   
    "CDP_MANAGER",
    "OSM_MOM",
    "OSM",
    "MEDIAN_PRICE_FEED",
    "MCD_SPOT",
    "MCD_JUG",
    "CDP_REGISTRY",
    "MCD_CROPPER",
    "MCD_ADM",
    "PROXY_FACTORY",
    "MCD_PAUSE",
    "LOCKSTAKE_ENGINE",
    "LOCKSTAKE_CLIP",
]


export const getContractInterfaceByName = async function (contractName: string): Promise<any> {
    const ABIs: Record<string, any> = {
        MCD_DAI,
        MCD_VOW,
        MCD_VAT,
        MCD_DOG,
        MCD_FLAP,
        MCD_FLOP,
        WSTETH,
        MCD_JOIN_DAI,
        MCD_GOV,
        ETH: WETH,
        UNISWAP,
        CDP_MANAGER,
        OSM_MOM,
        OSM,
        MEDIAN_PRICE_FEED,
        MCD_SPOT,
        MCD_JUG,
        CDP_REGISTRY,
        MCD_CROPPER,
        MCD_ADM,
        PROXY_FACTORY,
        MCD_PAUSE,
        LOCKSTAKE_ENGINE,
        LOCKSTAKE_CLIP,
    };
    if (Object.keys(ABIs).includes(contractName)) {
        return ABIs[contractName];
    }
    if (contractName.startsWith('MCD_JOIN_')) {
        return MCD_JOIN;
    }
    if (contractName.startsWith('MCD_CLIP_CALC_') || contractName.endsWith('_CLIP_CALC')) {
        return MCD_CLIP_CALC;
    }
    if (contractName.startsWith('MCD_CLIP_')) {
        return MCD_CLIP;
    }
    if (contractName.startsWith('PROXY_ACTIONS_')) {
        return PROXY_ACTIONS;
    }
    throw new Error(`No contract interface found for "${contractName}"`);
};


const getContract = async function (contractName: string): Promise<any> {
    // const contractAddress = await getContractAddressByName(contractName);
    const contractInterface = await getContractInterfaceByName(contractName);
   // const [owner, treasury] = await hre.ethers.getSigners();
   // const signerOrProvider = owner
 //   const contract =  new ethers.Contract(contractAddress, contractInterface, provider);
  //  return contract;
};


// export const getContractAddressByName = async function (contractName: string): Promise<string> {

//    // const chainLogContract = await getChangeLogContract(ethers.encodeBytes32String(contractName));
//     try {
//     //    let address = await getChangeLogContract(contractName)
//      //   console.log(address)
//       //  return address;
//     } catch (error) {
//         throw new Error(`No contract address found for "${contractName}"`);
//     }
// };

async function createGaugeController( oOneSwap: ChainLog, name: string) {

    let authLibFactory = await oOneSwap.getAddress(name);
    console.log(authLibFactory)
    return authLibFactory;
    // Deploy AccessorMod dependency
   

  
}

async function createJoin(address: string) {
 
      let signer = await ethers.getImpersonatedSigner('0x208266c96F9A4e61856EFe2417eaB3b9EF59B22f')
    let authLibFactory =  await hre.ethers.getContractFactory([], gemJoin.bytecode, signer);
    let authLib =  authLibFactory.attach(address);

   

    return authLib;
}

async function createDssPause() {
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: ["0x208266c96F9A4e61856EFe2417eaB3b9EF59B22f"],
      });
      let s = await hre.ethers.getSigner('0x208266c96F9A4e61856EFe2417eaB3b9EF59B22f')
 //   let signer = await ethers.getImpersonatedSigner('0x208266c96F9A4e61856EFe2417eaB3b9EF59B22f')
  let authLibFactory =  await hre.ethers.getContractFactory('DSPause', s);
  let authLib =  authLibFactory.connect(s).attach('0xbE286431454714F511008713973d3B053A2d38f3');

 

  return authLib;
}

async function createDssSpell() {
    
    await hre.network.provider.request({
        method: "hardhat_impersonateAccount",
        params: ["0x208266c96F9A4e61856EFe2417eaB3b9EF59B22f"],
      });
      let s = await hre.ethers.getSigner('0x208266c96F9A4e61856EFe2417eaB3b9EF59B22f')

    let DssExecLib =  await hre.ethers.getContractFactory('DssExecLib', s);
    let exect = await DssExecLib.deploy()
    const oldVibeStorageFactory = await ethers.getContractFactory("DssSpellAction", {
        libraries: {
            DssExecLib: await exect.getAddress(),
        }
    });

    // let vat = await hre.ethers.getContractFactory('OmegaPoker')
    // let omega = await vat.deploy()

    // let med = await hre.ethers.getContractFactory('Median')
    // let median1 = await med.deploy(await omega.getAddress())
    // let median2 = await med.deploy(await omega.getAddress())
    // let median3 = await med.deploy(await omega.getAddress())
    // let median4 = await med.deploy(await omega.getAddress())
    // let median5 = await med.deploy(await omega.getAddress())
    // let median6 = await med.deploy(await omega.getAddress())

   // let medians = [await median1.getAddress(), await median2.getAddress(), await median3.getAddress(), await median4.getAddress(), await median5.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median1.getAddress(), await median2.getAddress(), await median3.getAddress(), await median4.getAddress(), await median5.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median1.getAddress(), await median2.getAddress(), await median3.getAddress(), await median4.getAddress(), await median5.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median1.getAddress(), await median2.getAddress(), await median3.getAddress(), await median4.getAddress(), await median5.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median1.getAddress(), await median2.getAddress(), await median3.getAddress(), await median4.getAddress(), await median5.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median1.getAddress(), await median2.getAddress(), await median3.getAddress(), await median4.getAddress(), await median5.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median1.getAddress(), await median2.getAddress(), await median3.getAddress(), await median4.getAddress(), await median5.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median1.getAddress(), await median2.getAddress(), await median3.getAddress(), await median4.getAddress(), await median5.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress(), await median6.getAddress()]


   //// let pips = ['0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763','0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763', '0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763']
//console.log(medians.length)

  let authLib =  oldVibeStorageFactory.deploy(
    
  );

 

  return authLib;
}

async function createDaiJoin(address: string) {

    let authLibFactory = await hre.ethers.getContractFactory('DaiJoin');
    let authLib =  authLibFactory.attach(address);

   

    return authLib;
}

export {
    createJoin,
    createDaiJoin,
    getContract,
    createDssPause,
    createDssSpell
    
};

