import { useContext, useEffect } from 'react';

import contractAddress from '../../contracts/contract-address.json';
import UrlShortnerArtifact from '../../contracts/UrlShortner.json';
import { Web3Context } from '../Web3Context';

// Source: https://github.com/adriandelgg/ts-hardhat-nextjs-tailwind-app/blob/6c3685a76325554585c57de665f6c63c57a56fed/frontend/components/navbar/MetaMask.js

const MetaMask = () => {
  const { setContract, setProvider, ethers, setAccount } = useContext(Web3Context);

  async function enableEth() {
    try {
      if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const [account] = await ethereum.request({
          method: "eth_requestAccounts",
        });
        const chainId = await ethereum.request({ method: "eth_chainId" });

        const signer = provider.getSigner(account);
        const contract = new ethers.Contract(contractAddress.UrlShortner, UrlShortnerArtifact.abi, signer);

        setProvider(provider);
        if (await contract.deployed()) setContract(contract);
        setAccount(contract.signer._address);
      } else if (window.web3) {
        console.log("Update MetaMask");
      } else {
        console.log("Enable MetaMask");
      }
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    enableEth();
  }, []);

  return <></>;
};

export default MetaMask;
