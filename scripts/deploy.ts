import { ethers } from "hardhat";
import {deploy} from "../test/utils"

const tokens = ["0x4F96Fe3b7A6Cf9725f59d353F723c1bDb64CA6Aa", "0xd0A1E359811322d97991E03f863a0C30C2cF029C"]

async function main() {
  const llamaPayFactory = await deploy("LlamaPayFactory")
  console.log("LlamaPayFactory deployed to:", llamaPayFactory.address); // 0x058B0a5Fd0b742c3672d2163481146ADBDa21544
  for(const token of tokens){
    await llamaPayFactory.createLlamaPayContract(token);
    console.log(`llamapay deployed to ${await llamaPayFactory.getLlamaPayContractByToken(token)}`)
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
