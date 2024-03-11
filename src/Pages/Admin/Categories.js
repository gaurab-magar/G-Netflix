import React from 'react';
import { SideBar } from './SideBar';
import { HiPlus } from "react-icons/hi";
import { Table2 } from '../../Components/Single/Table2';
import { UserData } from '../../Data/UserData';


export const Categories = () => {
  return (
    <main className='py-4 container-fluid bg-black'>
        <SideBar>
            <div className='d-flex justify-content-between align-items-center '>
                <h2 className='text-center semibold mb-0'>Categories</h2>
                <button className='btn btn-outline-danger'>
                    <HiPlus className='me-2' />
                    Create
                </button>
            </div>
            <div>
                <Table2 data={UserData} users={true} />
            </div>
        </SideBar>
    </main>
  )
}
