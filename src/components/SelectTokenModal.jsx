import React from "react";
import { coinDatas } from "../Data/coindata";
// import axios from "axios";

const SelectTokenModal = ({ showModal, setShowModal }) => {
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

  return (
    <>
      {showModal ? (
        <>
          <div className="fixed inset-0 z-10 overflow-x-auto">
            <div
              className="fixed inset-0 w-full h-full opacity-40"
              onClick={() => setShowModal(false)}
            ></div>
            <div className="flex items-center px-4 py-6 min-h-screen">
              <div className="relative flex flex-col w-full max-w-xl items-center mx-auto bg-app-dark-swap rounded-xl shadow-lg px-2 pt-3">
                <div className="flex justify-between">
                  <h3>Select a token</h3>
                  <h3
                    className="text-gray-600"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      className="h-12 w-12 text-gray-600"
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
                <div className="px-2 py-1 gap-1 rounded-xl bg-app-dark-hover border-b-2 border-gray-500">
                  <svg
                    className="h-12 w-12 text-gray-600"
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
                    className="bg-app-dark-hover placeholder-gray-700"
                    placeholder="Search name or paste address"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  {coinDatas.map((coinData) => {
                    return (
                      <div className="flex gap-2">
                        <img
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

export default SelectTokenModal;
