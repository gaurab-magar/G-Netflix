import React from 'react'
import { MainModal } from './MainModal';
import { Input } from '../Input';
import { Uploader } from '../../Pages/Admin/Uploader';

export const CastsModal = ({modalOpen , setModalOpen, cast}) => {
  return (
    <MainModal modalOpen={modalOpen}  setModalOpen={setModalOpen}>
        <div className='container' >
            <h2 className='text-center'>{cast ? "Update" : "Create"}</h2>
            <div className=' my-3 d-flex flex-column gap-4'>
                <Input 
                    placeholder={cast ? cast.fullName : 'John Doe'}
                    label='cast Name'
                    type='text'
                />
                <Uploader />
                <button className='btn btn-outline-danger semibold w-100 rounded-0'>
                    {cast ? "Update" : "Add"}
                </button>
            </div>
        </div>
    </MainModal>
  )
}
