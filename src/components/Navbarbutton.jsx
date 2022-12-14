import React, { useState, useEffect } from "react";

const Navbarbutton = ({ content, clicked, handleClick }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    clicked ? setColor("text-pink-500") : setColor("");
  }, [clicked]);

  return (
    <div className={color + " text-xl hover:p-2 hover:rounded-full hover:bg-app-dark-hover cursor-pointer"} onClick={handleClick}>{content}</div>
  )
};

export default Navbarbutton;
