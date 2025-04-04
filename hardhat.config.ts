import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-gas-reporter";
import "solidity-coverage";
import 'dotenv/config'
const PRIVATE_KEY = process.env.PK || "";

const config: HardhatUserConfig = {

    solidity: {
        compilers: [
            {
                version: "0.8.11",
               
            }, 
            {
                version: "0.8.13",
               
            },{
                version: '0.6.12',
              
            },
            {
                version: "0.6.6",
            },
            {
                version: "0.6.0",
            },
            {
                version: "0.5.0",
            },
          
            {
                version: "0.8.23",
             
            },


            {
                version: "0.4.23",
              

            },
            {
                version: "0.8.16",
               

            },
            {
                version: "0.8.24",
              

            },
            {
                version: "0.5.17",
              

            },
        ],
    },

    networks: {
        
        // pulsechain network,  we will be just reading from here
        pulsechain: {
            url: 'https://rpc.pulsechain.com',
            // just and well known address for just reading.  not valuable
            accounts: [PRIVATE_KEY]
        },
        local: {
            url: 'http://127.0.0.1:8545/',
            // just and well known address for just reading.  not valuable
            accounts: [PRIVATE_KEY]
        },
        hardhat: {
            loggingEnabled: false,
            forking: {
            url: 'https://rpc.pulsechain.com',
            
            },
            allowUnlimitedContractSize: true,
            // just and well known address for just reading.  not valuable
            accounts: [{ privateKey: PRIVATE_KEY, balance: '1000000000000000000000000000000000000' }],
                
            
            mining: {
                mempool: {
                    order: "fifo"
                }
            },
            initialBaseFeePerGas: 1000000000, // 1 gwei base fee
           
        },
        

    },
    mocha: {
        timeout: 80000, // Optional: Increase test timeout for slow forks
      },
    gasReporter: {
        enabled: true, // Enable gas reporting
        currency: "USD", // Display gas costs in USD
        coinmarketcap: "67b4952d-f2c7-43ca-8e1c-5e4b9a62f966", // (Optional) To fetch real-time gas prices
        gasPrice: 20, // (Optional) Use a custom gas price (in gwei)
        outputFile: "gas-report.txt", // (Optional) Output gas report to a file
        noColors: false, // Disable colors in the console output
      },

      etherscan: { // needed for contract verification
        apiKey: {
            pulsechain: "0"
            
              },
              customChains: [
                {
                  network: "pulsechain",
                  chainId: 369,
                  urls: {
      apiURL: "https://api.scan.pulsechain.com/api/",
      browserURL: "https://scan.pulsechain.com",
                  }
                }
              ]
        }
      


}


export default config;

