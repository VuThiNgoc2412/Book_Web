import React from 'react'
import './navbaradmin.css'

const NavbarAdmin = () => {
    const data = [
        {
          cateImg: "./images/category/cat1.png",
          cateName: "Home",
        },
        {
          cateImg: "./images/category/cat2.png",
          cateName: "Category",
        },
        {
          cateImg: "./images/category/cat3.png",
          cateName: "Book",
        },
        
      ]
    
      return (
        <>
          <div className='category category__admin_2'>
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

export default NavbarAdmin
