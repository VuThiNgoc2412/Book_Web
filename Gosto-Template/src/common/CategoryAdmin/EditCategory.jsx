import React, { useState } from "react";
import "./editcategory.css";
import axios from "axios";
import { useHistory } from "react-router-dom";
const EditCategory = () => {
  const navigate = useHistory();
  const [value, setValue] = useState({
    category: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .patch("http://127.0.0.1:8000/Admin/editcategory/"+window.location.pathname.substring(19), value)
      .then((res) => {
        navigate.push(`/adminCategory`);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div id="container">
        <div class="container__body">
          <div class="container__body__content">
            <div class="body__content__header">
              <div class="content__header__title">
                <h1>EditCategory</h1>
              </div>
            </div>
            <form onSubmit={handleSubmit} class="body__content__Category">
              <div class="Category__infor" id="categoryEdit__inFor">
                <label for="CategoryName">CategoryName</label>
                <input
                  onChange={(e) =>
                    setValue({ ...value, category: e.target.value })
                  }
                  type="text"
                  id="CategoryName"
                />
              </div>
              <div class="Save__Change">
                <button id="save__button">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditCategory;
