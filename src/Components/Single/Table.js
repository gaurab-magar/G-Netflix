import React from 'react';
import { FaCloudDownloadAlt, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Rows = (movie,i,admin)=>{
  return(
    <tr key={i} className='align-middle'>
      <th className='ps-4'>
        <div className='img-thumbnail' style={{ width: '70px' }} >
          <img src={movie.image} alt={movie.name} className='img-fluid'></img>
        </div>
      </th>
      <th className='fw-lighter text-uppercase'>{movie.name}</th>
      <th className='fw-lighter'>{movie.category}</th>
      <th className='fw-lighter'>{movie.language}</th>
      <th className='fw-lighter'>{movie.Year}</th>
      <th className='fw-lighter'>{movie.time}</th>
      <th className='text-end pe-4'>
        {admin ? 
        <>
          <button className='btn btn-outline-light me-2'>
            <FaRegEdit />
            Edit
          </button>
          <button className='btn btn-outline-danger'>
            <MdDelete />
          </button>
        </>
        : 
        <>
          <button className='btn btn-outline-light me-2'>
            <FaCloudDownloadAlt />
          </button>
          <Link to={`/movie/${movie.name}`} className='btn btn-outline-danger'>
            <FaEye />
          </Link>
        </>
        }
      </th>
    </tr>
  )
}
export const Table = ({data,admin}) => {    
  return (
    <div className='my-3'>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col' className='ps-4 py-3'>Image</th>
            <th scope='col' className='py-3'>Name</th>
            <th scope='col' className='py-3'>Category</th>
            <th scope='col' className='py-3'>Language</th>
            <th scope='col' className='py-3'>Year</th>
            <th scope='col' className='py-3'>Hours</th>
            <th scope='col' className='py-3 text-end pe-4'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((movie,i)=> Rows(movie,i,admin))}
        </tbody>
      </table>
    </div>
  )
}
