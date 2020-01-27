import React from "react";
import Button from "../Button";
import "./Navbar.scss";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const goHome = () => history.push('home');
  const goHistory = () => history.push('history');
  return (
    <div className={"navbar"}>
      <div className={"navbar_logo"}>
        <img className={"logo_image"} src="logovideo.png" alt="img"/>
        <span className="title">VOD Application</span>
      </div>
      <div className={"navbar_buttons"}>
        <Button text={"Home"} color={'red'} onclick={goHome} />
        <Button text={"History"} color={'blue'} onclick={goHistory} />
      </div>
    </div>
  );
};

export default Navbar;