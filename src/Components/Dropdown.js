import React, { useState } from 'react';
import { MdOutlineArrowDropDown } from "react-icons/md";
import { MdOutlineArrowDropUp } from "react-icons/md";

export const Dropdown = ({ item,index }) => {
    const [isActive, setIsActive]=useState(false);
    const toggleDropdown = () => {
        setIsActive(!isActive);
    }
  return (
    <div className='col-md-3 mt-4 position-relative'>
        <div className='wrap'>
            <button key={index} className='btn btn-dark px-4 position-relative w-100' onClick={toggleDropdown}>
                {isActive ? (
                    <span className='d-flex align-items-center justify-content-between'>
                    {item.value.title}
                    <MdOutlineArrowDropUp />
                </span>
                ):(
                    <span className='d-flex align-items-center justify-content-between'>
                    {item.value.title}
                    <MdOutlineArrowDropDown />
                </span>
                )}
                
            </button>
            {isActive && 
            <ul className='list-unstyled rounded-3 text-black bg-light dropdown-position w-100 customBorder'>
                {item.items.map((options,index)=>(
                    <li key={index} className='py-1'>
                        <button
                            className='dropdown-item text-center btn btn-outline-dark'
                            onClick={() => item.onchange(options)}
                        >
                            {options.title}
                        </button>
                    </li>
                ))}
            </ul>
            }
        </div>
    </div>
  )
}
