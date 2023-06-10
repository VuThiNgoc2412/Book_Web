import React from "react"
import './Home.css'

const Categories = () => {
  const data = [
    {
      cateImg: "https://assets.kompasiana.com/statics/crawl/556034270423bd700b8b4567.jpeg?t=o&v=770",
      cateName: "Truyện tranh",
    },
    {
      cateImg: "https://i0.wp.com/hapigo.vn/wp-content/uploads/2022/12/Optimized-tieu-thuyet-nguoc.jpg",
      cateName: "Truyện, Tiểu thuyết",
    },
    {
      cateImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlfQGckYWK7BvYEX1ThC0wxJSopEQS42-Q_7wwU9sM-xgrRgrL7A2rmLGBL-oUaPAhErg&usqp=CAU",
      cateName: "Văn học",
    },
    {
      cateImg: "https://hcma.vn/Uploads/PublicImage/2023/04/17/16/z4272069291338-669cc068a1fdd82a1ee5505af5014c76-1.jpg",
      cateName: "Chính trị",
    },
    {
      cateImg: "https://vanhocnghethuathatinh.org.vn/imagess/seoworld/111.jpg",
      cateName: "Nghệ thuật",
    },
    {
      cateImg: "https://toplist.vn/images/800px/bo-ke-bi-nan-589437.jpg",
      cateName: "Truyện cười",
    },
    {
      cateImg: "https://chuyencuanang25.com/wp-content/uploads/2023/02/Thai-Nhan-Cach-%E2%80%93-Phia-Sau-Toi-Ac-1.jpg",
      cateName: "Tâm lý học",
    },
    {
      cateImg: "https://photo-cms-ngaynay.epicdn.me/w890/Uploaded/2023/mzdaz/2021_08_03/bo-ba-tac-pham-dang-lot-top-20-sach-kinh-di-ban-chay-nhat-tren-trang-thuong-mai-dien-tu-tiki-5310.jpg",
      cateName: "Truyện kinh dị",
    },
    {
      cateImg: "https://baophuyen.vn/upload/Images/2022/thang08/14/Sach.jpg",
      cateName: "Lịch sử học",
    },
    {
      cateImg: "https://img.lovepik.com/photo/50046/8310.jpg_wh860.jpg",
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
