import React from 'react';
import { SideBar } from './SideBar';
import { FaRegListAlt } from "react-icons/fa";
import { HiViewGridAdd } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { Table } from '../../Components/Single/Table';
import { CardData } from '../../Data/CardData';


export const Dashboard = () => {
    const DashboardData = [
        {
            text:'text-primary',
            icon:FaRegListAlt,
            title:'Total Movies',
            total: 90
        },
        {
            text: 'text-warning',
            icon:HiViewGridAdd,
            title:'Total Categories',
            total: 8
        },
        {
            text: 'text-success',
            icon:FaUser,
            title: 'Total Users',
            total: 567
        }
    ]
  return (
    <main className='py-4 container-fluid bg-black'>
    <SideBar>
        <h2 className='text-center semibold mb-0'>Dashboard</h2>
        <div className='row py-4'>
            {DashboardData.map((item,i)=>(
                <div key={Math.random()} className='col-md-4'>
                    <div className='card mt-md-0 mt-2 p-3 border-0 bg-dark'>
                        <div className='d-flex align-items-center gap-3'>
                            <item.icon className={`${item.text} fs-3`} />
                            <span className='text-white'>
                                <h5 className='m-0'>{item.title}</h5>
                                <p className='m-0'>{item.total}</p>
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        <h3 className='text-center fst-italic mb-0'>Recent Movies</h3>
        <Table data={CardData.slice(0,4)} admin={true} />
    </SideBar>
</main>
  )
}
