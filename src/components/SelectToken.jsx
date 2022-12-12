import React, { useEffect, useState } from "react";
import SelectTokenModal from "../components/SelectTokenModal";
import { useAppContext } from "../contexts/AppContext";
import { coinDatas } from "../Data/coindata";

const SelectToken = () => {
  const [showModal, setShowModal] = useState(false);
  const [token, setToken] = useState(0);
  const context = useAppContext();

  useEffect(() => {
    setToken(context.selectedToken);
  }, [context.selectedToken]);

  return (
    <>
      <div className="bg-app-dark-hover flex justify-between items-center py-3 px-2 rounded-xl">
        <input
          type="number"
          placeholder="0"
          className="text-2xl placeholder-gray-600 bg-app-dark-hover outline-none text-gray-600 w-1/2"
        />
        <div
          className="flex gap-1 py-2 px-4 hover:cursor-pointer bg-app bg-app-dark-tokenSelect rounded-full"
          onClick={() => setShowModal(true)}
        >
          <img src={coinDatas[token].image} alt="tokenImage" title="tokenImage" className="h-8 w-8" />
          <h5 className="text-lg font-bold">{coinDatas[token].symbol}</h5>
        </div>
      </div>
      {<SelectTokenModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default SelectToken;
