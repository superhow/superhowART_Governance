import { HardhatUserConfig } from "hardhat/config";
import '@nomiclabs/hardhat-ethers';
import * as dotenv from "dotenv";

dotenv.config();
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    polygon: {
      url: process.env.POLYGON_RPC, // Polygon Mainnet RPC URL
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
    mumbai: {
      url: process.env.MUMBAI_RPC, // Polygon Testnet (Mumbai) RPC URL
      accounts: [`${process.env.PRIVATE_KEY}`]
    }
  },

};

export default config;