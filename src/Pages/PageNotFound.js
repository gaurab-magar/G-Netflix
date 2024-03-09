import React from 'react';
import { MdOutlineErrorOutline } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
export const PageNotFound = () => {
  return (
    <main className='bg-black d-flex align-items-center justify-content-center flex-column'>
      <h2 className='fw-bold text-white'>
        <MdOutlineErrorOutline className='text-danger me-2' />
        Page Not Found
      </h2>
      <Link to='/' className='btn btn-danger my-3 px-4 rounded-3 semibold'>
        <IoHome className='me-2 fs-4' />
        Back To Home
      </Link>
    </main>
  )
}
