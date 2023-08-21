import React, { useContext, useState } from 'react'
import cart from '../assets/icons8-cart-64.png'
import './FeaturesCard.css'
import FeaturesContext from './FeaturesContext'
const FeaturesCard = (props) => {
  
  const {setTotal} = useContext(FeaturesContext);
  const [isAdded, setIsAdded] = useState(false);

  const handleCartAdd =() => {
    if(props.price!==0){
    setIsAdded(!isAdded);
    if(isAdded===false){
    setTotal((total) => {
      return Number(Number(total) + Number(props.price));
    })
  }
  else{
    setTotal( (total) => {
      return Number(Number(total) - Number(props.price))
    })
  }
  }
}

  return (
    <div className="main-card">
        <img src={props.image} alt="af1" className='img-card' />
        <div className="bottom-content">
        <div className="add-to-cart" onClick={handleCartAdd}>
                <div className="add-to-cart-div">
                    {isAdded ? 'Remove from cart' : 'Add to cart'}
                </div>
                <img src={cart} alt="" className='add-to-cart-icon' />
            </div>
            <div className="price">{props.price}$</div>
            <div className="description">
               {props.description}
            </div>
        </div>
    </div>
  )
}

export default FeaturesCard