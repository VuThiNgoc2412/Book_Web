import React from "react"
import logo from "../../components/assets/images/logo.svg"
import { Link } from "react-router-dom"
import './search.css'

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex search_container'>
          <div className='logo width '>
            <img src='https://lh3.googleusercontent.com/-7bsVBKC6hD0/WsHE7yTRpDI/AAAAAAAABI0/slNNA7VmfEQeCh-0E61pw7xmBTovSZHBQCHMYCw/h136/1-mau_slide_powerpoint_dep_ctu.vn_(29).gif' alt='' />
          </div>

          <div className='search-box f_flex'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Tìm kiếm sách...' />
            <span>Thể loại</span>
          </div>

          <div className='icon f_flex width'>
            <i className='fa fa-user icon-circle'></i>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
