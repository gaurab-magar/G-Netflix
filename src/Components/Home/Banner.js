import React from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import './Banner.css';
import {Movies} from '../../Data/MovieData';
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
                                <div className='overlay'></div>
                            </SwiperSlide> 
                        ))}
                    </div>
            </Swiper>
        </div>
    </section>
  )
}
