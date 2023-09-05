/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom';
// import { PRODUCTS } from './products';
// import { PRODUCTS1 } from './products';
import ReactStars from "react-rating-stars-component";

const newarrivals = (props) => {
  const { data } = props
  return <>
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 p-3">
      {data.slice(6, 10).map((product) => (
        <>
          <div key={product.id} className="col mb-5 position-relative ">
            <Link to={`detail/${product.id}`} >
              <div className="card h-100 m-auto">
                <img src={product.image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body my-4">
                  <p className="card-text mb-2">{product.category}</p>
                  <h5 className='mb-3 cart_title '>{product.title} </h5>
                </div>
              </div>
            </Link>
            <Link to='/shop' className='card_button'>
              View Products
            </Link>
          </div>
        </>
      ))}


    </div>
  </>;
}

export default newarrivals