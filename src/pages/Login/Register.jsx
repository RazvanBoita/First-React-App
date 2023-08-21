import React from 'react'
import './Register.css'


const Register = () => {
  return (
    <form className='register-card'>
      <p className='register-title-extinct'>Registration FORM</p>

      <div className="both-columns">
        <div className="first-register-column">
          <div className="register-firstName">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id='firstName' name='firstName'/>
          </div>
        </div>

        <div className="second-register-column">

        </div>
      </div>

      <button className='register-submit' type='submit'>Submit</button>
    </form>
  )
}

export default Register