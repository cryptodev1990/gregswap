import React from "react";
import SelectToken from "../components/SelectToken";

const Proposal = () => {
  return (
    <div className="flex justify-center py-24">
      <div className="bg-app-dark-swap flex flex-col px-2 py-3 w-96 border-1 border-app-dark rounded-2xl">
        <h2 className="mb-3 text-xl px-3">Swap</h2>
        <div className="flex flex-col gap-3">
          <SelectToken />
          <SelectToken />
        </div>
      </div>
    </div>
  );
};

export default Proposal;
