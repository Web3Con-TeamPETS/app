import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import mintingContract from '../../contracts/our_house_contract.json';

const CONTRACT_ADDRESS = "0xa79086B73741A5826575B4580009aaF41D7d645B";

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
    <button onClick={connectWallet} className="main_button">
      <span className="front">
        Connect Wallet
      </span>
    </button>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  },)

  return (
        <div>
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
           <button onClick={askContractToMintNft} className='main_button'>
            <span className="front">
              Mint
            </span>
          </button>
          )}
        </div>
  );
};

export default Mint;