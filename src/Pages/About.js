import React from 'react';
import { Head } from '../Components/Head';
import './About.css';

export const About = () => {
  return (
    <main className='bg-black' >
        <section className='container py-4'>
        <Head />
          <div className='row'>
            <h2 className='text-center text-white semibold py-4'>About Us</h2>
            <div className='row'>
              <div className='col-md-7' >
                <h3 className='text-white'>Welcome To Our G-NetFlix</h3>
                <p className="text-light">
                  At G-Netflix, we're passionate about bringing the magic of entertainment directly to you.  <strong className='text-danger'>GAURAB MAGAR</strong> understands the joy of getting lost in a great story. That's why he's created G-Netflix - your ultimate destination for streaming the latest and greatest in movies and TV shows.
                </p>
                <p className="text-light">
                  Have a question, suggestion, or just want to say hello to <strong className='text-danger'>GAURAB MAGAR</strong> ? We'd love to hear from you! Feel free to reach out to us via email, social media, or through our website.
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='card border-0'>
                      <div className='card-body text-white bg-dark'>
                        <h4 className='fw-bold'>10K</h4>
                        <p className='m-0 semibold'>Listed Movies</p>
                        <p className='m-0'>G-Netflix boasts a diverse library of 10k+ listed videos for endless entertainment options.</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='card border-0'>
                      <div className='card-body text-white bg-dark'>
                        <h4 className='fw-bold'>8K</h4>
                        <p className='m-0 semibold'>Lovely Users</p>
                        <p className='m-0'>G-Netflix offers a selection of 8k+ videos for an immersive streaming experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-5 position-relative d-flex align-items-center' >
                <img className='img-fluid rounded-2' src="https://static.fmoviesz.to/s650/7/74/53da5d2df6a34775f691f76ac96193b0.jpg" alt='aboutImg' />
                <div className='wathcEveryWhere'></div>
              </div>
            </div>
          </div>
        </section>
    </main>
  )
}
