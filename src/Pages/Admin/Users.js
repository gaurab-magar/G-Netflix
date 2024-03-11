import React from 'react';
import { SideBar } from './SideBar';
import { Table2 } from '../../Components/Single/Table2';
import { UserData } from '../../Data/UserData';

export const Users = () => {
  return (
    <main className='py-4 container-fluid bg-black'>
        <SideBar>
            <div className='d-flex justify-content-between align-items-center '>
                <h2 className='text-center semibold mb-0'>Users</h2>
            </div>
            <div>
                <Table2 data={UserData} users={true} />
            </div>
        </SideBar>
    </main>
  )
}
