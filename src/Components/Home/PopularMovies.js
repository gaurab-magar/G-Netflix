import React from 'react';
import { FaFire } from "react-icons/fa";
import { Movies } from '../../Data/MovieData';
import { PopularCard } from '../PopularCard';
import './PopularMovies.css';

export const PopularMovies = () => {
  return (
    <section>
      <div className='container py-3'>
        <h2 className='text-center'>
          <FaFire style={{marginRight:'.7rem'}} />
            Popular Movies
          <FaFire style={{marginLeft:'.7rem'}} />
        </h2>
        <div className='scrollable-row py-4 scrollbar-color'>
          <div className='scrollable-container'>
              {Movies.map((item,index)=>(
                <PopularCard key={index} item={item} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
