import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Style.css";
import UserDetails from "../../components/userDetails/UserDetails";
const DashBord = () => {
  const [open, setOpen] = React.useState(false);
  const handleUserOpen = () => {
    console.log("click");
    setOpen(true);
  };
  const onClose = () => {
    console.log("close");
    setOpen(false);
  };
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  return (
    <div>
      <div>
        <Navbar UserOpen={handleUserOpen} />
      </div>
      <UserDetails open={open} onClose={onClose} />
      <Outlet />
    </div>
  );
};

export default DashBord;
