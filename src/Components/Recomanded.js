import React from 'react'

export const Recomanded = ({data}) => {
  return (
    <div className='card overflow-hidden p-0 bg-dark'>
    <div className='row'>
        <div className='col-md-3 p-0' style={{maxWidth:'70px',height:'5rem'}}>
            <div className='img-container w-100 overflow-hidden'>
            <img alt='recomend' className='img-fluid' src={data.image}></img>
            </div>
        </div>
        <div className='col-md-8 d-flex flex-column align-items-start justify-content-center'>
            <div className='d-flex gap-2 text-secondary'>
                <p className='f-2 mb-0'>{data.Year}</p>
                <p className='f-2 mb-0 border px-2 rounded-5 '>MOVIE</p>
                <p className='f-2 mb-0'>{data.time}</p>
            </div>
            <p className='mb-0 semibold text-light' >{data.name}</p>
        </div>
        </div>
    </div>
  )
}
