import React, { useEffect, useState } from 'react';
import { SideBar } from './SideBar';
import { Input } from '../../Components/Input';
import { Uploader } from './Uploader';
import { CastsModal } from '../../Components/Modals/CastsModal';

export const AddMore = () => {
  const [modalOpen , setModalOpen] = useState(false);
  const [cast,setCast] = useState(null);
  useEffect(()=>{
    if(modalOpen === false){
      setCast();
    }
  },[modalOpen])

  return (
    <main className='container-fluid bg-black py-4'>
        <SideBar>
          <CastsModal modalOpen={modalOpen} setModalOpen={setModalOpen} cast={cast} />
            <div className='d-flex flex-column gap-3 my-3'>
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
                <Uploader className='' />
                <Input 
                  label='Message'
                  placeholder='Add a message about the movie...'
                  type='textarea'
                />
                <label>Description about Movie</label>
                <textarea className='form-control' rows='4' placeholder='Description'>
                </textarea>
              <div className='d-flex justify-content-between mt-3'>
                <button onClick={()=>setModalOpen(true)} className='btn btn-outline-danger'>
                  Create Casts
                </button>
                <button className='btn btn-outline-danger'>
                  Publish Movie
                </button>
              </div>
            </div>
          </SideBar>
    </main>
  )
}
