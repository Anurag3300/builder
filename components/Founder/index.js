import { founder } from '@/uitls/constant';
import React from 'react'
import { FaUserTie } from 'react-icons/fa';

const Founder = () => {
  return (
    <div className='relative bg-gray-50 py-20 px-6 md:px-12 lg:px-24 overflow-hidden' id='founders note'>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-logobtbcolor to-transparent"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 translate-x-1/2 translate-y-1/2 bg-gradient-radial from-logobtbcolor to-transparent"></div>
      </div>
      <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-white to-transparent"></div>
      <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-white to-transparent"></div>

      <div className='max-w-6xl mx-auto relative'>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-buttonColor mb-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3">
            <FaUserTie className="text-logobtbcolor text-4xl md:text-5xl mb-2 md:mb-0" />
            <span>Founder's Note</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Insights from the visionary behind <span className="text-logobtbcolor font-medium">Big Growth Digital</span>
          </p>
        </div>
        <div className='flex flex-col md:flex-row items-center md:items-start md:gap-32 gap-12'>
          <div className="w-48 h-48 md:w-72 md:h-72 flex-shrink-0">
            <img 
              src='/photo.webp' 
              alt='Tanuj Gupta' 
              className='rounded-full object-cover w-full h-full shadow-lg border-4 border-buttonColor'
            />
          </div>
          <div className='flex-grow'>
            <div className='space-y-6 mb-8'>
              {founder.map((data, idx) => (
                <p className="text-slate-700 text-lg leading-relaxed" key={idx}>{data}</p>
              ))}
            </div>
            <div className='text-right'>
              <h3 className='font-bold text-2xl text-buttonColor'>Tanuj Gupta</h3>
              <p className='text-slate-600'>CEO & Founder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Founder;