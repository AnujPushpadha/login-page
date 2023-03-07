import React from "react";
// import Cards from "../../components/Cards/Cards";
import Cards from "../../components/cards/Cards";
import Tablemui from "../../components/table/Tablemui";

import "./Style.css";
const DashBordHome = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div className="App">
        <div className="AppGlass">
          <h1 style={{ textAlign: "center" }}>Welcome</h1>
          <div className="MainDash">
            <Cards />
          </div>
          <div className="table">
            <Tablemui />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBordHome;
