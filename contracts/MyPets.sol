// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MyPets is Ownable {
    string public myDog;

    constructor(string memory myDog_) Ownable(msg.sender) {
        myDog = myDog_;
    }

    function updateDog(string memory myDog_) external {
        myDog = myDog_;
    }
}
