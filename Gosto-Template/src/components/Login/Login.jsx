import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
        <div id="header1">
            <div className="header__img">
                <img src="https://cpad.ask.fm/752/629/438/-79996973-20634hj-k9n9q6a644n4go5/large/nkfGXRnLzS.png" alt=""/>
            </div>
        </div>
        <div className="showcase">
            
                {/* <div className="logo">
                    <img src="/static/image/netflix.png"/>
                </div> */}

                <div className="showcase-content">
                    <div className="formm">
                        <div>
                            <h1>Sign In</h1>
                            <div className="info">
                                <div className="info__Input">
                                    <label for="Username" >User </label>
                                    <input className="input__login"  id="Username" type="text" /> 
                                </div>
                                <div className="info__Input">
                                    <label for="password" >Mật khẩu</label>
                                    <input id="password" className= "input__login" type="password" />
                                    <div className="password__Error Error">
                                        <p>Mật khẩu của bạn phải chứa từ 4 đến 60 ký tự.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="btn">
                                <button className="btn-primary" type="submit" onclick="login()">Sign In</button>
                            </div>
                            <div className="help">
                                <div>
                                    <input value="true" type="checkbox"/><label>Remember me</label>
                                </div>

                                <a href="https://www.netflix.com/dz-en/LoginHelp" className='help_link'>Need Help ?</a>
                            
                            </div>
                        </div>
                    </div>
                    
                    <div className="signup">
                        <p>New to VTN ?</p>
                        <a href="/register">Sign up now</a>
                    </div>
                    <div className="more">
                        <p>
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#">Learn more.</a> 
                        </p>
                    </div>


                </div>
            </div>
            </>
  )
}

export default Login
