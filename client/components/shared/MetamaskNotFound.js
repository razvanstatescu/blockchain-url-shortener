/**
 * This page will be used when there is a problem like Metamask is not installed, contract is not deployed on the network you are on, etc
 */

export default function MetamaskNotFound() {
  return (
    <div className="min-h-screen pt-16 pb-12 flex flex-col bg-white">
      <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0 flex justify-center">
          <a href="/" className="inline-flex">
            <span className="sr-only">Workflow</span>
            <img
              className="h-32 w-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
              alt=""
            />
          </a>
        </div>
        <div className="py-16">
          <div className="text-center">
            <p className="text-sm font-semibold block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 uppercase tracking-wide">
              Metamask error
            </p>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              Contract not found.
            </h1>
            <p className="mt-2 text-base text-gray-500">
              Please make sure you have Metamask installed and connected to the Ropsten testnet.
            </p>
            <div className="mt-6">
              <a
                href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en"
                target="_blank"
                className="text-base font-medium block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400"
              >
                Get Metamask<span aria-hidden="true"> &rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
