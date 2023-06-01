import React from "react";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import "./bookdetail.css";
import Booking from "../Booking/Booking";

const BookDetail = () => {
  return (
    <>
      <section>
        <Container>
          <Row className="row__detail">
            <Col lg="8">
              <div className="tour__content">
                <div className="book__and__img">
                  <img
                    src="https://img.websosanh.vn/v10/users/review/images/vv83q1l8emhcm/bia-sach-thieu-nhi-the-hien-dieu-gi.jpg?compress=85"
                    alt=""
                  />
                  <Booking />
                </div>

                <div className="tour__info">
                  <h2>Tiêu đề</h2>

                  <div className="d-flex align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        className="fas fa-star"
                        style={{ color: "#faa935" }}
                      ></i>{" "}
                      {/*{avgRating === 0 ? null : avgRating} */}
                      {/* {totalRating === 0 ? (
                        "Not rated"
                    ) : (
                        <span>({reviews?.length})</span>
                    )} */}
                      5
                    </span>
                  </div>
                  <div className="tour__extra-details">
                    <span>
                      <i className="fas fa-user-edit"></i>Tác giả
                    </span>
                    <span>
                      <i className="fal fa-book-reader"></i>Thể loại
                    </span>
                    <span>
                      <i className="fal fa-calendar-alt"></i>Ngày phát hành
                    </span>
                    <span>
                      <i className="fal fa-file-alt"></i>Số trang
                    </span>
                    <span>
                      <i className="fal fa-bags-shopping"></i>Đã bán
                    </span>
                  </div>

                  <h5>Description</h5>
                  <p>Mô tả chi tiết sách</p>
                </div>

                {/* =================tour reviews sestion==================== */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews</h4>

                  <Form /* onSubmit={submitHandler}*/>
                    <div className="rating__group">
                      <span /* onClick={() => setTourRating(1)} */>
                        1 <i className="fas fa-star"></i>
                      </span>
                      <span /* onClick={() => setTourRating(2)} */>
                        2 <i className="fas fa-star"></i>
                      </span>
                      <span /* onClick={() => setTourRating(3)} */>
                        3 <i className="fas fa-star"></i>
                      </span>
                      <span /* onClick={() => setTourRating(4)} */>
                        4 <i className="fas fa-star"></i>
                      </span>
                      <span /* onClick={() => setTourRating(5)} */>
                        5 <i className="fas fa-star"></i>
                      </span>
                    </div>
                    <div className="review__input">
                      <input
                        type="text"
                        placeholder="share your thoughts"
                        required
                      />
                      <button className="primary__btn" type="submit">
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user__reviews">
                    {/* {
                    tourData.reviews?.map(review =>( */}
                    <div className="review__item">
                      <img
                        src="https://cdn.pixabay.com/photo/2013/07/12/15/52/chat-150496_960_720.png"
                        alt=""
                      />

                      <div className="w-100">
                        <div className="review__item-user">
                          <div>
                            <h5>jisoo</h5>
                            <p>
                              Ngày bình luận
                              {/*{new Date("01-18-2023").toLocaleDateString("en-US", options)}  */}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            5 <i className="fas fa-star"></i>
                          </span>
                        </div>
                        <h6>Amazing tour</h6>
                      </div>
                    </div>
                    {/* ))
                  } */}
                  </ListGroup>
                </div>
                {/* =================tour reviews sestion==================== */}
              </div>
            </Col>

            <Col lg="4">
              {/* <Booking tourData={tourData} avgRating={avgRating} /> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default BookDetail;
