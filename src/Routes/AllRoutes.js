import React from 'react';
import {Home,About, PageNotFound,MoviesPage, Contact, Login, SingleMovie, WatchPage, Register} from '../Pages/index.js';
import {Routes , Route} from "react-router-dom";
import { Profile } from '../Pages/Admin/Profile.js';
import {Password} from '../Pages/Admin/Password.js';
import {FavouritesMovies} from '../Pages/Admin/FavouritesMovies.js';
import { MovieList } from '../Pages/Admin/MovieList.js';
import { Dashboard } from '../Pages/Admin/Dashboard.js';
import { Categories } from '../Pages/Admin/Categories.js';
import { Users } from '../Pages/Admin/Users.js';
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
        <Route path='/register' element={<Register />} />
        <Route path='/Password' element={<Password />} />
        <Route path='/profile' element={<Profile />} />
        <Route path="/favourites" element={<FavouritesMovies />} />
        <Route path="/movielist" element={<MovieList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
        <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}
