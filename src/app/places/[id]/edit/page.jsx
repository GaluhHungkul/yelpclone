"use client"

import React, { useEffect, useState } from 'react'
import { redirect, useParams, useRouter } from 'next/navigation'

const EditDetailPage = () => {

    const params = useParams()
    const id = params.id
    

    const [placeTitle, setPlaceTitle] = useState('')
    const [placeDescription, setPlaceDescription] = useState('')
    const [PlaceLocation, setPlaceLocation] = useState('')
    const [placePrice, setPlacePrice] = useState('')
    const [placeImage, setPlaceImage] = useState('')

    
    const router = useRouter()
  
    // const [inputan, setInputan] = useState('')

    useEffect(() => {

        const fetchData = async () => {
            // if(localStorage.getItem('isLogin') !== 'true')  {
            //     router.push('/')
            // }
            const res = await fetch(`/api/places/${id}`)
            const result = await res.json()
            console.log(result)
            setPlaceTitle(result.data.title)
            setPlaceDescription(result.data.description)
            setPlaceLocation(result.data.location)
            setPlacePrice(result.data.price)
            setPlaceImage(result.data.image)
            console.log(res)
        }
        fetchData()
    },[router,id])


    const handleSubmit = async e => {
        e.preventDefault()
        const res = await fetch(`/api/places/${id}/change`, {
            method : "PUT",
            headers : { "Content-Type" : "application/json" },
            body : JSON.stringify({
                title : e.target.title.value,
                description : e.target.description.value,
                location : e.target.location.value,
                price : e.target.price.value,
                image : e.target.image.value,
            })
        })
        const result = await res.json()
        console.log(result)
        redirect('/')
    }

  return (
    <form onSubmit={e => handleSubmit(e)} className='flex flex-col items-center w-4/5 px-4 mx-auto my-10 rounded min-h-96'>
        <h1 className='my-5 text-2xl font-bold text-center text-green-400'>Tambahkan Destinasi Wisata mu sendiri</h1>
        <div className='relative flex flex-col w-4/5 gap-10 py-10 my-5 '>
            <input onChange={e => setPlaceTitle(e.target.value)} required value={placeTitle} type="text" className='px-2 py-4 text-lg text-black rounded ' placeholder='Nama destinasi wisata anda' name='title'/>
            <input onChange={e => setPlaceDescription(e.target.value)} required value={placeDescription} type="text" className='px-2 py-4 text-lg text-black rounded ' placeholder='Deskripsi destinasi wisata anda' name='description'/>
            <input onChange={e => setPlacePrice(e.target.value)} required value={placePrice} type="number" className='px-2 py-4 text-lg text-black rounded ' placeholder='Harga destinasi wisata anda' name='price'/>
            <input onChange={e => setPlaceLocation(e.target.value)} required value={PlaceLocation} type="text" className='px-2 py-4 text-lg text-black rounded ' placeholder='Lokasi destinasi wisata anda' name='location'/>
            <input onChange={e => setPlaceImage(e.target.value)} required value={placeImage} type="text" className='px-2 py-4 text-lg text-black rounded ' placeholder='Gambar destinasi wisata anda' name='image'/>    
        <button className='absolute right-0 px-5 py-1 font-bold bg-green-400 rounded -bottom-2 hover:bg-green-500 active:bg-green-600' type='submit'>UBAH</button>
        </div>
    </form> 
  )
}

export default EditDetailPage