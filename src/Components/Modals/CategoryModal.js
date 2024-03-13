import React from 'react'
import { MainModal } from './MainModal';
import { Input } from '../Input';

export const CategoryModal = ({modalOpen , setModalOpen, category}) => {
  return (
    <MainModal modalOpen={modalOpen}  setModalOpen={setModalOpen}>
        <div className='container' >
            <h2 className='text-center'>{category ? "Update" : "Create"}</h2>
            <div className=' my-3 d-flex flex-column gap-4'>
                <Input 
                    placeholder='Action'
                    label='Category Name'
                    type='text'
                />
                <button className='btn btn-danger semibold w-100'>
                    {category ? "Update" : "Create"}
                </button>
            </div>
        </div>
    </MainModal>
  )
}
