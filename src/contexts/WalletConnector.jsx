import { ethers } from "ethers";
import React, { createContext, useState, useContext, useEffect } from "react";

const initialState = {
  signer: {},
};
export const WalletContext = createContext(initialState);

export const useWalletContext = () => useContext(WalletContext);

export const WalletProvider = ({ children }) => {
  if (!window.ethereum.isMetaMask) {
    alert("Install Metamask");
  }
  const [address, setAddress] = useState("");
  const [connected, setConnected] = useState(false);
  const [provider, setProvider] = useState();
  const [signer, setSigner] = useState();

  useEffect(() => {
    const providerFromWallet = new ethers.providers.Web3Provider(
      window.ethereum
    );
    setProvider(providerFromWallet);
    const signerFromWallet = providerFromWallet.getSigner();
    setSigner(signerFromWallet);
  }, []);
  const connect = async () => {
    if (!window.ethereum.isMetaMask) {
      alert("Install Metamask");
      return;
    }
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    setAddress(account);
    setConnected(true);
  };

  window.ethereum.on("chainChanged", (chainId) => {
    window.location.reload();
  });

  window.ethereum.on("accontsChanged", (chainId) => {
    window.location.reload();
  });

  const disconnect = () => {};
  return (
    <WalletContext.Provider value={{ provider, address, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
};
