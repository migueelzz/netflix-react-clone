import React from 'react'
import SavedShows from '../components/SavedShows'

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
      <div className='absolute w-full h-[550px] bg-gradient-to-t from-black'></div>
        <img 
          className='w-full h-[400px] object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/3a073c5f-0160-4d85-9a42-6f59aa4b64b9/6d1d9ae0-45d0-4194-a4c2-222ae667bf0d/BR-pt-20220718-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
          alt="" 
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>Minha lista</h1>
        </div>
      </div>
      <SavedShows />
    </>
  )
}

export default Account