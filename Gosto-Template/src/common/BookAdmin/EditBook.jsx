import React from "react";
import "./editbook.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
const EditBook = () => {
  const [category, setCategory] = useState([]);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files.length) {
      const src = URL.createObjectURL(e.target.files[0]);
      setImageUrl(src);
    }
  };
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Admin/allcategory")
      .then((response) => {
        setCategory(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const navigate = useHistory();

  const handlesubmit = () => {
    var Bookname = document.getElementById("BookName").value;
    var Author = document.getElementById("Author").value;
    var Contentbook = document.getElementById("Contentbook").value;
    var Releasedate = document.getElementById("date").value;
    var Pagenumber = document.getElementById("page").value;
    var CategoryId = document.getElementById("Category").value;
    var Image = document.getElementById("Image");
    var Price = document.getElementById("Price").value;

    const formData = new FormData();
    formData.append("bookname", Bookname);
    formData.append("author", Author);
    formData.append("contentbook", Contentbook);
    formData.append("releasedate", Releasedate);
    formData.append("pagenumber", Pagenumber);
    formData.append("category", CategoryId);
    formData.append("bookimage", Image.files[0]);
    formData.append("price", Price);

    axios
      .patch("http://127.0.0.1:8000/Admin/update/"+window.location.pathname.substring(15), formData, {})
      .then((response) => {
        navigate.push(`/adminBook`);
        alert("oke");
      })
      .catch((error) => {});
  };
  return (
    <>
      <div class="container__body">
        <div class="container__body__content">
          <div class="body__content__header">
            <div class="content__header__title">
              <h1>Book</h1>
            </div>
          </div>
          <div class="body__content__Film">
            <div class="Film__infor">
              <div class="Film__infor__content">
                <div class="Film__input__Text">
                  <div className="addbook__flex">
                    <div class="content__Film__input">
                      <label for="FilmName">Tên sách</label>
                      <input type="text" id="BookName" />
                    </div>
                    <div class="content__Film__input">
                      <label for="FilmName">Tác giả</label>
                      <input type="text" id="Author" />
                    </div>
                  </div>
                  <div class="content__Film__input">
                    <label for="Description">Mô tả</label>
                    <textarea name="" id="Contentbook"></textarea>
                  </div>
                  <div className="addbook__flex">
                    <div class="content__Film__input">
                      <label for="FilmName">Ngày phát hành</label>
                      <input type="date" id="date" />
                    </div>
                    <div class="content__Film__input">
                      <label for="FilmName">Số trang</label>
                      <input type="number" id="page" />
                    </div>
                  </div>
                  <div class="content__Film__input">
                    <label for="Type">Category</label>
                    <select id="Category">
                      {category.map((cate) => (
                        <option value={cate.id}>{cate.categoryname}</option>
                      ))}
                    </select>
                  </div>
                  <div class="content__Film__input">
                    <label for="FilmName">Price</label>
                    <input type="number" id="Price" />
                  </div>
                </div>
                <div class="Film__input__file">
                  <div class="input__file">
                    <label for="">Image</label>
                    <div class="Change__inputFile">
                      <img src={imageUrl} alt="" />
                      <input
                        type="file"
                        class="input-file"
                        accept="image/*"
                        id="Image"
                        onChange={handleImageChange}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div class="Film__Chapter"></div>
            </div>
            <div class="Save__Change">
              <button id="save__button" onClick={() => handlesubmit()}>
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBook;
