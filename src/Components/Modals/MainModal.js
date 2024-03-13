import React, { Fragment } from 'react'
import { useRef } from 'react';
import {Dialog , Transition} from '@headlessui/react';
export const MainModal = ({modalOpen,setModalOpen,children}) => {
    const cancelButtonRef = useRef();
  return (
    <>
        <Transition show={modalOpen} as={Fragment} appear>
            <Dialog as='div' className="modal fade show d-block" initialFocus={cancelButtonRef} onClose={()=>setModalOpen(false)}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content rounded-4 bg-dark text-light p-4">
                            <div className="row justify-content-end">
                                <button type="button" className="btn-close" aria-label="Close" onClick={() => setModalOpen(false)}></button>
                            </div>
                            <div className="modal-body">
                                <div className='min-h-screen px-4'>
                                    <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0' >
                                        <Dialog.Overlay className='fixed inset-0 bg-black opacity-1'>
                                        </Dialog.Overlay>
                                    </Transition.Child>
                                    <span className='inline-block'>&#8203;</span>
                                    <Transition.Child as={Fragment} enter='ease-out duration-300' enterFrom='opacity-0' enterTo='opacity-100' leave='ease-in duration-200' leaveFrom='opacity-100 scale-100' leaveTo='opacity-0' >
                                        {children}
                                    </Transition.Child>
                                </div>
                            </div>
                        </div>
                    </div>
            </Dialog>
        </Transition>
        <Transition show={modalOpen} as={Fragment} appear>
            <div className="modal-backdrop fade show"></div>
        </Transition>
    </>
  )
}
