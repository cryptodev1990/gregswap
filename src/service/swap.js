import { BigNumber, ethers } from "ethers";
import abi from "./swapAbi.json"
export const createSwap = async (provider, data)=>{
    const swapAddress = process.env.REACT_APP_SWAP_ADDRESS;
    console.log(swapAddress,data)
    const {tokenA, tokenB, amountA, amountB, duration} = data;
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(swapAddress, abi, signer);
    
    const result = await tokenContract.createSwap(tokenA.address, tokenB.address, ethers.BigNumber.from(amountA), ethers.BigNumber.from(amountB), ethers.BigNumber.from(duration))
    const aa = result.wait();
    tokenContract.on("CreatedSwap", (tokenA, tokenB, creator, 
        swapAddress, amountA, amountB, 
        expiredTime, swapId) => {
        console.log("---------------",tokenA, tokenB, creator, 
            swapAddress, amountA, amountB, 
            expiredTime, swapId);
        console.log(Number(swapId))
        alert("created swapId is ",Number(swapId).toString())
    });
    console.log(aa)
}

export const join = async (provider, swapId) =>{
    const swapAddress = process.env.REACT_APP_SWAP_ADDRESS;
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(swapAddress, abi, signer);
    const id = ethers.BigNumber.from(swapId);
    const result = await tokenContract.join(id)
    const aa = result.wait();
    tokenContract.on("Joined", (swapId) => {
        console.log("joined SwapId:", swapId);
        console.log(Number(swapId))
        alert("joined swapId is ",Number(swapId).toString())
    });
    console.log(aa)
}

export const withdraw = async (provider, swapId) =>{
    const swapAddress = process.env.REACT_APP_SWAP_ADDRESS;
    const signer = provider.getSigner();
    const tokenContract = new ethers.Contract(swapAddress, abi, signer);
    const id = ethers.BigNumber.from(swapId);
    const result = await tokenContract.withdraw(id)
    const aa = result.wait();
    tokenContract.on("Withdrawed", (addr, swapId) => {
        console.log("withdrawed:", addr, swapId);
        console.log(Number(swapId))
        alert("withdrawed swapId is ",Number(swapId).toString())
    });
    console.log(aa)
}