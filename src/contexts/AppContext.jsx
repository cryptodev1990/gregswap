import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";
import { coinDatas } from "../Data/coindata";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [firstToken, setFirstToken] = useState(coinDatas[0]);
  const [secondToken, setSecondToken] = useState(coinDatas[1]);

  return (
    <AppContext.Provider
      value={{ firstToken, setFirstToken, secondToken, setSecondToken }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppContextProvider.propTypes = {
  children: PropTypes.object,
};

export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);
