import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.css';
import navbrand from '../../Assets/navbrand.png';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";





export const Footer = () => {
  const Links = [
    {
      title:'Company',
      links:[
        {
          name:'Home',
          link:'/'
        },
        {
          name:'About Us',
          link:'/about'
        },
        {
          name:'Contact Us',
          link:'/contact'
        },
        {
          name:'Movies',
          link:'/movie'
        },
      ]
    },
    {
      title:'Top Categories',
      links:[
        {
          name:'Action',
          link:'#'
        },
        {
          name:'Romantic',
          link:'#'
        },
        {
          name:'Drama',
          link:'#'
        },
        {
          name:'Horror',
          link:'#'
        },
      ]
    },
    {
      title:'My Account',
      links:[
        {
          name:'Dashboard',
          link:'/dashboard'
        },
        {
          name:'MyFavourite',
          link:'/favourite'
        },
        {
          name:'Profile',
          link:'/profile'
        },
        {
          name:'Change Password',
          link:'/change-password'
        },
      ]
    }
  ]
  return (
    <footer className='bg-dark text-light py-4'>
      <div className='container'>
        <div className="row">
          {Links.map((data,index)=>(
            <div key={index} className='col-md-3  d-flex flex-column text-center'>
              <h5>{data.title}</h5>
              <ul className='list-unstyled mt-3 d-flex  flex-column'>
                {data.links.map((link,index) => (
                    <li key={index}><Link to={link.link} className=" text-decoration-none text-light">{link.name}</Link></li>
                  ))}
              </ul>
            </div>
          ))}
          <div className='col-md-3 p-3 p-sm-4'>
              <Link to='/'>
                <img className='img-fluid img-dudge' src={navbrand} alt='footerImg'></img>
              </Link>
              <div className='d-flex  justify-content-evenly'>
                <FaFacebookSquare id='icon' style={{fontSize:'1.7rem'}}/>
                <FaInstagram id='icon'  style={{fontSize:'1.7rem'}} />
                <FaYoutube id='icon' style={{fontSize:'1.7rem'}} />
                <MdEmail id='icon' style={{fontSize:'1.7rem'}} />
                <FaPhoneSquareAlt id='icon' style={{fontSize:'1.7rem'}} />
              </div>
          </div>
        </div>
      </div>
      <div className="container text-center">
        <hr />
        <p>&copy; 2019 Company, Inc.</p>
        <ul className="list-inline">
          <li className="list-inline-item"><Link className="text-decoration-none text-light" to="/">Privacy</Link></li>
          <li className="list-inline-item"><Link className="text-decoration-none text-light" t0="/">Terms</Link></li>
          <li className="list-inline-item"><Link className="text-decoration-none text-light" to="/">Support</Link></li>
        </ul>
      </div>
    </footer>
  )
}
