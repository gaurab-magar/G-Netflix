import React from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

export const LayoutPage = ({children}) => {
  return (
    <div className='bg-light'>
        <Header />
            {children}
        <Footer />
    </div>
  )
}
