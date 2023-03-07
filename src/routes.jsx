import React from "react";
import Home from "./pages/home/Home";
import DashBord from "./pages/dashbord/DashBord";
import Login from "./pages/login/Login";
import SignUp from "./pages/signup/SignUp";
import DashBordHome from "./pages/dashbordHome/DashBordHome";
import Transaction from "./pages/Transaction/Transaction";
import PrivateRoute from "./components/PrivateRoute";
import EditPage from "./pages/editPage/EditPage";
const RouteArray = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/dashbord",
    element: (
      // <PrivateRoute>
      <DashBord />
      // </PrivateRoute>
    ),
    children: [
      {
        path: "/dashbord",
        // path: "/dashbord/home",
        element: <DashBordHome />,
      },
      {
        // path: "/dashbord",
        path: "/dashbord/transaction",
        element: <Transaction />,
      },
      {
        path: "/dashbord/editpage",
        element: <EditPage />,
      },
    ],
  },
];

export default RouteArray;
