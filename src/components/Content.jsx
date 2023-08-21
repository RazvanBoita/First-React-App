import React from 'react'
import './Content.css'
import location from '../assets/location.svg'
import forward from '../assets/forward.svg'
import image from '../assets/soccer.svg'
import instagram from '../assets/icons8-instagram-48.png'
import facebook from '../assets/icons8-facebook-48.png'

const Content = () => {
  return (
    <div className="whole-content">
        <div className="main-content">
            <p className='content1'>Know everything you need to about your</p>
            <p className='animate__animated animate__backInLeft content2'><b>Favorite Football Team</b></p>
            <p className='content3 extra-space'>LIVESCORE | FIXTURES | LINE UPS | PLAYERS | STATISTICS</p>
            <div className="input-form">
                <img src={location} alt="location" />
                <input type="text" placeholder='Search football team...' />
                <img src={forward} alt="forward" className='forward-img'/>
            </div>
            <p className='recommended extra-space'>Popular searches: FC Barcelona, Real Madrid</p>
            <div className="visitus">
              <p>Visit us on our social media: </p>
              <a href='https://www.facebook.com/profile.php?id=100009426341764' target='_blank' rel='noreferrer'><img src={facebook} alt="facebook" /></a>
              <a href='https://www.instagram.com/razvan.boita/' target='_blank' rel='noreferrer'><img src={instagram} alt="instagram" /></a>
            </div>
        </div>
        <img src={image} alt="" className='animate__animated animate__fadeInUpBig promo-image' />
    </div>
  )
}

export default Content