import React from "react";
import HeaderAdmin from "../common/HeaderAdmin/HeaderAdmin";
import UserAdmin from "../common/UserAdmin/UserAdmin";
import NavbarAdmin from "../common/NavbarAdmin/NavbarAdmin";
import "./admin.css";
import axios from "axios";
import { useState, useEffect } from "react";

const Admin = () => {
  const [info, setInfo] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Admin/alluser")
      .then((response) => {
        setInfo(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {/* <HeaderAdmin /> */}
      <div class="body__content__listFilm">
        <div class="listFilm__header">
          <div class="listFilm__header__nav">
            <div class="listFilm__header__nav__Show">
              <p>ListUser</p>
            </div>
            <div class="listFilm__header__nav__Search">
              <div class="nav__search__Film">
                <label for="search__Film">Search</label>
                <input
                  type="text"
                  placeholder="Film"
                  id="search__Film"
                  onchange="searchFilm()"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home__admin">
        <NavbarAdmin className="navbar__admin" />
        <UserAdmin information={info} className="user__admin" />
      </div>
    </>
  );
};

export default Admin;
