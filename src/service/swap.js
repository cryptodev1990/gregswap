import { ethers } from "ethers";
import abi from "./swapAbi.json"
export const createSwap = async (provider, data)=>{
    const swapAddress = process.env.REACT_APP_SWAP_ADDRESS;
    console.log(swapAddress,data)
    const {tokenA, tokenB, amountA, amountB, duration} = data;
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(swapAddress, abi, signer);
    
    const result = await tokenContract.createSwap(tokenA.address, tokenB.address, amountA, amountB, duration)
    const aa = result.wait();
    tokenContract.on("CreatedSwap", (tokenA, tokenB, creator, 
        swapAddress, amountA, amountB, 
        expiredTime, swapId) => {
        console.log("---------------",tokenA, tokenB, creator, 
            swapAddress, amountA, amountB, 
            expiredTime, swapId);
        console.log(Number(swapId))
        alert("created swapId is ",Number(swapId))
    });
    console.log(aa)
}

export const join = async (provider, swapId) =>{
    const swapAddress = process.env.REACT_APP_SWAP_ADDRESS;
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(swapAddress, abi, signer);
    
    const result = await tokenContract.join(swapId)
    const aa = result.wait();
    console.log(aa)
}

export const withdraw = async (provider, swapId) =>{
    const swapAddress = process.env.REACT_APP_SWAP_ADDRESS;
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(swapAddress, abi, signer);
    
    const result = await tokenContract.withdraw(swapId)
    const aa = result.wait();
    console.log(aa)
}