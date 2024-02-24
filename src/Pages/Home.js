import React from 'react'
import { Banner } from '../Components/Home/Banner'
import { TopRated } from '../Components/Home/TopRated'
import { PopularMovies } from '../Components/Home/PopularMovies'
import { Promos } from '../Components/Home/Promos'

export const Home = () => {
  return (
    <main className='bg-dark'>
      <section className='container-fluid px-0 py-4 bg-dark text-light'>
        <Banner />
        <PopularMovies />
        <Promos />
        <TopRated />
      </section>
    </main>
  )
}
