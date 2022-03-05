import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import twitterLogo from '../../assets/twitter-logo.svg';
import mintingContract from '../../contracts/our_house_contract.json';

const TWITTER_HANDLE = 'Web3con handle here';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const CONTRACT_ADDRESS = "0x547ce1964f9820d260d4995a8290c6291fc266a7";

const Mint = () => {

  const [currentAccount, setCurrentAccount] = useState("");
  
  const checkIfWalletIsConnected = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);

      setCurrentAccount(account)
    } else {
      console.log("No authorized account found")
    }
  }

  const comingSoon = async () => {

        alert("Not Yet Silly!");
        return;
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      // * Fancy method to request access to account.
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      /*
      * Boom! This should print out public address once we authorize Metamask.
      */
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const askContractToMintNft = async () => {  
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, mintingContract["31337"][0].contracts.OurHouse.abi, signer);
  
        console.log("Going to pop wallet now to pay gas...")
        let nftTxn = await connectedContract.mint(1);
  
        console.log("Mining...please wait.")
        await nftTxn.wait();
        
        console.log(`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`);
  
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Render Methods
  const renderNotConnectedContainer = () => (
    <button onClick={comingSoon} className="cta-button connect-wallet-button">
      Coming Soon!
    </button>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  },)

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="sub-text">
            Mint our NFT to help fund our project!
          </p>
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <button onClick={askContractToMintNft} className='main_button'>
            <span className="front">
              Mint Now
            </span>
          </button>
          )}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`@${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default Mint;