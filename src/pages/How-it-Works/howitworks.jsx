import React from 'react'
import Navbar from '../../components/Navbar'
import './howitworks.css'
import { Link } from 'react-router-dom'

const Howitworks = () => {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <div className="main-content-hiw animate__animated animate__zoomIn">
        <div className="paras first-para">
          <div className="title">WHAT CAN YOU DO HERE?</div>
          <div className="first-para-content">
          You can search your favorite teams and find out everything that you need to know about them in order to be the best fan!
          We offer you informations about their next matches, their previous results, the current team and its players and staff,
          and, newly, we offer you <strong>EXCLUSIVE deals for ticket prices!</strong><br></br>
          <Link className='para-link' to='/features'>Get me there</Link>
          </div>
          <span className='top'></span>
          <span className='right'></span>
          <span className='bottom'></span>
          <span className='left'></span>
        </div>

        <div className="paras second-para">
          <div className="title">GET EXCLUSIVE DEALS AND CREATE YOUR OWN ACCOUNT:</div>
          <div className="second-para-content">
          Create an account or log in to an existing one and check out everything we have prepared for you! As well as notifying you about your favorite club/s,
          we offer you exclusive deals, such as tickets to watch them live, or deals to buy the club's merch!<br></br>
          <Link className='para-link' to='/login'>Sign up</Link>
          </div>
        </div>

        <div className="paras third-para">
          <div className="title">HOW DOES OUR APP WORK?</div>
          <div className="third-para-content">
          We interact with the api-football API, provided by rapidapi.com, which can be found here:<br></br> <a className='para-link' href='https://rapidapi.com/api-sports/api/api-football' rel='noreferrer' target="_blank" >https://rapidapi.com/api-sports/api/api-football</a> 
          </div>
        </div>

      </div>
    </div>
  )
}

export default Howitworks