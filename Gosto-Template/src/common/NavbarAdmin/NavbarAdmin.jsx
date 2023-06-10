import React from "react";
import "./navbaradmin.css";
import { Link } from "react-router-dom";

const NavbarAdmin = () => {
  const data = [
    {
      path: "/admin",
      cateImg: "./images/category/cat1.png",
      cateName: "Home",
    },
    {
      path: "/adminCategory",
      cateImg: "./images/category/cat2.png",
      cateName: "Category",
    },
    {
      path: "/adminBook",
      cateImg: "./images/category/cat3.png",
      cateName: "Book",
    },
  ];

  return (
    <>
      <div className="category category__admin_2">
        {data.map((value, index) => {
          return (
            <div className="box f_flex category_items" key={index}>
              <img src={value.cateImg} alt="" />
              <Link to={value.path}>
                <span className="link__page">{value.cateName}</span>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default NavbarAdmin;
