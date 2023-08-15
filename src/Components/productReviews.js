import React from 'react';
import ProducttReviewCard from './prodcutReviewCard.js';
import '../styles/productReviews.css';

const ProductReviews = ({ productReviews }) => {
 

  return (
    <div className='productReviews'>
     {productReviews.map((item,index)=>(
        <ProducttReviewCard price={item.price} image={item.image} index={index} review={item.review} key={item.image} />
     )
     

     )}
      
    </div>
  );
};

export default ProductReviews;
