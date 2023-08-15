import React from 'react'
import Navbar from '../../components/Navbar'
import './Discover.css'
import DiscoverCard from './DiscoverCard'
import { discoverContent } from './discoverContent'
import donnarumma from '../../assets/donarumma.webp'
import onana from '../../assets/onana.jpg'
import diaby from '../../assets/diaby.jpg'

const Discover = () => {
  return (
    <div className="layout">
      <Navbar></Navbar>
      <div className="all-cards">

        <div className="first-card animate__animated animate__fadeInLeftBig">
          <DiscoverCard name={discoverContent[0].titleName} content={discoverContent[0].theContent} date={discoverContent[0].datePosted} image={donnarumma} link={discoverContent[0].link} ></DiscoverCard>
        </div>

        <div className="second-card animate__animated animate__fadeInUpBig">
          <DiscoverCard className='' name={discoverContent[1].titleName} content={discoverContent[1].theContent} image={onana} date={discoverContent[1].datePosted} link={discoverContent[1].link}></DiscoverCard>
        </div>

        <div className="third-card animate__animated animate__fadeInRightBig">
          <DiscoverCard name={discoverContent[2].titleName} content={discoverContent[2].theContent} image={diaby} date={discoverContent[2].datePosted} link={discoverContent[2].link}></DiscoverCard>
        </div>

      </div>

      <div className="newsletter">
            Let us send you notifications!
      </div>
    </div>
  )
}

export default Discover