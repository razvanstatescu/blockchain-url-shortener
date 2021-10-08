// This is a script for deploying your contracts. You can adapt it to deploy
// yours, or create new ones.
async function main() {
  // This is just a convenience check
  if (network.name === "hardhat") {
    console.warn(
      "You are trying to deploy a contract to the Hardhat Network, which" +
        "gets automatically created and destroyed every time. Use the Hardhat" +
        " option '--network localhost'"
    );
  }

  // ethers is avaialble in the global scope
  const [deployer] = await ethers.getSigners();
  console.log("Deploying the contracts with the account:", await deployer.getAddress());

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const UrlShortner = await ethers.getContractFactory("UrlShortner");
  const urlShortner = await UrlShortner.deploy();
  await urlShortner.deployed();

  console.log("UrlShortner address:", urlShortner.address);

  // We also save the contract's artifacts and address in the frontend directory
  saveFrontendFiles(urlShortner);
}

function saveFrontendFiles(urlShortner) {
  const fs = require("fs");
  const contractsDir = __dirname + "/../client/contracts";

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  fs.writeFileSync(
    contractsDir + "/contract-address.json",
    JSON.stringify({ UrlShortner: urlShortner.address }, undefined, 2)
  );

  const UrlShortnerArtifact = artifacts.readArtifactSync("UrlShortner");

  fs.writeFileSync(contractsDir + "/UrlShortner.json", JSON.stringify(UrlShortnerArtifact, null, 2));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
