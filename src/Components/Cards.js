import React from 'react';
import './Cards.css';
export const Cards = ({data}) => {
  return (
    <div className='card-width'>
        <div className='img-container'>
            <img className='img-fluid imgProps rounded-3' alt={data.name} src={data.image} ></img>
        </div>
        <div className='details py-2 p-0'>
            <div className='d-flex justify-content-between text-secondary'>
                <p className='f-2 mb-0'>{data.Year}</p>
                <p className='f-2 mb-0 border px-2 rounded-5 '>MOVIE</p>
                <p className='f-2 mb-0'>{data.time}</p>
            </div>
            <p>{data.name}</p>
        </div>
    </div>
  )
}
