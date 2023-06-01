import React from "react";
import "./bookadmin.css";
import NavbarAdmin from "../NavbarAdmin/NavbarAdmin";
import { Link } from "react-router-dom";

const BookAdmin = () => {
  return (
    <>
      <div class="container__body">
        <div class="container__body__content">
          <div class="body__content__header">
            <div class="content__header__title">
              <h1>Book</h1>
            </div>
            <div class="content__header__AddFilm">
              <div class="Addfilm">
                <Link to="/adminAddBook">
                  {" "}
                  <p>Add Book</p>{" "}
                </Link>
              </div>
            </div>
          </div>
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
        </div>
      </div>
      <div className="category__admin">
        <NavbarAdmin className="navbar__admin" />
        {/* <HeaderAdmin /> */}
        <div className="container">
          <div className="row">
            <h1>List Book</h1>
          </div>
          <table className="table__user">
            <thead className="table__user-head">
              <tr>
                <th>Tiêu đề</th>
                <th>Tác giả</th>
                <th>Thể loại</th>
                <th>Ngày phát hành</th>
                <th>Số trang</th>
                <th>Số lượng đã bán</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody classNameName="table__user-body">
              <tr>
                <td>Thỏ và Rùa</td>
                <td>Không biết</td>
                <td>Truyện tranh</td>
                <td>20/10/2010</td>
                <td>50</td>
                <td>10</td>

                <td>
                  <Link to="/adminEditBook" className="btn-update">
                    <i class="far fa-edit"></i>
                    <></>
                  </Link>
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

export default BookAdmin;
