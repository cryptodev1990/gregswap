import React, { useState } from "react";
import SelectSecondTokenModal from "./SelectSecondTokenModal";

const SelectSecondToken = ({ token, setAmount }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-app-dark-hover flex justify-between items-center py-3 px-3 rounded-xl">
        <input
          type="number"
          placeholder="0"
          className="text-3xl font-semibold placeholder-gray-600 bg-app-dark-hover outline-none text-gray-600 w-1/2"
          min="0"
          onChange={(e) => setAmount(e.target.value)}
        />
        <div
          className="flex gap-1 py-2 px-4 hover:cursor-pointer bg-app bg-app-dark-tokenSelect rounded-full"
          onClick={() => setShowModal(true)}
        >
          <img
            src={token.image}
            alt="tokenImage"
            title="tokenImage"
            className="h-8 w-8"
          />
          <h5 className="text-lg font-bold">{token.symbol}</h5>
        </div>
      </div>
      {
        <SelectSecondTokenModal
          showModal={showModal}
          setShowModal={setShowModal}
        />
      }
    </>
  );
};

export default SelectSecondToken;
