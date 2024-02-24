import React from 'react';
import navbrand from '../../Assets/navbrand.png';
import './Header.css';
import {Link , NavLink} from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { FaHeart, FaUserCircle } from "react-icons/fa";



export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container d-flex align-items-center justify-content-between">
          <Link to="/" className='w-14' >
            <img className='img-fluid' src={navbrand} alt='navbrand'></img>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <form className="d-flex">
              <div className="input-group">
                <input className="form-control px-4 round-s" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-danger px-4 round-e " type="submit">
                <GoSearch style={{ color:'whitesmoke' }} />
                </button>
              </div>
            </form>
          
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex justify-content-between gap-3 me-3">
              <li className="nav-item">
                <NavLink className="nav-link"  to="/movie">Movies</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">About Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/Login">
                  <FaUserCircle style={{ fontSize: '1.7em' }} />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link position-relative" to="/favourite">
                  <FaHeart style={{ fontSize: '1.5em'}} />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    99+
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
      </div>
    </nav>
  )
}



