import ethers from "ethers"
import CHAINLOG from '../test/abis/CHAINLOG.json'

export const getAddress = async (contractName: string
    
) => {
   const changelog = '0xdA0Ab1e0017DEbCd72Be8599041a2aa3bA7e740F'
   
   let provider = new ethers.providers.JsonRpcProvider(`https://rpc.pulsechain.com`);

   const contract = new ethers.Contract(changelog, CHAINLOG, provider)

        const encodedContractName = ethers.utils.formatBytes32String(contractName);
        let g = await contract.getAddress(encodedContractName)
        console.log(encodedContractName)
        return g



};