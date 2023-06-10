import React, { useEffect, useState } from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import "./categoryadmin.css";
import CategoryAdminCard from "./CategoryAdminCard";
import axios from "axios";
import { Link } from "react-router-dom";

const CategoryAdmin = () => {
  const [category, setCategory] = useState([]);
  const [click, setClick] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Admin/allcategory")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [click]);

  const handleSubmit = (id) => {
    if (window.confirm("Can you delete category?") == true) {
      axios
        .delete("http://127.0.0.1:8000/Admin/deletecategory/" + id)
        .then((response) => {
          setClick(!click);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <div class="body__content__header">
        <div class="content__header__title">
          <h1>Category</h1>
        </div>
        <div class="content__header__AddCategory">
          <div class="Addcategory">
            <Link to="/adminAddCategory">
              <p>Add Category</p>
            </Link>
          </div>
        </div>
      </div>
      <div class="body__content__listCategory">
        <div class="listCategory__header">
          <div class="listCategory__header__nav">
            <div class="listCategory__header__nav__Show">
              <p>CategoryList</p>
            </div>
            <div class="listCategory__header__nav__Search">
              <div class="nav__search__Category">
                <label for="search__Category">Search</label>
                <input
                  type="text"
                  placeholder="Category"
                  id="search__Category"
                  onchange="searchCategory()"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category__admin">
        <NavbarAdmin className="navbar__admin" />
        {/* <HeaderAdmin /> */}
        <div className="container">
          <div className="row">
            <h1>List Category</h1>
          </div>
          <table className="table__user">
            <thead className="table__user-head">
              <tr>
                <th>ID</th>
                <th>Thể loại</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody classNameName="table__user-body">
              {category.map((cate) => (
                <tr key={cate.id}>
                  <td>{cate.id}</td>
                  <td>{cate.categoryname}</td>
                  <td>
                    <Link
                      className="btn-update"
                      to={`/adminEditCategory/${cate.id}`}
                    >
                      <i class="far fa-edit"></i>
                    </Link>
                    <a
                      className="btn-delete"
                      onClick={() => handleSubmit(cate.id)}
                    >
                      <i class="fas fa-trash"></i>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CategoryAdmin;
