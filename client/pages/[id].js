import { ethers } from 'ethers';
import { useRouter } from 'next/dist/client/router';
import { useContext, useEffect, useState } from 'react';

import contractAddress from '../contracts/contract-address.json';
import UrlShortnerArtifact from '../contracts/UrlShortner.json';

export default function Redirect() {
  const [contract, setContract] = useState();
  const router = useRouter();
  const { id } = router.query;

  useEffect(async () => {
    try {
      const provider = ethers.getDefaultProvider("ropsten");

      let wallet = ethers.Wallet.createRandom();
      wallet = wallet.connect(provider);
      const contract = new ethers.Contract(contractAddress.UrlShortner, UrlShortnerArtifact.abi, wallet);
      setContract(contract);
    } catch (e) {}
  }, []);

  useEffect(async () => {
    if (contract && id) {
      try {
        const res = await contract.getLink(id);
        if (res) window.location = res;
      } catch (e) {
        router.push("/");
      }
    }
  }, [contract, id]);

  return (
    <div className="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="">
          <div className="">
            <div className=" ">
              <h1 className="block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 text-4xl font-extrabold  tracking-tight sm:text-5xl">
                Redirecting..
              </h1>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
