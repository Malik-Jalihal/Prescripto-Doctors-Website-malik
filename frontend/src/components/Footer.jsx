import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>We bring healthcare closer to you by connecting patients with verified doctors across specialties. Our platform ensures easy booking, trusted consultations, and a seamless experience for both patients and professionals.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li><a href="tel:8123912469" className='hover:underline'>8123912469</a></li>
            <li><a href="mailto:malikjalihal123@gmail.com" className='hover:underline'>malikjalihal123@gmail.com</a></li>
            <li>
              <div className='flex items-center gap-4 mt-3'>
                <a href='https://github.com/Malik-Jalihal' target='_blank' rel='noopener noreferrer' aria-label='GitHub' className='text-gray-600 hover:text-gray-900'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-6 w-6' fill='currentColor'>
                    <path d="M12 .5C5.73.5.5 5.73.5 12.02c0 5.1 3.29 9.42 7.86 10.95.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.2-3.1-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 2.92-.39c.99.01 1.99.13 2.92.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.65.24 2.87.12 3.17.75.8 1.2 1.84 1.2 3.1 0 4.43-2.71 5.4-5.29 5.69.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56A11.53 11.53 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
                  </svg>
                </a>

                <a href='#' target='_blank' rel='noopener noreferrer' aria-label='Twitter' className='text-gray-600 hover:text-blue-500'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-6 w-6' fill='currentColor'>
                    <path d="M23 4.56c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.3 3.9A12.15 12.15 0 0 1 3.15 3.1a4.27 4.27 0 0 0 1.33 5.71 4.23 4.23 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.2c-.5.14-1.02.17-1.56.06.44 1.38 1.72 2.39 3.24 2.42A8.6 8.6 0 0 1 1.9 19.54 12.14 12.14 0 0 0 7.29 21c7.55 0 11.68-6.26 11.68-11.69l-.01-.53A8.36 8.36 0 0 0 23 4.56z" />
                  </svg>
                </a>

                <a href='https://www.linkedin.com/in/malik-jalihal-b2823420a/' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn' className='text-gray-600 hover:text-blue-700'>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className='h-6 w-6' fill='currentColor'>
                    <path d="M4.98 3.5a2.88 2.88 0 1 0 0 5.76 2.88 2.88 0 0 0 0-5.76zM3 9h3.96V21H3zM9.5 9h3.79v1.63h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.66 4.78 6.12V21h-3.96v-5.04c0-1.2-.02-2.74-1.67-2.74-1.67 0-1.92 1.3-1.92 2.65V21H9.5z" />
                  </svg>
                </a>
              </div>
            </li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2026 @ Prescripto.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
