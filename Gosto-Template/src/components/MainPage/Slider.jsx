import React from "react";
import Slider from "react-slick";
import SlideCard from "./SlideCard";
import { useState, useEffect } from "react";
import axios from "axios";

const SliderHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Admin/allbook")
      .then((response) => {
        // Lưu dữ liệu trả về vào state
        setBookData(response.data);
        console.log(bookData);
      })
      .catch((error) => {});
  }, []);
  return (
    <>
      <section className="homeSlide contentWidth">
        <div className="container">
        <Slider {...settings}>
          {bookData.map((productItems) => (
            <SlideCard productItems={productItems} />

          ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default SliderHome;
