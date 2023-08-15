import React, { useState } from 'react'
import './Login.css'
import { Link } from 'react-router-dom';
import facebook from '../../assets/icons8-facebook-48.png'
import instagram from '../../assets/icons8-instagram-48.png'
let lt="<";
const Login = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log(email, pass);
  }

  return (
    <div className='whole-login-page'>
    <div className="both-contents">
        <div className='login-content'>
        <form onSubmit={handleSubmit}>
          <div className="labelANDinput">
            <label htmlFor="email" className='label-email'>email</label>
            <input value={email}  className='input-email' type="email" placeholder='youremail@gmail.com' id='email' name='email' onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
          <div className="labelANDinput">
            <label htmlFor="password" className='label-pass'>password</label>
            <input value={pass} className='input-pass' type="password" placeholder='*******' id='password' name='password' onChange={(e) => {setPass(e.target.value)}}/>
            <p className='forgotpass'>Forgot Password?</p>
          </div>
          <div className="loginoptions">
            <button type='submit' className='submitBtn'>Log In</button>
            <p>Or sign up with:</p>
            <div className="icons-for-signup">
                <img src={facebook} alt="facebook-icon" />
                <img src={instagram} alt="instagram-icon" />
            </div>
          </div>
        </form>
      </div>  
      <div className="register-content">
        <p className='register-title'>Welcome Back!</p>
        <p className='register-description'>Welcome back! We are so happy to have you here. It's great to see you again. We hope you had a safe and enjoyable time away.</p>
        <Link to='/register'><button className='registerBtn'>No account yet? Register here.</button></Link>
      </div>
    </div>
    <Link to='/' className='goHome'>{lt}Back Home</Link>
    </div>
  )   
}

export default Login