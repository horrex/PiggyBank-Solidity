import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("PiggyBankFactory", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const PiggyBankFactory = await ethers.getContractFactory("PiggyBankFactory");
    const piggyBankFactory = await PiggyBankFactory.deploy();

    return { piggyBankFactory, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should get Piggy Banks by owner address", async function () {
      const { piggyBankFactory, owner } = await loadFixture(deployOneYearLockFixture);

      expect(await piggyBankFactory.getPiggyBanksByAddress(owner.address)).to.have.lengthOf(0);
    });
  });
});
