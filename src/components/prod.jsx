
import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const prod = (props) => {
  const { data } = props;

  return <>
    {
      data && data.length > 0 && data.map((item) => (
        <div key={item.id} className="col mb-5">
          <Link
            to={`/detail/${item.id}`}
            className="card h-100 m-auto">
            <img src={item.image} className="card-img-top img-fluid" alt="..." />
            <div className="card-body">
              <p className="card-text mb-2">{item.category}</p>
              <h5 className='cart_title'>{item.title} </h5>
              <ReactStars
                count={5}
                edit={false}
                value={4}
                size={24}
                activeColor="#EA9D5A"
              />
              <div className="mb-3">
                <p className="price mb-2"><span className="red">{item.price} </span>&nbsp;  <strike>{item.price * 2}$</strike></p>

              </div>
              <div className="d-flex justify-content-center">
                <button
                  className="myButton"
                >
                  Add To Cart
                </button>

              </div>
            </div>
          </Link>
        </div>
      ))
    }

  </>
}

export default prod