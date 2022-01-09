const { ethers, upgrades } = require("hardhat");
const box = require("../artifacts/contracts/BoxV1.sol/BoxV1.json");
const boxV2 = require("../artifacts/contracts/BoxV2.sol/BoxV2.json");
const addressBook = require("../.openzeppelin/unknown-1337.json");

async function main() {
    const [signer] = await ethers.getSigners()
    
    const BoxV2 = await ethers.getContractFactory("BoxV2");
    const upgraded = await upgrades.upgradeProxy(addressBook["proxies"][1]["address"], BoxV2);
    
    const proxy1 = new ethers.Contract(addressBook["proxies"][0]["address"], boxV2.abi, signer)
    const proxy2 = new ethers.Contract(addressBook["proxies"][1]["address"], boxV2.abi, signer)
    const proxy3 = new ethers.Contract(addressBook["proxies"][2]["address"], box.abi, signer)

    let a,b;
    [a, b] = await proxy1.getBoth()
    console.log(a.toString(), b);
    console.log((await proxy2.getBoth()).toString());
    // console.log(proxy3.methods);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });