import React from 'react'
import './register.css'
const Register = () => {
  return (
    <>
        <div id="header1">
        <div class="header__img">
            <img src="https://cpad.ask.fm/752/629/438/-79996973-20634hj-k9n9q6a644n4go5/large/nkfGXRnLzS.png" alt=""/>
        </div>
    </div>
    <div class="showcase">

            <div class="showcase-content">
                <div class="formm">
                    <div>
                        <h1>Sign Up</h1>
                        <div id="signup__Eror">
                            
                        </div>
                        <div class="info">
                            <div class="info__Input">
                                <label for="Username" >Email </label>
                                <input class="email" onkeyup="signupByEnter()" id="Username" type="text" /> 
                                <div class="username__Error Error">
                                    <p>Vui lòng nhập email hợp lệ.</p>
                                </div>
                            </div>
                            <div class="info__Input">
                                <label for="password" >Mật khẩu</label>
                                <input id="password" onkeyup="signupByEnter()" class="email" type="password" />
                                <div class="password__Error Error">
                                    <p>Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự.</p>
                                </div>
                            </div>
                            <div class="info__Input">
                                <label for="fullName" >Full Name</label>
                                <input id="fullName" onkeyup="signupByEnter()" class="email" type="text" />
                                <div class="fullName__Error Error">
                                  <p>Vui lòng nhập đúng định dạng Email</p>
                                </div>
                            </div>
                        </div>
                        <div class="btn">
                            <button class="btn-primary" type="submit" onclick="signup()">Sign Up</button>
                        </div>
                        <div class="help">

                            <a href="https://www.netflix.com/dz-en/signupHelp" className='help_link'>Need Help ?</a>
                        
                        </div>

                    </div>
    
                </div>
                
                <div class="signup">
                    <p>New to VTN ?</p>
                    <a href="/login">Sign In now</a>
                </div>
                <div class="more">
                    <p>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a> 
                    </p>
                </div>

            </div>
        </div>
    </>
  )
}

export default Register
