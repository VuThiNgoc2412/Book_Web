import React from "react"
import "./style.css"
import axios from "axios"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const Cart = ({ CartItem, addToCart, decreaseQty }) => {
  // Stpe: 7   calucate total of items
  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.Price, 0)

  // prodcut qty total
  const navigate = useHistory()
  const handleBuy = () => {
    var tokenn = localStorage.getItem("token");
    axios
      .post(
        "http://127.0.0.1:8000/Admin/boughtbook",CartItem,
        {
          headers: {
            Authorization: "Bearer " + tokenn,
          },
        }
      )
      .then((response) => {
        alert('Do you want to buy them?')
        navigate.push(`/account`)
      })
      .catch((error) => {});
  };
  return (
    <>
      <section className='cart-items'>
        <div className='container d_flex'>
          {/* if hamro cart ma kunai pani item xaina bhane no diplay */}

          <div className='cart-details'>
            {CartItem.length === 0 && <h1 className='no-items product'>No Items are add in Cart</h1>}

            {/* yasma hami le cart item lai display garaaxa */}
            {CartItem.map((item) => {
              const productQty = item.price * item.qty

              return (
                <div className='cart-list product d_flex' key={item.id}>
                  <div className='img'>
                    <img src={item.BookImage} alt='' />
                  </div>
                  <div className='cart-details'>
                    <h3>{item.BookName}</h3>
                    <h4>
                      ${item.Price}.00 * {item.qty}
                      <span>${item.qty * item.Price}.00</span>
                    </h4>
                  </div>
                  <div className='cart-items-function'>
                    <div className='removeCart'>
                      <button className='removeCart'>
                        <i className='fa-solid fa-xmark'></i>
                      </button>
                    </div>
                    {/* stpe: 5 
                    product ko qty lai inc ra des garne
                    */}
                    <div className='cartControl d_flex'>
                      <button className='incCart' onClick={() => addToCart(item)}>
                        <i className='fa-solid fa-plus'></i>
                      </button>
                      <button className='desCart' onClick={() => decreaseQty(item)}>
                        <i className='fa-solid fa-minus'></i>
                      </button>
                    </div>
                  </div>

                  <div className='cart-item-price'></div>
                </div>
              )
            })}
          </div>

          <div className='cart-total product'>
            <h2>Cart Summary</h2>
            <div className=' d_flex'>
              <h4>Total Price :</h4>
              <h3>${totalPrice}.00</h3>
            </div>
            <button onClick = {() => handleBuy()} className="secondary__btn">Buy</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart
