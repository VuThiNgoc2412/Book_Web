import React, { useState } from "react";
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
import { Link } from "react-router-dom";

const FlashCard = ({ productItems, addToCart }) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
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
      {/* <Slider {...settings}> */}
        <div className="box">
          <div className="product mtop">
            <div className="img">
              {/* <span className='discount'>{productItems.discount}% Off</span> */}
              <Link to={`/books/${id}`}><img clasName="product_img" src={BookImage} alt="" /></Link>
              <div className="product-like">
                <label>{count}</label> <br />
                <i className="fa-regular fa-heart" onClick={increment}></i>
              </div>
            </div>
            <div className="product-details">
              <h3>{BookName}</h3>
              <h3>Tác giả: {Author}</h3>
              <div className="rate">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
              <div className="price">
                <h4>${Price}.00 </h4>
                {/* step : 3  
                     if hami le button ma click garryo bahne 
                    */}
                <button onClick={() => addToCart(productItems)}>
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      {/* </Slider> */}
    </>
  );
};

export default FlashCard;
