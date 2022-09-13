import { ethers } from "hardhat";

async function main() {
  const PiggyBankMaster = await ethers.getContractFactory("PiggyBankMaster");
  const piggyBankMaster = await PiggyBankMaster.deploy();
  await piggyBankMaster.deployed();
  console.log(`PiggyBankMaster deployed to ${piggyBankMaster.address}.`);

  const AmountPiggyBankFactory = await ethers.getContractFactory("AmountPiggyBankFactory");
  const amountPiggyBankFactory = await AmountPiggyBankFactory.deploy(piggyBankMaster.address);
  await amountPiggyBankFactory.deployed();
  console.log(`AmountPiggyBankFactory deployed to ${amountPiggyBankFactory.address}.`);

  const ApprovePiggyBankFactory = await ethers.getContractFactory("ApprovePiggyBankFactory");
  const approvePiggyBankFactory = await ApprovePiggyBankFactory.deploy(piggyBankMaster.address);
  await approvePiggyBankFactory.deployed();
  console.log(`ApprovePiggyBankFactory deployed to ${approvePiggyBankFactory.address}.`);

  const TimePiggyBankFactory = await ethers.getContractFactory("TimePiggyBankFactory");
  const timePiggyBankFactory = await TimePiggyBankFactory.deploy(piggyBankMaster.address);
  await timePiggyBankFactory.deployed();
  console.log(`TimePiggyBankFactory deployed to ${timePiggyBankFactory.address}.`);

  await registerPiggyBankFactory("Amount", amountPiggyBankFactory.address);
  await registerPiggyBankFactory("Approve", approvePiggyBankFactory.address);
  await registerPiggyBankFactory("Time", timePiggyBankFactory.address);

  async function registerPiggyBankFactory(piggyBankType: string, factoryAddress: string) {    
    const tx = await piggyBankMaster.registerPiggyBankFactory(piggyBankType, factoryAddress);
    await tx.wait();
    console.log(`Factory of Piggy Banks of "${piggyBankType}" type is registered.`);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
