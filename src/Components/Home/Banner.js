import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './Banner.css';
import {Movies} from '../../Data/MovieData';
import { FcRating } from "react-icons/fc";
import { MdOutlineDateRange } from "react-icons/md";
import { BiSolidCategory } from "react-icons/bi";
import { FaRegPlayCircle } from "react-icons/fa";

export const Banner = () => {
  return (
    <section>
        <div className='container-fluid relative py-1 px-0'>
            <Swiper 
                direction='vertical'
                slidesPerView={1}
                loop={true}
                speed={1000}
                modules={[Autoplay]}
                autoplay={{delay: 4000, disableOnInteraction:false}}
                className='w-100 p-0 swipper-h' >
                    <div className="swiper-slide">
                        {Movies.map((item,index)=>(
                            <SwiperSlide key={index} className='slide-h'>
                                <img alt={item.name} className='img-fluid' src={item.image} />
                                <div className='overlay d-flex align-items-center '>
                                    <div className='container-fluid ps-sm-0 ps-md-5'>
                                        <p>{item.description}</p>
                                        <h1 className='fs-3 fw-bold' > {item.name}</h1>
                                        <p>{item.desc}</p>
                                        <p className="border rounded-pill d-inline py-2 px-4 me-2">
                                            <BiSolidCategory style={{marginRight:'.3rem'}} />
                                            {item.category}</p>
                                        <p className="border rounded-pill d-inline py-2 px-4 me-2">
                                            <MdOutlineDateRange style={{marginRight:'.3rem'}}  />
                                            {item.Year}</p>
                                        <p className="border rounded-pill d-inline py-2 px-4 me-2">
                                            <FcRating style={{marginRight:'.3rem'}} />
                                            {item.rate}</p><br></br>
                                        <button type='button' className='btn btn-danger px-4 py-2 mt-4'>
                                            <FaRegPlayCircle style={{ fontSize:'1.3rem' ,marginRight:'.3rem'}} />
                                            Watch</button>
                                    </div>
                                </div>
                            </SwiperSlide> 
                        ))}
                    </div>
            </Swiper>
        </div>
    </section>
  )
}
