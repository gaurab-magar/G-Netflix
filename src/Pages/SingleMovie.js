import React from 'react'
import { useParams } from 'react-router-dom';
import { CardData } from '../Data/CardData';
import { MovieInfo } from '../Components/Single/MovieInfo';

export const SingleMovie = () => {
  const {id} = useParams();
  const movie = CardData.find((item)=>item.name === id)
  return (
    <section className='bg-black'>
      <MovieInfo movie={movie} />
    </section>
  )
}
