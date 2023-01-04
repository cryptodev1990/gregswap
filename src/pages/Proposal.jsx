import React, { useState } from "react";
import SelectFirstToken from "../components/SelectFirstToken";
import SelectSecondToken from "../components/SelectSecondToken";
import { useAppContext } from "../contexts/AppContext";
import { useWalletContext } from "../contexts/WalletConnector";
import { createSwap } from "../service/swap";

const Proposal = () => {
  const context = useAppContext();
  const {provider} = useWalletContext()
  const [amountA, setAmountA] = useState(0);
  const [amountB, setAmountB] = useState(0);
  const [duration, setDuration] = useState(0);
  const handlePropose = () => {
    createSwap(provider, { 
      tokenA: context.firstToken,
      tokenB: context.secondToken,
      amountA,
      amountB,
      duration,
    })
  } 
  return (
    <div className="flex justify-center py-24">
      <div className="bg-app-dark-swap flex flex-col px-2 py-3 w-96 border-1 border-app-dark rounded-2xl">
        <h2 className="mb-3 text-xl px-3">Swap</h2>
        <div className="flex flex-col gap-5">
          <SelectFirstToken token={context.firstToken} setAmount = {setAmountA}/>
          <SelectSecondToken token={context.secondToken} setAmount = {setAmountB} />
         
          <div className="bg-app-dark-hover flex justify-between rounded-xl px-3 py-4 gap-4 items-center">
            <h4 className="text-xl text-gray-400">Duration</h4>
            <input
              type="number"
              className="text-gray-500 outline-none text-xl w-1/2 rounded-md px-3 py-1 bg-app-dark-tokenSelect placeholder-gray-500"
              placeholder="1"
              min="0"
              onChange = {(e) => setDuration(e.target.value)}
            />
          </div>
          <div className="bg-app-dark-button flex justify-center w-full font-semibold 
                    text-xl py-5 rounded-full text-app-dark-button 
                    hover:cursor-pointer active:bg-violet-700 active:text-violet-400"
                onClick = {handlePropose}
                    >
            Send Proposal
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
