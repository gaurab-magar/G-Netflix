import React from 'react';
import { CiGrid2H } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { MdLocalMovies } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
import { TbCategoryFilled } from "react-icons/tb";
import { HiUsers } from "react-icons/hi2";
import { MdSystemUpdateAlt } from "react-icons/md";
import { FaHeart } from "react-icons/fa6";
import { RiExchangeBoxFill } from "react-icons/ri";

export const SideBar = ({children}) => {
    const SideLinks=[
        {
            name:'Dashborad',
            link:'/',
            icon:CiGrid2H
        },
        {
            name:'Movies List',
            link:'/MoviesPage',
            icon:MdLocalMovies
        },
        {
            name:'Add Movie',
            link:'/addmovie',
            icon:IoAddCircle
        },
        {
            name:'categories ',
            link:'/categories',
            icon:TbCategoryFilled
        },
        {
            name:'Users ',
            link:'/users',
            icon:HiUsers
        },
        {
            name:'Update Profile ',
            link:'/profile',
            icon:MdSystemUpdateAlt
        },
        {
            name:'Favourites Movies',
            link:'/favourites',
            icon:FaHeart
        },
        {
            name:'Change Password',
            link:'/password',
            icon:RiExchangeBoxFill
        },
    ]
  return (
    <div className='sidebar container-fluid'>
        <div className='row py-4'>
            <div className='col-md-3'>
                <div className='card ms-0 rounded-0 border-0 shadow-lg bg-dark'>
                    <div className='card-body d-flex flex-column gap-2'>
                        {
                            SideLinks.map((links,index)=>(
                                <Link to={links.link} key={index} className='btn btn-dark text-start'>
                                        <links.icon className='me-2 text-danger' />
                                    <span>{links.name}</span>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className='col border rounded-3 p-3 text-white  '>
                {children}
            </div>
        </div>

    </div>
  )
}
