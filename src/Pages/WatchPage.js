import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { CardData } from '../Data/CardData'
import { IoIosArrowBack } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { FaCloudArrowDown } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import movieVideo from '../Assets/movie.mp4';

export const WatchPage = () => {
  let {id} = useParams();
  console.log(id)
  
  const movie = CardData.find(movie => movie.name === id);
  const [play, setPlay] = useState(false);
  return (
    <main className='bg-black'> 
      <div className="container-fluid py-4 bg-black">
        <div className='d-flex  justify-content-between'>
          <Link to={`/movie/${movie.name}`} className='text-decoration-none' >
            <div className='first-class d-flex align-items-center'>
              <IoIosArrowBack className='me-2 text-white' />
              <h4 className='text-white mb-0 '>Back</h4>
            </div>
          </Link>
          <div className='last-class d-flex align-items-center'>
            <FaHeart className='p-2 text-danger border rounded-2 me-2 fs-2' />
            <button className='btn btn-danger semibold text-white px-4 '>
              <FaCloudArrowDown className='me-2' />
              Download
            </button>
          </div>
        </div>
        
        <section className='container py-4'>
          <div className='row justify-content-center'>
            <div className='col-md-8'>
              <div className=''>
                {play ? (
                      <div className='container video-container'>
                          <video controls autoPlay={play} className='video'>
                              <source src={movieVideo} type='video/mp4' title={movie.name} />
                          </video>
                      </div>
                  ) : (
                      <div className='video-size border rounded-3' style={{background:`url(${movie.image})`,backgroundSize:'cover',backgroundPosition:'center',backgroundRepeat:'no-repeat'}}>
                          <div className='' onClick={() => { setPlay(true) }}>
                              <IoPlayCircleOutline className='play-button text-white pointer display-4' />
                          </div>
                      </div>
                  )}
              </div>
            </div>
          </div>
        </section>
        
      </div>
    </main>
  )
}
