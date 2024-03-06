import React from 'react';
import {Input} from '../Components/Input';
import { FaSignInAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';
import navbrand from '../Assets/navbrand.png';

export const Login = () => {
  return (
    <main className='bg-black container-fluid d-flex justify-content-center align-items-center'>
          <div className='card rounded-4 loginCard-width bg-secondary'>
              <div className='img-container w-50 mx-auto'>
                <img className='img-fluid img-dudge' src={navbrand} alt='loginPage'></img>
              </div>
            <div className='card-body p-5 d-flex flex-column gap-3 pt-0'>
              <Input label='Email' placeholder='gaurab@gmail.com' type='email' />
              <Input label='Password' placeholder='********' type='password' />
              <Link to='/' className='btn btn-danger w-100 my-2 py-2 semibold border-0 shadow-lg rounded-4'> 
                <FaSignInAlt className='me-2' />
                Sign In 
              </Link >
              <div className='text-center'> 
                <p className='mb-0'>Don't have an account ? </p>
                <Link to='/register'>Sign Up!</Link>
              </div>
            </div>
          </div>
    </main>
  )
}
