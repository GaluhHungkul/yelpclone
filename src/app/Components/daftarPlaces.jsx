"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import useUserInfo from '@/zustand/useUserInfo'


const DaftarPlaces = ({children}) => {

  const [places, setPlaces] = useState([]) 

  const {setDataUser, dataUser} = useUserInfo()

  const isLogin = localStorage.getItem('isLogin')

  useEffect(() => {

    const getDataPlaces = async () => {
      const currUserId = '675a86f50f040f6ac655ce90'
      const res = currUserId ?   await fetch(`/api/places/user/${currUserId}`) : await fetch(`/api/places`)
      const results = await res.json()
      console.log(results)
      setPlaces(results.data)
      setDataUser(results.user)
      console.log(results.user)
      
    }


    
    getDataPlaces()

  },[])

  return (
    <div className='flex flex-col items-center w-4/5 mx-auto'>
      <div className='grid grid-cols-2 gap-10 '>
      {places.map((item) => ( 
        <div key={item._id} className="flex justify-between overflow-hidden duration-150 border rounded bg-gradient-to-b from-blue-800 to-blue-600 hover:scale-105 ">
          <div>
          <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKH7mdyFWbHADe3SBF1pA7TB5jGLvMwNUw8g&s'} alt='wisata indonesia' className='w-[320px] h-[180px]'/>
          </div>
          <div className="relative w-1/3 ">
          <h1 className="w-4/5 pt-5 font-bold text-transparent bg-gradient-to-r from-green-400 to-green-300 bg-clip-text ">{item.title}</h1>
          <Link className="absolute px-4 py-1 font-semibold duration-300 border rounded bottom-5 hover:text-blue-500 hover:bg-white" href={`/places/${item._id}`}>Selengkapnya</Link>
          </div>
        </div>
      ))}
      </div>
      <div className=' my-36'>
        <h1 className='font-bold'>Mau menambahkan destinasi wisata mu sendiri? {isLogin ? <Link className='text-blue-500' href='/places/create'>Klik disini</Link> : <Link href='/login' className='text-blue-500'>Login terlebih dahulu</Link>}</h1>
      </div>
    </div>
  )
}

export default DaftarPlaces