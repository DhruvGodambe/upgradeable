const { ethers, upgrades} = require("hardhat");

async function main() {
    const BoxV1 = await ethers.getContractFactory("BoxV1");
    const instance = await upgrades.deployProxy(BoxV1, [12, "hello world"], {
        initializer: "initialize"
    })

    const instance2 = await upgrades.deployProxy(BoxV1, [15, "hello world"], {
        initializer: "initialize"
    })

    await instance.deployed();
    console.log("instance 1: ", instance.address);
    console.log("instance 2: ", instance2.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });