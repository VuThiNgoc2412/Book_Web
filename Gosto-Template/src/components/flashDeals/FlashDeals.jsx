import React, { useState, useEffect } from "react";
import FlashCard from "./FlashCard";
import "./style.css";
import axios from 'axios';


const FlashDeals = ({ productItems, addToCart }) => {
  const [bookData, setBookData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/Admin/allbook")
      .then((response) => {
        // Lưu dữ liệu trả về vào state
        setBookData(response.data);
      })
      .catch((error) => {});
  }, []);
  console.log(bookData)
  return (
    <>
      <section className="flash">
        <div className="container">
          <div className="heading f_flex">
            <i className="fa fa-bolt"></i>
            <h1 className="flash__head">Flash Delas</h1>
          </div>
          {bookData.map((productItems) => (
            <FlashCard productItems={productItems} addToCart={addToCart} />
          ))}
        </div>
      </section>
    </>
  );
};

export default FlashDeals;
