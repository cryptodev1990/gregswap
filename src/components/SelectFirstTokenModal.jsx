import React, { useEffect, useState } from "react";
import { coinDatas } from "../Data/coindata";
import { useAppContext } from "../contexts/AppContext";
// import axios from "axios";

const SelectFirstTokenModal = ({ showModal, setShowModal }) => {
  const context = useAppContext();
  const [search, setSearch] = useState("");
  const [tempCoins, setTempCoins] = useState(coinDatas);
  // const [coinDatas, setCoinDatas] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false`
  //     )
  //     .then(({ data }) => {
  //       setCoinDatas(data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  useEffect(() => {
    console.log(search);
    setTempCoins(
      coinDatas.filter((coinData) =>
        new RegExp(search, "i").test(coinData.name)
      )
    );
  }, [search]);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  console.log(tempCoins);

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-x-auto">
            <div
              className="fixed inset-0 w-full h-full opacity-40"
              onClick={() => {
                setShowModal(false);
                setSearch("");
              }}
            ></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div className="relative flex flex-col w-full max-w-md border-1 border-app-dark items-center mx-auto bg-app-dark-swap rounded-xl shadow-lg px-2 pt-3">
                <div className="flex justify-between w-full items-center">
                  <h3 className="text-xl px-3">Select a token</h3>
                  <h3
                    className="text-gray-600 hover:cursor-pointer"
                    onClick={() => {
                      setShowModal(false);
                      setSearch("");
                    }}
                  >
                    <svg
                      className="h-10 w-10 text-gray-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {" "}
                      <line x1="18" y1="6" x2="6" y2="18" />{" "}
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </h3>
                </div>
                <div className="px-2 py-1 my-3 gap-3 rounded-xl bg-app-dark-hover border-1 border-gray-500 w-full flex">
                  <svg
                    className="h-8 w-8 text-gray-600"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <circle cx="10" cy="10" r="7" />{" "}
                    <line x1="21" y1="21" x2="15" y2="15" />
                  </svg>
                  <input
                    className="bg-app-dark-hover placeholder-gray-500 text-gray-500 outline-none w-full text-lg"
                    placeholder="Search name or paste address"
                    onChange={onChange}
                    name="search"
                    value={search}
                  />
                </div>
                <div className="flex flex-col gap-3 w-full h-96 overflow-auto">
                  {tempCoins.map((coinData, idx) => {
                    return (
                      <div
                        className="flex gap-5 hover:cursor-pointer"
                        onClick={() => {
                          context.setFirstToken(coinData.id - 1);
                          setShowModal(false);
                          setSearch("");
                        }}
                        key={idx}
                      >
                        <img
                          className="w-12 h-12"
                          src={coinData.image}
                          alt="cryptoImage"
                          title="coindataImage"
                        />
                        <div className="flex flex-col gap-1">
                          <h2 className="text-lg">{coinData.name}</h2>
                          <h4 className="text-sm">{coinData.symbol}</h4>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default SelectFirstTokenModal;
