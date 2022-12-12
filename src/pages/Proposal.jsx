import React from "react";
import SelectToken from "../components/SelectToken";
import { useAppContext } from "../contexts/AppContext";
import { coinDatas } from "../Data/coindata";

const Proposal = () => {

  const context = useAppContext();
  return (
    <div className="flex justify-center py-24">
      <div className="bg-app-dark-swap flex flex-col px-2 py-3 w-96 border-1 border-app-dark rounded-2xl">
        <h2 className="mb-3 text-xl px-3">Swap</h2>
        <div className="flex flex-col gap-3">
          <SelectToken />
          <SelectToken />
          <div className="bg-app-dark-hover flex justify-between rounded-xl">
            <div className="flex gap-1 w-1/2">
              <img className="w-8 h-8" src={coinDatas[context.firstToken].image} alt="coinImage" title="coinImage" />
              <input type="number" className="text-gray-500 outline-none text-lg w-full bg-app-dark-tokenSelect placeholder-gray-500" placeholder="1" />
            </div>
            <div className="flex gap-1 w-1/2">
              <img className="w-8 h-8" src={coinDatas[context.secondToken].image} alt="coinImage" title="coinImage" />
              <input type="number" className="text-gray-500 outline-none text-lg w-full bg-app-dark-tokenSelect placeholder-gray-500" placeholder="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
