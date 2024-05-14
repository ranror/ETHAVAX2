const hre = require("hardhat");

async function main() {
  const pizza = await hre.ethers.getContractFactory("pizza");
  const contract = await pizza.deploy(); //instance of contract

  await contract.waitForDeployment();
  const address = await contract.getAddress();
  console.log(`Contract Address: ${address}`);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});