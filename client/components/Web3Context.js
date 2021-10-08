import { ethers } from 'ethers';
import { createContext, useEffect, useState } from 'react';

// Source: https://github.com/adriandelgg/ts-hardhat-nextjs-tailwind-app/blob/6c3685a76325554585c57de665f6c63c57a56fed/frontend/components/Web3Context.js

export const Web3Context = createContext();
const oneEther = ethers.BigNumber.from("1000000000000000000");

const Web3Provider = ({ children }) => {
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState("");

  // Listens for a change in account and updates state
  useEffect(() => {
    if (contract && provider) {
      window?.ethereum?.on("accountsChanged", newAccount);
      return () => ethereum.removeListener("accountsChanged", newAccount);
    }
  });

  function newAccount(accounts) {
    setContract(contract.connect(provider.getSigner(accounts[0])));
    setAccount(accounts[0]);
  }

  // Listens for network changes to reload the page
  useEffect(() => {
    window?.ethereum?.on("chainChanged", (chainId) => window.location.reload());
    return () => ethereum.removeListener("chainChanged", (chainId) => window.location.reload());
  }, []);

  return (
    <Web3Context.Provider
      value={{
        ethers,
        provider,
        setProvider,
        contract,
        setContract,
        account,
        setAccount,
        oneEther,
      }}
    >
      {children}
    </Web3Context.Provider>
  );
};

export default Web3Provider;
