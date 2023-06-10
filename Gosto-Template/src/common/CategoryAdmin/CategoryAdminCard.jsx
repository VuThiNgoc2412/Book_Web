import React, { useState } from "react";
import "./categoryadmincard.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const CategoryAdminCard = ({ category }) => {
  const navigate = useHistory()
  const handleSubmit = (id) => {
    axios.delete('http://127.0.0.1:8000/Admin/deletecategory/'+id)
    .then((response) => {
      navigate.push(`/adminCategory`)
    })
    .catch((err) => {
      console.log(err)
    })
  }
  return (
    <tbody classNameName="table__user-body">
      {category.map((cate) => (
        <tr key={cate.id}>
          <td>{cate.id}</td>
          <td>{cate.categoryname}</td>
          <td>
            <Link className="btn-update" to={`/adminEditCategory/${cate.id}`}>
              <i class="far fa-edit"></i>
            </Link>
            <button onClick={() => handleSubmit(cate.id)}>
              <i class="fas fa-trash"></i>
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default CategoryAdminCard;
