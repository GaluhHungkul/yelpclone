"use client"

import Link from 'next/link'
import { redirect, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DetailPage = () => {

    const params = useParams()
    const id = params.id
    
    const [place, setPlace] = useState({})

    const isLogin = localStorage.getItem('isLogin')

    const handleDelete = async () => {
      
      const confirmed = confirm('Kamu yakin mau menghapus data wisata ini? Data yang dihapus tidak bisa dipulihkan ')
      if(!confirmed) return
      const res = await await fetch(`/api/places/${id}/delete`, {
        method : "DELETE"
      })
      redirect('/')
    }

    useEffect(() => {
      const fetchDetailPlace = async () => {
        const res = await fetch(`/api/places/${id}`)
        const result = await res.json()
        console.log(result)
        setPlace(result.data)
      }
      fetchDetailPlace()
    }, [])

  return (
    <div className='flex w-4/5 gap-10 mx-auto my-10 rounded '>
      <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKH7mdyFWbHADe3SBF1pA7TB5jGLvMwNUw8g&s'} alt='wisata indonesia' className='w-[640px]  h-[360px] mx-auto rounded'/>
      <div className='flex flex-col w-1/2 p-5 border rounded '>
        <h1>{place.title}</h1>
        <h1 className='pt-1 pb-2 border-b'>{place.description}</h1>
        <h1 className='pt-6 pb-2 border-b'>{place.location}</h1>
        <h1 className='pt-6'>Rp.{place.price}</h1>
        {isLogin == 'true' && 
        <>
          <Link href={`/places/${place._id}/edit`} className='mt-10 font-semibold text-blue-300' >Ubah data wisata</Link>
          <button onClick={handleDelete} className='px-3 py-1 mt-4 font-bold duration-300 border rounded w-max hover:bg-white hover:text-black'>Hapus Data Wisata</button>
        </>}
        </div>
    </div>
  )
}

export default DetailPage