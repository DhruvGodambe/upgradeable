const { ethers } = require("hardhat");
const box = require("../artifacts/contracts/BoxV1.sol/BoxV1.json");
const addressBook = require("../.openzeppelin/unknown-1337.json");

async function main() {
    const [signer] = await ethers.getSigners()

    const proxy1 = new ethers.Contract(addressBook["proxies"][0]["address"], box.abi, signer)
    const proxy2 = new ethers.Contract(addressBook["proxies"][1]["address"], box.abi, signer)
    const proxy3 = new ethers.Contract(addressBook["proxies"][2]["address"], box.abi, signer)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });