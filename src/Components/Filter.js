import React, { useState } from 'react'
import { CategoriesData } from '../Data/CategoriesData';
import { IoFilterOutline } from "react-icons/io5";


import './Filter.css';
import { Dropdown } from './Dropdown';

export const Filter = () => {
    const YearData = [
        {title:"1700 - 1800"},
        {title:"1800 - 1900"},
        {title:"1900 - 2000"},
        {title:"2000 - 2100"},
        {title:"2100- 2200"},
        {title:"2200 - 2300"},
    ]
    const TimeData = [
        {title: "1 - 2 Hours"},
        {title: "2 - 5 Hours"},
        {title: "5 - 10 Hours"},
        {title: "10 - 20 Hours"},
    ]
    const RatesData = [
        {title: "1 Star"},
        {title: "2 Stars"},
        {title: "3 Stars"},
        {title: "4 Stars"},
        {title: "5 Stars"},
    ]
    const [category , setCategory] = useState({title:'Category'});
    const [year,setYear] = useState({ title: 'Sort By Years' });
    const [times,setTimes] = useState({ title: 'Sort By Hours' });
    const [rates,setRates] = useState({ title: 'Sort By Rates' });

    const Filter = [
        {
            value: category,
            onchange: setCategory,
            items: CategoriesData
        },
        {
            value: year,
            onchange: setYear,
            items:  YearData
        },
        {
            value: times,
            onchange: setTimes,
            items:  TimeData
        },
        {
            value: rates,
            onchange: setRates,
            items:  RatesData
        }
    ]
   
  return (
    <section className='mt-4 py-4 container'>
        <h2 className='semibold d-flex align-items-center justify-content-center gap-2'>
            <IoFilterOutline className='text-danger' />
            Filter
        </h2>
        <div className='row'>
            <div className='d-flex justify-content-evenly align-items-center mt-4 gap-4' >
                {Filter.map((item,index)=>(
                    <Dropdown key={index} item={item} />
                ))}
            </div>
        </div>
    </section>
  )
}