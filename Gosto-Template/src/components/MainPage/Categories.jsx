import React from "react"
import './Home.css'

const Categories = () => {
  const data = [
    {
      cateImg: "./images/category/cat1.png",
      cateName: "Truyện tranh",
    },
    {
      cateImg: "./images/category/cat2.png",
      cateName: "Truyện, Tiểu thuyết",
    },
    {
      cateImg: "./images/category/cat3.png",
      cateName: "Văn học",
    },
    {
      cateImg: "./images/category/cat4.jpg",
      cateName: "Chính trị",
    },
    {
      cateImg: "./images/category/cat5.png",
      cateName: "Nghệ thuật",
    },
    {
      cateImg: "./images/category/cat6.png",
      cateName: "Truyện cười",
    },
    {
      cateImg: "./images/category/cat7.png",
      cateName: "Tâm lý học",
    },
    {
      cateImg: "./images/category/cat8.png",
      cateName: "Truyện kinh dị",
    },
    {
      cateImg: "./images/category/cat9.png",
      cateName: "Lịch sử học",
    },
    {
      cateImg: "./images/category/cat10.png",
      cateName: "Khoa học",
    },
    // {
    //   cateImg: "./images/category/cat11.png",
    //   cateName: "Tâm linh",
    // },
  ]

  return (
    <>
      <div className='category'>
        {data.map((value, index) => {
          return (
            <div className='box f_flex category_items' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories
