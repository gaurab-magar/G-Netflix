import React from 'react';
import { Table } from '../../Components/Single/Table';
import { SideBar } from './SideBar';
import { CardData } from '../../Data/CardData';

export const MovieList = () => {
  return (
    <main className='py-4 container-fluid bg-black'>
        <SideBar>
            <div className='d-flex justify-content-between align-items-center '>
                <h2 className='text-center semibold mb-0'>Movies List</h2>
                <button className='btn btn-outline-danger'>Delete All</button>
            </div>
            <div>
                <Table data={CardData} admin={false} />
            </div>
        </SideBar>
    </main>
  )
}
