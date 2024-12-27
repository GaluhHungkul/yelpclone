import Image from 'next/image'
import React from 'react'

const LandingPage = () => {
  return (
    <div className='relative flex flex-col items-center justify-center w-4/5 gap-10 py-10 mx-auto my-10 overflow-hidden border rounded h-max '>
      <Image src='/images/bg1.jpg' width={800} height={400} className='absolute z-[-1] bg-cover w-full ' alt='Landing Page' />
        <h1 className='content-center text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-yellow-500'>Ayo jelajahi berbagai destinasi wisata di Indonesia</h1>
        <h1 className='text-xl font-semibold text-white'>Ada lebih dari <span className='text-yellow-500'>2.552</span> destinasi wisata di Indonesia </h1>
        <h1 className='text-2xl font-bold text-white'>Ayo berlibur sekarang juga!</h1>
    </div>
  )
}

export default LandingPage