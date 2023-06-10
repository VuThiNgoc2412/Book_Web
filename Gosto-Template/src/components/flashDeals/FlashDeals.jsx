import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import "./style.css";
import axios from "axios";
import Slider from "react-slick";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-alt-right"></i>
      </button>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-alt-left"></i>
      </button>
    </div>
  );
};
const FlashDeals = ({ productItems, addToCart }) => {
  const [bookData, setBookData] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Admin/allbook")
      .then((response) => {
        // Lưu dữ liệu trả về vào state
        setBookData(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <>
      <section className="flash">
        <div className="search-box f_flex search__book">
          <i className="fa fa-search"></i>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Tìm kiếm sách..."
          />
          <span>Tên sách</span>
        </div>
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1 className="flash__head">Flash Delas</h1>
          </div>
          <Slider {...settings}>
            {bookData
              .filter((productItems) => {
                return search.toLowerCase() === ""
                  ? productItems
                  : productItems.BookName.toLowerCase().includes(search);
              })
              .map((productItems) => (
                <FlashCard productItems={productItems} addToCart={addToCart} />
              ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
