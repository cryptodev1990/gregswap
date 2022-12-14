import React, { useEffect, useState } from "react";
import Navbarbutton from "./Navbarbutton";
import { useNavigate } from "react-router-dom";
import { useWalletContext } from "../contexts/WalletConnector";
import Iconmenu from "../assets/menu.svg";

const Header = () => {
  const naviagte = useNavigate();
  const wallet = useWalletContext();
  console.log(wallet.address)
  const [content, setContent] = useState("Connect");
  const [openMenu, setOpenMenu] = useState(false);
  const [id, setId] = useState(1);

  const ProposalClick = () => {
    setId(1);
    naviagte("/");
  };

  const ProposalHambugerClick = () => {
    setId(1);
    naviagte("/");
    setOpenMenu(false);
  };

  const InboxClick = () => {
    setId(2);
    naviagte("/inbox");
  };

  const InboxHambugerClick = () => {
    setId(2);
    naviagte("/inbox");
    setOpenMenu(false);
  };

  const WithdrawClick = () => {
    setId(3);
    naviagte("/withdraw");
  };

  const WithdrawHambugerClick = () => {
    setId(3);
    naviagte("/withdraw");
    setOpenMenu(false);
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
      <div className="hidden md:flex gap-8 items-center">
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
        className="hidden md:flex bg-app-dark-button px-8 py-2 rounded-full text-app-dark-button 
                    text-lg font-bold active:text-blue-600 active:bg-blue-500"
        >
        {content}
      </button>
      <div className="md:hidden flex" onClick={() => setOpenMenu(!openMenu)}>
        <img src={Iconmenu} alt="menu" title="menu" />
      </div>
      <div
        className={
          (openMenu ? "-translate-x-0" : "translate-x-full") +
          " fixed top-0 right-0 w-screen h-full z-50 bg-black bg-opacity-80 transform duration-200"
        }
      >
        <div
          className="h-36 flex bg-black items-center pr-10 justify-end"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <p className="text-5xl cursor-pointer text-white">X</p>
        </div>
        <div className="flex flex-col w-full justify-center items-center gap-8 pt-10">
          <Navbarbutton
            content="Proposal"
            clicked={id === 1}
            handleClick={ProposalHambugerClick}
          />

          <Navbarbutton
            content="Sign"
            clicked={id === 2}
            handleClick={InboxHambugerClick}
          />
          <Navbarbutton
            content="Withdraw"
            clicked={id === 3}
            handleClick={WithdrawHambugerClick}
          />
          <button
            className="bg-app-dark-button px-8 py-2 rounded-full text-app-dark-button text-lg font-bold active:text-blue-600 active:bg-blue-500"
            onClick={() => {
              setOpenMenu(false);
            }}
          >
            {content}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
