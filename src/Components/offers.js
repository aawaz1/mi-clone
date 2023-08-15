import React from 'react'
import Offer from '../Components/offer.js'
import '../styles/offers.css'

const offers = ({offer}) => {
  return (
   <div className='offersSection'>
    {offer.map((item,index)=>(
        <Offer key={index} index={index} src={item.image} link={item.url} />
        ))}
   </div>
  )
}

export default offers