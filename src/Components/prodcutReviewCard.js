import React from 'react'
import '../styles/prodcutReviewCard.css'

const prodcutReviewCard = ({image,review,name,price,index}) => {
    console.log("image", image)
    
  return (
    <div className='productReviewCard'>
        <img src={image} alt={`${index} review`} />
            <h5>{review}</h5>
            <span>{name}</span> 
            <b>{price}</b> 
    </div>
  )
}

export default prodcutReviewCard