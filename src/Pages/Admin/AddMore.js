import React from 'react';
import { SideBar } from './SideBar';
import { Input } from '../../Components/Input';

export const AddMore = () => {
  return (
    <main className='container-fluid bg-black py-4'>
        <SideBar>
            <div className='d-flex flex-column gap-2 my-3'>
                <h2 className='text-center semibold'>Create Movie</h2>
                <div className='row'>
                    <div className='col-md-6'>
                        <Input 
                            label='Movie Title'
                            placeholder='Game of Thrones'
                            type="text"
                        />
                    </div>
                    <div className='col-md-6'>
                        <Input 
                            label='Hours'
                            placeholder='2hrs'
                            type="text"
                        />
                    </div>
                    <div className='col-md-6'>
                        <Input 
                            label='Language Used'
                            placeholder="English"
                            type="text"
                        />
                    </div>
                    <div className='col-md-6'>
                        <Input 
                            label='Year of Release'
                            placeholder="2024"
                            type="number"
                        />
                    </div>
                </div>
              <div className='d-flex justify-content-end mt-3'>
                <button className='btn btn-outline-danger'>
                  Publish Movie
                </button>
              </div>
            </div>
          </SideBar>
    </main>
  )
}
