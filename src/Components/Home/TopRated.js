import React from 'react';
import { PopularCard } from '../PopularCard';
import { Movies } from '../../Data/MovieData';
import './TopRated.css';

export const TopRated = () => {
  return (
    <section>
      <div className='container py-4'>
        <h2 className='semibold text-center'>Top TopRated</h2>
        <div className='mt-3'>
          <div className='scrollable-row py-4 scrollbar-color'>
            <div className='scrollable-container'>
                {Movies.map((item,index)=>(
                  <PopularCard key={index} item={item} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* <Swiper
            className='w-100 p-0 overflow-hidden'
            direction='horizontal'
            navigation={{ nextEl, prevEl }}
            slidesPerView={3}
            spaceBetween={40}
            autoplay={true}
            speed={1000}
            loop={true}
            modules={[Navigation, Autoplay]}>
              <div className='swiper-wrap'>
            {Movies.map((item, index) => (
              <SwiperSlide key={index} className='right-swiper'>
                <div>
                  <img src={item.image} alt={item.name} className='img-fluid'></img>
                </div>
              </SwiperSlide>
            ))}
            </div>
          </Swiper> */