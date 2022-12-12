import React from "react";

const Inbox = () => {
  return (
    <div className="flex justify-center py-24">
      <div className="flex flex-col items-center gap-10 bg-app-dark-swap border-1 border-app-dark rounded-xl w-96 py-4 px-5">
        <input
          type="number"
          className="outline-none placeholder-gray-500 text-lg w-1/2 text-gray-500 bg-app-dark-tokenSelect py-2 px-4 rounded-full"
          placeholder="1"
        />
        <button className="bg-app-dark-button px-8 py-2 w-1/2 rounded-full text-app-dark-button text-lg font-bold active:text-blue-600 active:bg-blue-500">Withdraw</button>
      </div>
    </div>
  );
};

export default Inbox;
