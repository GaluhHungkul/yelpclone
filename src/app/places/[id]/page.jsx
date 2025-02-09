"use client"

import Link from 'next/link'
import { redirect, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const DetailPage = () => {

    const params = useParams()
    const id = params.id
    
    console.log(localStorage)

    const [place, setPlace] = useState({})

    const [currUser, setCurrUser] = useState({}) 

    const isLogin = localStorage.getItem('isLogin')

    const handleDelete = async () => {
      
      const confirmed = confirm('Kamu yakin mau menghapus data wisata ini? Data yang dihapus tidak bisa dipulihkan ')
      if(!confirmed) return
      const res = await await fetch(`/api/places/${id}/delete`, {
        method : "DELETE"
      })
      redirect('/')
    }
    const currUserId = localStorage.getItem('userId')
    console.log(place)

    useEffect(() => {
      const fetchDetailPlace = async () => {
        const res = await fetch(`/api/places/${id}/user/${currUserId}`)
        const result = await res.json()
        console.log(result)
        setPlace(result.data)
        setCurrUser(result.user)
      }
      fetchDetailPlace()
    }, [id])


    const handleSubmit = async (e) => {
      e.preventDefault()
      
      const res = await fetch(`/api/places/${id}/komentar`, {
        method : "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          userId : currUserId,
          komentar : {
            user : currUser.username,
            message : e.target.komentar.value
          }
        })
      })
      const result = await res.json()
      console.log(result)
      e.target.komentar.value = ''
      window.location.reload()
    }

  return (
    <div>      
      <div className='flex w-4/5 gap-10 mx-auto my-10 rounded'>
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
        <div className='w-4/5 px-5 py-4 mx-auto border rounded min-h-56'>
          {localStorage.getItem('isLogin') === 'true' &&
            <div className='flex items-center w-full h-20 gap-8 px-4 py-1 border-b'>
            <div className='bg-white rounded-full size-14'>
              
            </div>
            <form className='flex items-center w-full h-4/5' onSubmit={(e) => handleSubmit(e)}>
                <input type="text" name='komentar' placeholder={`Tambahkan komentar sebagai ${currUser.username}...`} className='w-4/5 px-4 mx-10 bg-transparent border rounded h-3/4'/>
                <button className='px-5 py-2 font-bold text-black duration-300 bg-white border rounded hover:bg-black hover:text-white'>KIRIM</button>
            </form>
          </div> }
          <div className='flex flex-col w-full gap-4 mt-10 min-h-52'>
              {place?.komentar?.length ?  place?.komentar?.map((item,index) => (
                <div key={index} className='relative flex items-center h-20 gap-5 px-10 border rounded'>
                    <h1 className='absolute text-sm top-1 right-4 hover:text-slate-400'>{item.formattedDate}</h1>
                    <div className='absolute bg-white rounded-full size-12'>
                      
                    </div>
                    <div className='ml-16 h-max'>
                      <h1 className='text-sm text-slate-300'>{item.user}</h1>
                      <h1>{item.message}</h1> 
                    </div>
                </div>
              )) : <h1 className='text-2xl font-bold text-center'>Belum ada komentar</h1>}
          </div>
        </div>
    </div> 
  )
}

export default DetailPage