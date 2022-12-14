import { ethers } from "ethers";
import React, {createContext, useState, useContext} from "react";

const initialState = {
    signer : {}
}
export const WalletContext = createContext(initialState);

export const useWalletContext = () => useContext(WalletContext);

export const WalletProvider = ({children}) => {
    const [address, setAddress] = useState("");
    const [connected, setConnected] = useState(false);
    const connect = async () => {
        if(!window.ethereum.isMetaMask){
            alert("Install Metamask");
            return;
        } 
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        console.log(accounts);
        setAddress(account)
        // const tmpSigner = provider.getSigner();
        // setSigner(tmpSigner);
    }
  
    const disconnect = () => {

    }
    return (
        <WalletContext.Provider value = {{address, connect, disconnect}}>
            {children}
        </WalletContext.Provider>
    )
}


