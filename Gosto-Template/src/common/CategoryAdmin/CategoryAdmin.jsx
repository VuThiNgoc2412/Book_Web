import React from "react";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import "./categoryadmin.css";

const CategoryAdmin = () => {
  return (
    <>
      <div class="body__content__header">
        <div class="content__header__title">
          <h1>Category</h1>
        </div>
        <div class="content__header__AddCategory">
          <div class="Addcategory">
            <a href="/Admin/AddCategory">
              {" "}
              <p>Add Category</p>{" "}
            </a>
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
              <tr>
                <td>Tên</td>
                <td>Thể loại</td>
                <td>
                  <a className="btn-update">
                    <i class="far fa-edit"></i>
                  </a>
                  <a className="btn-delete">
                    <i class="fas fa-trash"></i>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default CategoryAdmin;
