import React from "react";
import "./Sidebar.css";
import Logo from "../../img/tranzact-logo.png";
const Sidebar = () => {
  return (
    <div className="Sidebar">
      <div className="logo">
        <img src={Logo} alt="Logo" height={"50px"} />
      </div>
    </div>
  );
};

export default Sidebar;
