import React, { useState, useEffect } from "react";
import "../App.css";

const Navbarbutton = ({ content, clicked, handleClick }) => {
  const [color, setColor] = useState("");

  useEffect(() => {
    clicked ? setColor("text-pink-500") : setColor("");
  }, [clicked]);

  return (
    <div className={color + " text-xl p-2 hover:hoverbackground rounded-xl hover:bg-app-dark-hover bg-app-dark-swap cursor-pointer"} onClick={handleClick}>{content}</div>
  )
};

export default Navbarbutton;
