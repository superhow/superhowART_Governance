import { HardhatUserConfig } from "hardhat/config";
import '@nomiclabs/hardhat-ethers';
import "@nomicfoundation/hardhat-viem";
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
      url: process.env.POLYGON_RPC, // Polygon Mainnet
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 137
    },
    mumbai: {
      url: process.env.MUMBAI_RPC, // Polygon Testnet (Mumbai)
      accounts: [`0x${process.env.PRIVATE_KEY}`],
      chainId: 80001
    }
  },

  // Auction SC is using legecy code (openzeppelin newest version is no supporting Auction contracts)
  // TODO: update Auction contracts
  paths: {
    sources: "./contracts/VilniusArt",
  },

};

export default config;