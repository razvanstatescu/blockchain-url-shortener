import { useContext, useEffect, useState } from 'react';

import MetamaskNotFound from '../components/shared/MetamaskNotFound';
import { Web3Context } from '../components/Web3Context';
import { copyTextToClipboard } from '../utils/copyToClipboard';

const footerNavigation = {
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/the.dev.guy/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/StatescuRazvan",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/razvanstatescu/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};
let _urlExternal;
let _addressExternal;

export default function Home() {
  const { contract, account } = useContext(Web3Context);
  const [url, setUrl] = useState();
  const [shortUrl, setShortUrl] = useState();
  const [loading, setLoading] = useState(false);

  const setShortenUrl = (_linkId, _url, _owner) => {
    if (_urlExternal !== _url) return;
    if (_addressExternal !== _owner) return;
    const linkId = _linkId.toString();
    const url = location.origin + "/" + linkId;
    setShortUrl(url);
    copyTextToClipboard(url);
    setLoading(false);
  };

  useEffect(() => {
    if (contract) {
      contract.on("LinkAdded", (_linkId, _url, _owner) => {
        setShortenUrl(_linkId, _url, _owner);
      });
      return () => contract.removeAllListeners("LinkAdded");
    }
  }, [contract]);

  if (!contract) {
    return <MetamaskNotFound />;
  }

  const isValidUrl = (string) => {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const shortenUrl = async () => {
    if (!isValidUrl(url)) {
      alert("Please input a valid URL (including the protocol http(s)).");
    }
    setShortUrl(null);
    setLoading(true);
    _urlExternal = url;
    _addressExternal = account;
    await contract.shortenLink(url);
  };

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">URL Shortener</span>
                      <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                        on Blockchain
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      This is a very simple,{" "}
                      <a
                        href="https://github.com/razvanstatescu/blockchain-url-shortener"
                        target="_blank"
                        className="underline"
                      >
                        open-source
                      </a>{" "}
                      URL shortener running on the Ethereum Blockchain.
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                            <label htmlFor="email" className="sr-only">
                              Website address
                            </label>
                            <input
                              type="url"
                              placeholder="https://example.com"
                              className="block read-only:bg-gray-300 read-only:cursor-not-allowed w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                              onChange={handleUrlChange}
                              readOnly={loading}
                            />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              className="disabled:cursor-not-allowed disabled:from-gray-500 disabled:to-gray-600 block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                              onClick={shortenUrl}
                              disabled={loading}
                            >
                              Shorten
                            </button>
                          </div>
                        </div>
                        {loading && <div className="mt-2 text-white">Loading..</div>}
                        {shortUrl && (
                          <div className="mt-2 text-white">
                            Short URL <span className="text-teal-500">{shortUrl}</span> copied to your clipboard
                          </div>
                        )}
                        <p className="mt-3 text-xs text-gray-300 sm:mt-4">
                          This project is not running on the mainnet and is not intended for live/production use cases.
                        </p>
                        <a
                          href="https://faucet.ropsten.be/"
                          className="text-xs font-medium block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 mt-1"
                          target="_blank"
                        >
                          Ropsten Faucet<span aria-hidden="true"> &rarr;</span>
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-gray-50" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-md mx-auto pt-12 px-4 sm:max-w-7xl sm:px-6 lg:pt-16 lg:px-8">
            <div className="flex justify-center">
              <div className="space-y-2 xl:col-span-1">
                <img className="h-32 mx-auto" src="https://statescu.net/avatar-new.svg" alt="Statescu Razvan" />
                <p className="text-gray-500 text-base text-center">
                  Made by{" "}
                  <a href="https://statescu.net" target="_blank" className="underline">
                    Statescu Razvan
                  </a>
                </p>
                <div className="flex space-x-6 py-2 justify-center">
                  {footerNavigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-12 border-t border-gray-200 py-8">
              <p className="text-base text-gray-400 xl:text-center">
                This is an open-source project.{" "}
                <a
                  className="underline"
                  href="https://github.com/razvanstatescu/blockchain-url-shortener"
                  targe="_blank"
                >
                  Github
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
