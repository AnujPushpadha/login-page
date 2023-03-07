import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:4000/auth/signIn";
    axios
      .post(url, data)
      .then((response) => {
        // console.log(response);
        // console.log(response.data.token);
        localStorage.setItem("token", response.data.token);
        navigate("/");
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
    <div className={"login_container"}>
      <div className={"login_form_container"}>
        <div className={"left"}>
          <form className={"form_container"} onSubmit={handleSubmit}>
            <h1>Login to Your Account</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
              className={"input"}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
              className={"input"}
            />
            {error && <div className={"error_msg"}>{error}</div>}
            <button type="submit" className={"white_btn"}>
              Sing In
            </button>
          </form>
        </div>
        <div className={"right"}>
          <h1>New Here ?</h1>
          <Link to="/signup">
            <button type="button" className={"green_btn"}>
              Sing Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
