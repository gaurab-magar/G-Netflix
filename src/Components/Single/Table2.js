import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Rows = (data,i,users,OnEditFunction)=>{
  return(
    <tr key={i} className='align-middle'>
        {
            users ? 
              (<>
                <th className='ps-4'>
                    <div className='img-thumbnail' style={{ width: '70px' }} >
                    <img src={data.image?data.image:'https://lh3.googleusercontent.com/ogw/AF2bZyhWA9KEr5tedrNl4Sf9X9asbfKWxz7XlhughLj-ew=s64-c-mo'} alt={data.name} className='img-fluid'></img>
                    </div>
                </th>
                <th className='fw-lighter text-uppercase'>{data._id}</th>
                <th className='fw-lighter'>{data.createAt ? data.createAt : '12,Jan 2023'}</th>
                <th className='fw-lighter'>{data.FullName}</th>
                <th className='fw-lighter'>{data.email? data.email:'example.@gmail.com'}</th>
                <th className='text-end pe-4'>
                    <button className='btn btn-outline-danger'>
                        <MdDelete />
                    </button>
                </th>
              </>)
              :(
              <>
                <th className='fw-lighter text-uppercase'>{data._id}</th>
                <th className='fw-lighter'>{data.createAt ? data.createAt : '12,Jan 2023'}</th>
                <th className='fw-lighter'>{data.FullName}</th>
                <th className='fw-lighter'>{data.email? data.email:'example.@gmail.com'}</th>
                <th className='text-end pe-4'>
                    <button onClick={()=>OnEditFunction(data)} className='btn btn-outline-light me-2'>
                        <FaRegEdit />
                        Edit
                    </button>
                    <button className='btn btn-outline-danger'>
                        <MdDelete />
                    </button>
                </th>
              </>)
        } 
    </tr>
  )
}
export const Table2 = ({data,users,OnEditFunction}) => {    
  return (
    <div className='my-3'>
      <table className='table table-dark'>
        <thead>
          <tr>
            {
                users ? (
                    <>
                        <th scope='col' className='ps-4 py-3'>Image</th>
                        <th scope='col' className='py-3'>Id</th>
                        <th scope='col' className='py-3'>Date</th>
                        <th scope='col' className='py-3'>Full Name</th>
                        <th scope='col' className='py-3'>Email</th>
                    </>
                )
                : (
                    <>
                        <th scope='col' className='py-3'>Id</th>
                        <th scope='col' className='py-3'>Date</th>
                        <th scope='col' className='py-3'>FullName</th>
                        <th scope='col' className='py-3'>Email</th>
                    </>
                )
            }
                        <th scope='col' className='py-3 text-end pe-4'>Action</th>
          </tr>
        </thead>
        <tbody>
                {data.map((data,i)=> Rows(data,i,users,OnEditFunction))}
        </tbody>
      </table>
    </div>
  )
}
