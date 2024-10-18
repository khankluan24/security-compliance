import { expect } from "chai";
import hre, { ethers } from "hardhat";
// import type { HardhatEthersSigner } from "@nomicfoundation/hardhat-toolbox/src/";

describe("Access Control", () => {
    let deployer: string, attacker:string, user:string; //wallets
  
    beforeEach(async function () {
      [deployer, attacker, user] = await ethers.getSigners();
      const MyPets= await hre.ethers.getContractFactory("MyPets");
      this.myPets = await MyPets.deploy("Lu");
    });
    describe("My Pets", () => {
      it("Should set dog name at deployment", async function () {
        expect(await this.myPets.myDog()).to.eq("Lu");
      });
  
      it("Anyone can change my dog name", async function () {
        await this.myPets.connect(attacker).updateDog("kiki");
        expect(await this.myPets.myDog()).to.eq("kiki");
      });
    });
  })