import React from 'react';
import './Promos.css';

export const Promos = () => {
  return (
    <section>
      <div className='container py-4'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-md-6'>
            <h1 className='fw-bold'>Download your shows to watch offline</h1>
            <p className='semibold'>Save your favorites easily and always have something to watch.</p>
          </div>
          <div className='col-md-6'>
            <div className='img-container text-center'>
              <img className='img-fluid' src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg' alt='oflineWatch'></img>
            </div>
          </div>
        </div>
      </div>
      <div className='container py-4'>
        <div className='row d-flex align-items-center justify-content-center'>
          <div className='col-md-6'>
            <div className='img-container position-relative'>
              <img className='img-fluid rounded-3' src='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/977c10ed-d50a-48ac-adac-ef4cfdb56e09/RO-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='everywhere'></img>
              <div className='wathcEveryWhere' ></div>
            </div>
          </div>
          <div className='col-md-6 mt-3'>
            <h1 className='fw-bold'>Watch everywhere</h1>
            <p className='fw-bold'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
