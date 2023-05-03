import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import 'hardhat-deploy';

dotenv.config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

let rpc_url = "https://polygon-mumbai.infura.io/v3/a750c8b4eb974497949fb46330e53169"
let key = "09104bbc00c6f75fc5d9f849b15680a85712a40b75c47189abb9a5e0e610bd35"


const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.4",
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    mumbai: {
      url:rpc_url,
      accounts:[key]
    }
  },
};

export default config;
