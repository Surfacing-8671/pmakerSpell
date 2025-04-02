//  create and return access control contract intance
import {HardhatEthersSigner} from "@nomicfoundation/hardhat-ethers/signers";
import hre, {ethers} from "hardhat";
// import {ethers} from "ethers"


import {
    ChainLog
} from "../typechain-types";
import { getAddress } from "../hardhat/getChainLog";
const changelog = '0xdA0Ab1e0017DEbCd72Be8599041a2aa3bA7e740F'





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

    createDssPause,
    createDssSpell
    
};

