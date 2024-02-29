import React from 'react'
import {Head} from '../Components/Head';
import { Filter } from '../Components/Filter';
import {Movies} from '../Data/MovieData';
import { Cards } from '../Components/Cards';
export const MoviesPage = () => {
  return (
    <main className='container-fluid bg-black text-white'>
      <Head />
      <Filter />
      <section className='container-fluid py-4'>
          <div className='title'>
            <h3 className='fw-bold'>Title: {Movies.length}</h3>
          </div>
          <div className='row'>
            <div className='col-md-9'>
              <div className='border d-flex align-items-center justify-content-evenly flex-wrap  p-0'>
                {Movies.map((detail)=>(
                  <Cards  key={Math.random()} data={detail} />
                ))}
              </div>
            </div>
            <div className='col-md-3 border'>

            </div>
          </div>
      </section>

    </main>
  )
}
