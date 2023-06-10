import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import './account.css'

const Account = () => {
  const [booked, setBooked] = useState([]);
  const [info, setInfo] = useState([]);
  const [click, setClick] = useState(false);
  useEffect(() => {
    var tokenn = localStorage.getItem("token");
    axios
      .get("http://127.0.0.1:8000/Admin/account", {
        headers: {
          Authorization: "Bearer " + tokenn,
        },
      })
      .then((response) => {
        setInfo(response.data);
      })
      .catch((error) => {});
  }, []);

  const { id, username, email } = info;
  useEffect(() => {
    var tokenn = localStorage.getItem("token");
    axios
      .get("http://127.0.0.1:8000/Admin/boughted", {
        headers: {
          Authorization: "Bearer " + tokenn,
        },
      })
      .then((response) => {
        setBooked(response.data);
      })
      .catch((error) => {});
  }, [click]);
  const handle = (id) => {
    if (window.confirm("Do you want to delete ?") == true) {
      var tokenn = localStorage.getItem("token");
      axios
        .delete("http://127.0.0.1:8000/Admin/huydon/" + id, {
          headers: {
            Authorization: "Bearer " + tokenn,
          },
        })
        .then((response) => {
          setClick(!click);
        })
        .catch((error) => {});
    }
  };
  return (
    <>
    <div className="account">
    <span>ID: {id}</span>
      <span>UserName: {username}</span>
      <span>Email: {email}</span>
    </div>
      <div className="category__admin">
        <div className="container">
          <div className="row">
            <h1>History</h1>
          </div>
          <table className="table__user">
            <thead className="table__user-head">
              <tr>
                <th>UserName</th>
                <th>BookName</th>
                <th>Quantity</th>
                <th>PurchasedPrice</th>
                <th>StatusBuy</th>
                <th>Action</th>
              </tr>
            </thead>

            {/* <BookAdminCard book={book} /> */}
            <tbody classNameName="table__user-body">
              {booked.map((book) => (
                <tr key={book.id}>
                  <td>{book.username}</td>
                  <td>{book.bookname}</td>
                  <td>{book.quantity}</td>
                  <td>{book.purchasedprice}</td>
                  <td>{book.statusbuy}</td>

                  <td>
                    <a className="btn-update">
                      <i class="far fa-edit"></i>
                    </a>
                    <a className="btn-delete" onClick={() => handle(book.billid)}>
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

export default Account;
