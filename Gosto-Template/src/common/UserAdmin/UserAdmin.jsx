import React from "react";
import "./useradmin.css";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";

const UserAdmin = () => {
  return (
    <>
      {/* <HeaderAdmin /> */}
      <div className="container">
        <div className="row">
          <h1>List User</h1>
        </div>
        <table className="table__user">
          <thead className="table__user-head">
            <tr>
              <th>Tên</th>
              <th>Email</th>
              <th>Ngày sinh</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody classNameName="table__user-body">
            <tr>
              <td>Tên</td>
              <td>Email</td>
              <td>Ngày sinh</td>
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
    </>
  );
};

export default UserAdmin;
