import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
const SlideCard = ({productItems}) => {
  
  const {
    id,
    BookName,
    ContentBook,
    PageNumber,
    Price,
    BookImage,
    Author,
    Category,
  } = productItems;

  return (
    <>
        <div className="box d_flex top">
          <div className="left">
            <h1>{BookName}</h1>
            <p>{ContentBook}</p>
          </div>
          <div className="right">
            <img src={BookImage} alt="" />
          </div>
        </div>
    </>
  );
};

export default SlideCard;
