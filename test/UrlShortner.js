const { expect } = require("chai");
const { MockProvider } = require("ethereum-waffle");

describe("Url Shortner contract", function () {
  let UrlShortner;
  let hardhatUrlShortner;
  let wallet;
  beforeEach(async function () {
    UrlShortner = await ethers.getContractFactory("UrlShortner");

    // To deploy our contract, we just have to call Token.deploy() and await
    // for it to be deployed(), which happens onces its transaction has been
    // mined.
    hardhatUrlShortner = await UrlShortner.deploy();
    await hardhatUrlShortner.deployed();

    [wallet] = new MockProvider().getWallets();
  });

  it("Should deploy the contract", async function () {
    expect(hardhatUrlShortner).to.be.ok;
  });

  it("Should shorten a url", async function () {
    const urlToShorten = "https://statescu.net";

    await expect(hardhatUrlShortner.shortenLink(urlToShorten)).to.emit(hardhatUrlShortner, "LinkAdded");
  });
});
