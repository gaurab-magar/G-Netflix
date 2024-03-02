import React, { useState } from 'react'
import {Head} from '../Components/Head';
import { Filter } from '../Components/Filter';
import { Cards } from '../Components/Cards';
import { CardData } from '../Data/CardData';
import { Recomanded } from '../Components/Recomanded';
import { MdOutlineSlowMotionVideo } from "react-icons/md";

export const MoviesPage = () => {
  const maxPage = 10;
  const [currentPage , setCurrentPage] = useState(1);

  const showPreviousItems = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };
  const handleLoad = () => {
      setCurrentPage(prevPage => prevPage + 1);
  }
  const startIndex = (currentPage - 1) * maxPage;
  const endIndex = currentPage * maxPage;

  // Slice CardData to get visible data
  const visibleData = CardData.slice(startIndex, endIndex);

  return (
    <main className='container-fluid bg-black text-white'>
      <Head />
      <Filter />
      <section className='container-fluid py-4'>
          <div className='title'>
            <h3 className='fw-bold'>Title: <span className='text-danger'>{CardData.length}</span></h3>
          </div>
          <div className='row'>
            <div className='col-md-9'>
              <div className='d-flex align-items-center justify-content-evenly flex-wrap  p-0'>
                {visibleData.map((detail)=>(
                  <Cards  key={Math.random()} data={detail} />
                ))}
              </div>
            </div>
            <div className='col-md-3 p-0'>
                <div className='container p-0'>
                  <h3 className='semibold text-center text-danger'>
                    <MdOutlineSlowMotionVideo className='me-2' />
                    Recently Updated
                  </h3> 
                  <div className='d-flex flex-column gap-3'>
                    {CardData.slice(0,6).map((data)=>(
                      <Recomanded key={Math.random} data={data} />
                    ))}
                  </div>
                </div>
            </div>
          </div>
          <div  className="text-center py-3">
            <button type="button" onClick={showPreviousItems} className="btn btn-outline-danger px-4 rounded-pill fs-5 fw-bold">Load Prev</button>
            <button type="button" onClick={handleLoad} className="btn btn-outline-danger px-4 rounded-pill fs-5 fw-bold">Load More</button>
          </div>
      </section>

    </main>
  )
}
