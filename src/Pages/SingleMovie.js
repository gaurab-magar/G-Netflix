import React from 'react'
import { useParams } from 'react-router-dom';
import { CardData } from '../Data/CardData';
import { MovieInfo } from '../Components/Single/MovieInfo';
import {Cards}  from '../Components/Cards';
export const SingleMovie = () => {
  const {id} = useParams();
  const movie = CardData.find((item)=>item.name === id)
  const RelatedMovies = CardData.filter((item)=> item.category === movie.category);
  return (
    <section className='container-fluid bg-black'>
      <MovieInfo movie={movie} />
      <div className="container py-4">
        <h2 className="text-center text-white semibold mb-5">Related Movies</h2>
        <div className="row gy-4 gx-4 justify-content-center align-items-stretch">
          {RelatedMovies.slice(0,5).map((movie,index)=>(
            <Cards data={movie} key={index}/>
          ))}
        </div>

      </div>
    </section>
  )
}
