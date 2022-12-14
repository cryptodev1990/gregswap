import { ethers } from "ethers";
import { useWalletContext } from "../contexts/WalletConnector";
import abi from "./abi.json"

export const getTokenInfo = async (provider, tokenAddress) =>{
    console.log(provider);
    if(!ethers.utils.isAddress(tokenAddress)){
        alert("invalid address")
    } 
    const tokenContract = new ethers.Contract(tokenAddress, abi, provider);
    const tokenName = await tokenContract.name();
    const tokenSymbol = await tokenContract.symbol();
    console.log(tokenName);
    const token = {
        image: "https://assets.coingecko.com/coins/images/6319/large/USD_Coin_icon.png",
        address: tokenAddress,
        name: tokenName,
        symbol: tokenSymbol
    };
    return token;
}