import React from 'react'
import { SideBar } from './SideBar'
import { Input } from '../../Components/Input';


export const Password = () => {
  return (
    <main className='container-fluid bg-black py-4'>
        <SideBar>
            <div className='d-flex flex-column gap-2 my-3'>
                <h2 className='text-center semibold'>Change Password</h2>
              <Input 
                label='Old Password'
                placeholder='Your Password'
                type="password"
              />
              <Input 
                label='Your New Password'
                placeholder='*********'
                type="password"
              />
              <Input 
                label='Confirm Password'
                placeholder='*********'
                type="password"
              />
              <div className='d-flex justify-content-end mt-3'>
                <button className='btn btn-outline-danger'>
                  Change Password
                </button>
              </div>
            </div>
          </SideBar>
    </main>
  )
}
