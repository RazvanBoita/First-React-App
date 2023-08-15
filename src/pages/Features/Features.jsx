import React, { useContext } from 'react'
import Navbar from '../../components/Navbar'
import './Features.css'
import FeaturesCard from '../../components/FeaturesCard';
import { features } from './features.js';
import './Features.css'
import Slider from "react-slick";
import FeaturesContext from '../../components/FeaturesContext';

const products = features.map( (item) => <FeaturesCard image={item.url} description={item.description} price={item.price}></FeaturesCard>  )

const Features = () => {
  const {total} = useContext(FeaturesContext);
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="layout">
      <Navbar></Navbar> 
      <div className="carousel">
        <Slider className='carousel' {...settings}>
          {products}
        </Slider>
      </div>
      <div className="total-price">
        <div className="title-totalprice">TOTAL PRICE IS: </div>
        <div className="effective-price animate__animated animate__shakeX ">{total}$</div>
      </div>
    </div>
  )
}

export default Features