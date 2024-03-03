import React from 'react';
import {Home,About, PageNotFound,MoviesPage, Contact, Login, SingleMovie, WatchPage} from '../Pages/index.js';
import {Routes , Route} from "react-router-dom";
import { Favourites } from '../Pages/Favourites.js';

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/movie" element={<MoviesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/watch/:id" element={<WatchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favourite" element={<Favourites />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
