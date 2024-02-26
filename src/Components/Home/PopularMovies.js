// import React from 'react';
// import { FaFire } from "react-icons/fa6";
// import { Swiper,SwiperSlide } from 'swiper/types';
// import { Autoplay } from 'swiper/modules';
// import { Movies } from '../../Data/MovieData';

// export const PopularMovies = () => {
//   return (
//     <section>
//       <div className='container py-4'>
//         <h2 className='text-center'>
//           <FaFire style={{marginRight:'.7rem'}} />
//           Popular Movies
//           <FaFire style={{marginLeft:'.7rem'}} />
//         </h2>
//         <div className='row'>
//           <Swiper
//             direction='horizontal'
//             slidesPerView={1}
//             loop={true}
//             speed={1000}
//             modules={[Autoplay]}
//             autoplay={{delay: 2000, disableOnInteraction:false}}
//             className='w-100 p-0 swipper-h'>
//                 <div className="swiper-slide">
//                   {Movies.map((item,index)=>(
//                     <SwiperSlide  key={index}>
//                       <div>
//                         <img alt={item.name} className='img-fluid' src={item.image} />
//                       </div>
//                     </SwiperSlide>
//                   ))}
//                 </div>
//             </Swiper>
//         </div>
//       </div>
//     </section>
//   )
// }
import React from 'react';
import { FaFire } from "react-icons/fa";
import { Movies } from '../../Data/MovieData';
import { PopularCard } from '../PopularCard';
import './PopularMovies.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

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



{/* <Swiper
            direction='horizontal'
            slidesPerView={1}
            loop={true}
            speed={1000}
            modules={[Autoplay]}
            autoplay={{delay: 2000, disableOnInteraction:false}}
            className='w-100 p-0'>
            {Movies.map((item,index)=>(
              <SwiperSlide key={index}>
                <div className='col-md-3'>
                  <img alt={item.name} className='img-fluid w-25' src={item.image} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}