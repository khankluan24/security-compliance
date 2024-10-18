import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.27",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200, //Skip warning when file size is too big
      },
    },
  },
  networks: {
    fuji: {
      url: `https://avalanche-fuji-c-chain-rpc.publicnode.com`,
      accounts: [process.env.PRIVATE_KEY!],
    },
    amoy: {
      url: `https://polygon-amoy.infura.io/v3/c52da171099048409ef82f77cdba9d49`,
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
  etherscan: {
    apiKey: {
      fuji: "snowtrace",
    },
    customChains: [
      {
        network: "amoy",
        chainId: 80002,
        urls: {
          apiURL: "https://api-amoy.polygonscan.com/api",
          browserURL: "https://amoy.polygonscan.com/",
        },
      },
      {
        network: "fuji",
        chainId: 43113,
        urls: {
          apiURL:
            "https://api.routescan.io/v2/network/testnet/evm/43113/etherscan",
          browserURL: "https://avalanche.testnet.localhost:8080",
        },
      },
    ],
  },
};

export default config;
