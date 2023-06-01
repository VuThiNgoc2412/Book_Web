import React from "react";
import "./booking.css";

const Booking = () => {
  return (
    <>
      <div id="header1">
        <div class="header__img">
          <img
            src="https://cpad.ask.fm/752/629/438/-79996973-20634hj-k9n9q6a644n4go5/large/nkfGXRnLzS.png"
            alt=""
          />
        </div>
      </div>
      <div class="book">
        <div class="book-content">
          <div class="formm">
            <div>
              <h1>Information</h1>
              <div class="info">
                <div class="info__Input">
                  <label for="number">Số điện thoại </label>
                  <input
                    class="form__input"
                    onkeyup="signupByEnter()"
                    id="Username"
                    type="text"
                  />
                </div>
                <div class="info__Input">
                  <label for="fullName">Full Name</label>
                  <input
                    id="fullName"
                    onkeyup="signupByEnter()"
                    class="form__input"
                    type="text"
                  />
                </div>
                <div class="info__Input">
                  <label for="fullName">Số lượng</label>
                  <input
                    id="fullName"
                    onkeyup="signupByEnter()"
                    class="form__input"
                    type="text"
                  />
                </div>
              </div>
              <div className="booking__total">
                <div class="booking__product">
                  <h4>$300 x 1 person</h4>
                  <span>$300</span>
                </div>
                <div class="booking__product">
                  <h4>Service charge</h4>
                  <span>$10</span>
                </div>
                <div class="booking__product">
                  <h4>Total</h4>
                  <span>$310</span>
                </div>
              </div>

              <div class="btn">
                <button class="btn-primary" type="submit" onclick="signup()">
                  Book now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
