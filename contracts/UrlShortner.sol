pragma solidity ^0.7.0;

import "hardhat/console.sol";

contract UrlShortner {
  event LinkAdded(uint256 linkId, string url, address owner);
  mapping(uint256 => string) public linkMapping;

  constructor() {}

  function shortenLink(string memory url) public returns (uint256) {
    uint256 linkId = random(url);
    linkMapping[linkId] = url;
    emit LinkAdded(linkId, url, msg.sender);
    return linkId;
  }

  function getLink(uint256 linkId) public view returns (string memory) {
    return linkMapping[linkId];
  }

  function random(string memory url) private view returns (uint256) {
    bytes32 urlHash = keccak256(abi.encode(url));
    uint256 randomNumber = uint256(urlHash);
    return randomNumber % 10000000000;
  }
}
