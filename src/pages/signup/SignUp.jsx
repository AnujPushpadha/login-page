import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Style.css";

const SignUp = () => {
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
    password: "",
    passwordConformation: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/auth/signUp";
    axios
      .post(url, data)
      .then((response) => {
        // console.log(response);
        // console.log(response.data.token);
        //localStorage.setItem("token", response.data.token);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        if (
          error.response &&
          error.response.status >= 400 &&
          error.response.status <= 500
        ) {
          setError(error.response.data.message);
        }
      });

    console.log(data);
  };

  return (
    <div className={"SignUp_container"}>
      <div className={"SignUp_form_container"}>
        {/* route to SignUp */}
        <div className={"left"}>
          <h1>Welcome Back</h1>
          <Link to="/login">
            <button type="button" className={"white_btn"}>
              SignIn
            </button>
          </Link>
        </div>
        <div className={"right"}>
          <form className={"form_container"} onSubmit={handleSubmit}>
            <h1 style={{ color: "#3bb19b" }}>Create Account</h1>
            <input
              type={"text"}
              name={"FirstName"}
              placeholder={"First Name"}
              value={data.FirstName}
              required
              onChange={handleChange}
              className={"input"}
            />

            <input
              type={"text"}
              name={"LastName"}
              placeholder={"LastName"}
              value={data.LastName}
              required
              onChange={handleChange}
              className={"input"}
            />
            <input
              type={"text"}
              name={"email"}
              placeholder={"E-Mail"}
              value={data.email}
              required
              onChange={handleChange}
              className={"input"}
            />
            <input
              type={"text"}
              name={"password"}
              placeholder={"password"}
              value={data.password}
              required
              onChange={handleChange}
              className={"input"}
            />
            <input
              type={"text"}
              name={"passwordConformation"}
              placeholder={"Password-Conformation"}
              value={data.passwordConformation}
              required
              onChange={handleChange}
              className={"input"}
            />

            {error && <div className={"error_msg"}>{error}</div>}
            <button type="submit" className={"green_btn"}>
              Sing Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
