import React from "react";
import HeaderAdmin from "../common/HeaderAdmin/HeaderAdmin";
import UserAdmin from "../common/UserAdmin/UserAdmin";
import NavbarAdmin from "../common/NavbarAdmin/NavbarAdmin";
import './admin.css'

const Admin = () => {
  return (
    <>
      {/* <HeaderAdmin /> */}
      <div class="body__content__listFilm">
            <div class="listFilm__header">
              <div class="listFilm__header__nav">
                <div class="listFilm__header__nav__Show">
                  <p>BookList</p>
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
        <UserAdmin className = "user__admin"/>
      </div>
    </>
  );
};

export default Admin;
