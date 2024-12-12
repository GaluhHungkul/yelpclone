"use client"

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const RegisterPage = () => {

  const [password, setPassword] = useState('')
  const [verifikasiPass, setVerifikasiPass] = useState('')

  const router = useRouter()

  useEffect(() => {
    if(localStorage.getItem('isLogin') == 'true') router.push('/')
  },[router])

  const handleSubmit = async e => {
    e.preventDefault()
    const {username, password} = e.target

      const kirim = await fetch('/api/register', {
        method : 'POST',
        headers : {
          "Content-Type" : "application/json" 
        },
        body : JSON.stringify({
          username : username.value, 
          password : password.value 
        })
      })
      const res = await kirim.json()
      console.log(res)
      if(res.OK) router.push('/login')
         

  }

  return (
    
      <form onSubmit={e => handleSubmit(e)} disabled={password != verifikasiPass} className='relative flex flex-col items-center h-[500px] mx-auto mt-16 border border-white rounded w-96'>
        <h1 className='my-5 text-2xl font-bold'>Register</h1>
        <div className='flex flex-col items-center w-full gap-5 mt-6 text-black'>          
          <input required name='username' className='w-4/5 px-2 py-1 border-2 rounded' type="text" placeholder='Username'/>
          <input required onChange={e => setPassword(e.target.value)} name='password' className='w-4/5 px-2 py-1 border-2 rounded' type="password" placeholder='Password' />
          <div className='flex flex-col w-full'>
            <input required onChange={e => setVerifikasiPass(e.target.value)} name='verifikasiPass' className='w-4/5 px-2 py-1 mx-auto border-2 rounded ' type="password" placeholder='Verifikasi Password' />
            {verifikasiPass && verifikasiPass != password && <span className='my-3 ml-10 text-red-500'>Password berbeda!</span>}
          </div>
        </div>
        <button className='absolute w-4/5 py-1 font-bold text-black duration-200 bg-white border rounded bottom-20 hover:bg-black hover:text-white active:bg-white active:text-black' type="submit" disabled={verifikasiPass !== password}>Register!</button>
      </form>
    
  )
}

export default RegisterPage