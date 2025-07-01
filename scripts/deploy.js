async function main() {
  // Get the first signer (deployer)
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // Compile and get the contract factory
  const SimpleStorage = await ethers.getContractFactory("SimpleStorage");

  // Deploy the contract
  const simpleStorage = await SimpleStorage.deploy();

  // Wait for deployment to finish
  await simpleStorage.deployed();

  console.log("SimpleStorage deployed to:", simpleStorage.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });