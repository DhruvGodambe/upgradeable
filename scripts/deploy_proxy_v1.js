const {ethers} = require("hardhat");

async function main() {

    proxyInstance = await deployProxy();
    implAddr = await deployImplementation();
    await setImplementation(proxyInstance, implAddr);
    // impl = await proxyInstance.getImplementation();
    // proxyInstance.on("GetImplementation", (impl) => {
    //     console.log(impl);
    // })


    //ethers.js, by default, uses polling to get events, and the polling interval is 4 seconds
    await new Promise(res => setTimeout(() => res(null), 5000));

    async function IncVal() {
        
    }

    async function setImplementation(proxyInstance, implAddr) {
       await proxyInstance.upgradeImplementation(implAddr);
    }
    
    async function deployImplementation() {
        const implV1 = await ethers.getContractFactory("ImplementationV1");
        const implV1Instance = await implV1.deploy();

        console.log("Implementation V1 deployed at: ", implV1Instance.address);
        return implV1Instance.address;
    }
    
    async function deployProxy() {
        const proxy = await ethers.getContractFactory("Proxy");
        const proxyInstance = await proxy.deploy();
        await proxyInstance.deployed();
        // proxyInstance.on("GetImplementation", function (impl) {
        //     console.log(impl);
        // })
        // console.log("Implementation address: ", await proxyInstance.getImplementation())
        
        console.log("proxy deployed at: ", proxyInstance.address);
        await proxyInstance.initialize(12, "Dhruv");
        return proxyInstance;
    }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });