import React from 'react'
import { Head } from '../Components/Head';
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapPin } from "react-icons/fa6";


export const Contact = () => {
  const ContactData = [
    {
      id: 1,
      title: 'Email Us',
      info: 'INteractively grow backend ideas for cross-platform models.',
      icon: AiOutlineMail,
      contact: 'info@example.com',
    },
    {
      id: 2,
      title: 'contact Us',
      info: 'nothing grow backend ideas for cross-platform models.',
      icon: FaPhoneAlt,
      contact: '+40 798 249 234',
    },
    {
      id: 3,
      title: 'Location',
      info: 'SOS Nicolae Titulescu 81-87',
      icon: FaMapPin,
      contact: 'every@example.com',
    }
  ]
  return (
    <main>
      <section className='container-fluid py-4 bg-black'>
      <Head />
        <h2 className='text-center semibold text-white py-4 text-uppercase'>Contact Us</h2>
        <div className='row'>
          {ContactData.map((contactItem,index)=>(
            <div key={index} className='col-md-4'>
             <div className='card h-100 bg-dark border-0'>
               <div className='card-body text-light text-center'>
                  <span className='my-3 fs-2'>
                    <contactItem.icon className='text-danger' />
                  </span>
                  <h5 className='my-3'>{contactItem.title}</h5>
                  <a href={`mailto: ${contactItem.contact}`} className='text-decoration-none text-light' >{contactItem.contact}</a>
                  <p>{contactItem.info}</p>
               </div>
             </div>
           </div>
          ))}
        </div>
      </section>
    </main>
  )
}
