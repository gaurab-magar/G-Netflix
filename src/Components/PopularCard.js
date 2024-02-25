import React from 'react';
import { FaFire } from "react-icons/fa";
import './Home/PopularMovies.css';


export const PopularCard = ({item}) => {
  return (
    <div className='col-md-3 mBottom padding-sm'>
        <div className='card border-0 rounded-3 overflow-hidden  position-relative'>
            <img className='w-100' src={item.image}></img>
            <div className='d-img w-100 h-25 d-flex align-items-center justify-content-between'>
                <p className=' mb-0 translate  fw-bold'>{item.name}</p>
                <FaFire className='translate text-danger' />
            </div>
        </div>
    </div>
  )
}
