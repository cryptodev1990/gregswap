import React, { useEffect, useState } from "react";
import Navbarbutton from "./Navbarbutton";
import { useNavigate } from "react-router-dom";
import { useWalletContext } from "../contexts/WalletConnector";

const Header = () => {
  const naviagte = useNavigate();
  const wallet = useWalletContext();
  console.log(wallet.address)
  const [content, setContent] = useState("Connect");
  const [id, setId] = useState(1);

  const ProposalClick = () => {
    setId(1);
    naviagte("/");
  };

  const InboxClick = () => {
    setId(2);
    naviagte("/inbox");
  };

  const WithdrawClick = () => {
    setId(3);
    naviagte("/withdraw");
  };

  const handleConnect = () => {
    if (wallet.address == ""){
      console.log('asdfafsd')
      wallet.connect()
    }
    else {
      wallet.disconnect();
    }
  };

  useEffect(()=>{
    if(!wallet.address) setContent("Connnect")
    else setContent(wallet.address);
  },[wallet.address]);
  return (
    <div className="flex justify-between">
      <div className="flex gap-8 items-center">
        <h1 className="text-2xl mr-10">GCN</h1>
        <Navbarbutton
          content="Proposal"
          clicked={id === 1}
          handleClick={ProposalClick}
        />
        <Navbarbutton
          content="Inbox"
          clicked={id === 2}
          handleClick={InboxClick}
        />
        <Navbarbutton
          content="Withdraw"
          clicked={id === 3}
          handleClick={WithdrawClick}
        />
      </div>
      <button  
        onClick={handleConnect}
        className="bg-app-dark-button px-8 py-2 rounded-full text-app-dark-button 
                    text-lg font-bold active:text-blue-600 active:bg-blue-500"
        >
        {content}
      </button>
    </div>
  );
};

export default Header;
