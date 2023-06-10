import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  // Toogle Menu
  const [MobileMenu, setMobileMenu] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const location = useLocation();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsLogin(true);
    }
  }, [location]);

  const logOut = () => {
    localStorage.removeItem("token");
    setIsLogin(false);
  };

  return (
    <>
      <header className="header">
        <div className="header__container container d_flex">
          <div className="catgrories d_flex nav_category">
            <span class="fa-solid fa-border-all"></span>
            <h4>
              Thể loại <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="navlink">
            <ul
              className={
                MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"
              }
              onClick={() => setMobileMenu(false)}
            >
              {/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
              <li className="navlink__item">
                <Link to="/home">Trang chủ</Link>
              </li>
              <li className="navlink__item">
                {isLogin === false ? (
                  <Link to="/login">Đăng nhập</Link>
                ) : (
                  <Link onClick={logOut} to="/home">
                    Đăng xuất
                  </Link>
                )}
              </li>
              <li className="navlink__item">
                {isLogin === false ? (
                  <Link to="/register">Đăng kí</Link>
                ) : (
                  <Link></Link>
                )}
              </li>
              {/* <li>
                <Link to='/admin'>vendor account</Link>
              </li> */}
              {/* <li>
                <Link to='/track'>track my order</Link>
              </li> */}
              <li className="navlink__item">
                <Link to="/detail">Liên hệ</Link>
              </li>
            </ul>

            <button
              className="toggle"
              onClick={() => setMobileMenu(!MobileMenu)}
            >
              {MobileMenu ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
