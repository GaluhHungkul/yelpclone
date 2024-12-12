import React from 'react'

const LandingPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-4/5 gap-10 py-10 mx-auto my-10 border rounded bg-gradient-to-l from-blue-900 via-purple-800 to-red-900 h-max '>
        <h1 className='content-center text-2xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-white to-yellow-500'>Ayo jelajahi berbagai destinasi wisata di Indonesia</h1>
        <h1 className='text-xl font-semibold text-white'>Ada lebih dari <span className='text-blue-500'>2.552</span> destinasi wisata di Indonesia </h1>
        <h1 className='text-2xl font-bold text-white'>Ayo berlibur sekarang juga!</h1>
    </div>
  )
}

export default LandingPage