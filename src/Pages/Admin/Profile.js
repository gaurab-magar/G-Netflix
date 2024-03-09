import React from 'react';
import { SideBar } from './SideBar';
import {LayoutPage} from '../../Components/LayOUts/LayoutPage';
import { Uploader } from './Uploader';
import {Input} from '../../Components/Input';

export const Profile = () => {
  return (
    <LayoutPage>
      <main className='container-fluid bg-black'>
          <SideBar>
            <p>profile</p>
            <Uploader />
            <div className='d-flex flex-column gap-2 my-3'>
              <Input 
                label='FullName'
                placeholder='Your FullName'
                type="text"
              />
              <Input 
                label='Your Email'
                placeholder='example@gmail.com'
                type="email"
              />
              <div className='d-flex justify-content-between mt-3'>
                <button className='btn btn-outline-danger'>
                  Save Changes
                </button>
                <button className='btn btn-outline-danger'>
                  Update Profile
                </button>
              </div>
            </div>
          </SideBar>
      </main>
    </LayoutPage>
  )
}
