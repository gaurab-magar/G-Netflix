import React from 'react'

export const Input = ({placeholder,type,label}) => {
  return (
    <div>
        <label className='semibold form-label'>{label}</label>
        <input className='form-control' type={type} placeholder={placeholder} required />
    </div>
  )
}
