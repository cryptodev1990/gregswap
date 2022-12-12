import React, { useState } from "react";
import SelectTokenModal from "../components/SelectTokenModal";

const SelectToken = ({ token }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-app-dark-hover flex justify-between items-center py-10 px-2 rounded-xl">
        <input
          type="number"
          placeholder="0"
          className="text-2xl placeholder-gray-700 bg-app-dark-hover"
        />
        <div
          className="flex gap-1 py-1 px-2"
          onClick={() => setShowModal(true)}
        >
          <img src={token.image} alt="tokenImage" title="tokenImage" />
          <h5 className="text-lg font-bold">{token.symbol}</h5>
        </div>
      </div>
      {<SelectTokenModal showModal={showModal} setShowModal={setShowModal} />}
    </>
  );
};

export default SelectToken;
