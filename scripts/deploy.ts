import { ethers } from "hardhat";

async function main() {
  const PiggyBankFactory = await ethers.getContractFactory("PiggyBankFactory");
  const piggyBankFactory = await PiggyBankFactory.deploy();

  await piggyBankFactory.deployed();

  console.log(`PiggyBankFactory deployed to ${piggyBankFactory.address}.`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
