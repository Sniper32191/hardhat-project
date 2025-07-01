async function main() {
  // Connect to the network and get signer
  const [deployer] = await ethers.getSigners();

  console.log("Using account:", deployer.address);

  // Replace with your deployed contract address
  const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

  // Attach to the deployed contract
  const simpleStorage = await ethers.getContractAt("SimpleStorage", contractAddress);

  // Set a new value
  const tx = await simpleStorage.set(100000);
  await tx.wait(); // wait for transaction to be mined
  console.log("Value set to 100000");

  // Get the current value
  const value = await simpleStorage.get();
  console.log("Stored value is:", value.toString());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });