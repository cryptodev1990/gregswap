import React from "react";

const SelectToken = ({token}) => {
  return (
    <div className="bg-app-dark-hover flex justify-between items-center py-10 px-2 rounded-xl">
      <input type="number" placeholder="0" className="text-2xl" />
      <div className="">{token}</div>
    </div>
  )
}

export default SelectToken;