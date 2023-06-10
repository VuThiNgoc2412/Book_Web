import React from "react";
import "./useradmin.css";
import HeaderAdmin from "../HeaderAdmin/HeaderAdmin";

const UserAdmin = ( { information }) => {
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
              <th>ID</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody classNameName="table__user-body">
            {information.map((info) => (
              <tr key={info.id}>
              <td>{info.id}</td>
              <td>{info.username}</td>
              <td>{info.email}</td>
              <td>
                <a className="btn-update">
                  <i class="far fa-edit"></i>
                </a>
                <a className="btn-delete">
                  <i class="fas fa-trash"></i>
                </a>
              </td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserAdmin;
