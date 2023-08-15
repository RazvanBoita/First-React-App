import React from 'react'
import './DiscoverCard.css'

const DiscoverCard = (props) => {
  return (
    <>
        <div className="discover-card">
            <div className='card-title'>{props.name}</div>
            <img className='card-image' src={props.image} alt="footballer_news" />
            <div className='card-content'>{props.content}</div>
            <a className="readmore" href={props.link} target='_blank' rel='noreferrer'>read more...</a>
        </div>
        <br></br>
        <br></br>
        <div className='card-date' >Posted: {props.date}</div>
    </>
  )
}

export default DiscoverCard