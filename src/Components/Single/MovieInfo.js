import React from 'react';
import { MdDateRange } from "react-icons/md";
import { IoIosTime } from "react-icons/io";
import { IoShareSocial } from "react-icons/io5";
import { FaGooglePlay } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
export const MovieInfo = ({movie}) => (
    <section>
        <div className='container-fluid py-4 d-flex align-items-center justify-content-center'>
            <div className='row '>
                <div className='col-md-4 p-3 d-flex justify-content-end'>
                    <div className='img-container'>
                        <img className='img-fluid' alt={movie.name} src={movie.image}></img>
                    </div>
                </div>
                <div className='col p-3'>
                    <h3 className='text-white fw-bold'>{movie.name}</h3>
                    <div className='d-flex gap-3 text-secondary semibold'>
                        <span className='bg-danger p-1 text-white fw-bold'>
                            HD 4K
                        </span>
                        <span>
                            {movie.category}
                        </span>
                        |
                        <span>
                            <MdDateRange className='text-danger me-2' />
                            {movie.Year}
                        </span>
                        |
                        <span>
                            <IoIosTime className='text-danger me-2' />
                            {movie.time}
                        </span>
                    </div>  
                    <p className="my-3 text-light">
                        {movie.desc}
                    </p>
                    <div className='d-flex gap-3 align-items-center'>
                        <a href='/' className='text-decoration-none text-light'>
                            <IoShareSocial  className='me-2' />
                            social media
                        </a>
                        <p className='mb-0 text-light'>
                            Language:  English / {movie.language}
                        </p>
                        <p className='d-flex align-items-center mb-0 text-light'>
                            Rating:  {movie.rate}
                            <FaStar className='text-warning ms-2' />
                        </p>
                    </div>
                        <Link to={`/watch/${movie.id}`} className='btn btn-outline-danger rounded-5 px-3 my-4'>
                            <FaGooglePlay className='me-2' />
                            Watch
                        </Link>
                </div>
            </div>
        </div>
    </section>
)
