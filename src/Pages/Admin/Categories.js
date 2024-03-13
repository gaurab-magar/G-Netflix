import React, { useEffect, useState } from 'react';
import { SideBar } from './SideBar';
import { HiPlus } from "react-icons/hi";
import { Table2 } from '../../Components/Single/Table2';
import { UserData } from '../../Data/UserData';
import { CategoryModal } from '../../Components/Modals/CategoryModal';


export const Categories = () => {
    const [modalOpen , setModalOpen] = useState(false);
    const [category, setCategory] = useState();

    const OnEditFunction =(id)=>{
        setCategory(id);
        setModalOpen(!modalOpen);
    }
    useEffect(()=>{
        if(modalOpen === false){
            setCategory();
        }
    },[modalOpen])
  return (
    <main className='py-4 container-fluid bg-black'>
        <SideBar>
            <CategoryModal
             modalOpen={modalOpen} 
             setModalOpen={setModalOpen} 
             category={category} />

            <div className='d-flex justify-content-between align-items-center '>
                <h2 className='text-center semibold mb-0'>Categories</h2>
                <button
                    onClick={()=>{setModalOpen(!modalOpen)}}
                    type="button"
                    className='btn btn-outline-danger'>
                    <HiPlus className='me-2' />
                    Create
                </button>
            </div>
            <div>
                <Table2 data={UserData} users={false} OnEditFunction={OnEditFunction} />
            </div>
        </SideBar>
    </main>
  )
}
