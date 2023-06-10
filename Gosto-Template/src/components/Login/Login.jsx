import React, { useState } from "react";
import "./login.css";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [role, setRole] = useState([]);
  const navigate = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    try {
      const response = await axios.post("http://127.0.0.1:8000/Admin/login", {
        email: email,
        password: password,
      });

      // console.log(response.data);
      localStorage.setItem("token", response.data["access__token"]);
      var tokenn = localStorage.getItem("token");
      axios
        .get("http://127.0.0.1:8000/Admin/giaima", {
          headers: {
            Authorization: "Bearer " + tokenn,
          },
        })
        .then((response) => {
          setRole(response.data);
          console.log(response.data);
          if (response.data.Roles.includes("Admin")) {
            navigate.push(`/admin`);
          } else {
            navigate.push(`/home`);
          }
        });
    } catch (error) {
      // console.error(error);
      alert("Tài khoản hoặc mật khẩu không tồn tại");
      // Handle the error
    }
  };
  return (
    <>
      <div id="header1">
        <div className="header__img">
          <img
            src="https://cpad.ask.fm/752/629/438/-79996973-20634hj-k9n9q6a644n4go5/large/nkfGXRnLzS.png"
            alt=""
          />
        </div>
      </div>
      <div className="showcase">
        {/* <div className="logo">
                    <img src="/static/image/netflix.png"/>
                </div> */}

        <div className="showcase-content">
          <div className="formm">
            <div>
              <h1>Sign In</h1>
              <div className="info">
                <div className="info__Input">
                  <input
                    placeholder="Email"
                    className="input__login"
                    id="email"
                    type="email"
                  />
                </div>
                <div className="info__Input">
                  <input
                    placeholder="Password"
                    id="password"
                    className="input__login"
                    type="password"
                  />
                  <div className="password__Error Error">
                    <p>Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự.</p>
                  </div>
                </div>
              </div>
              <div className="btn">
                <button
                  className="btn-primary"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign In
                </button>
              </div>
              <div className="help">
                <div>
                  <input value="true" type="checkbox" />
                  <label>Remember me</label>
                </div>

                <a
                  href="https://www.netflix.com/dz-en/LoginHelp"
                  className="help_link"
                >
                  Need Help ?
                </a>
              </div>
            </div>
          </div>

          <div className="signup">
            <p>New to VTN ?</p>
            <a href="/register">Sign up now</a>
          </div>
          <div className="more">
            <p>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#">Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
