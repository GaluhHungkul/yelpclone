"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, {  useEffect, useState } from 'react'


const LoginPage = () => {

  const router = useRouter()

  const [wrongAccount, setWrongAccount] = useState(false)

  useEffect(() => {
      if(localStorage.getItem('isLogin') == 'true') router.push('/')
  },[router])

  const handleSubmit = async e => {
    e.preventDefault()

    
    
    const kirim = await fetch('/api/login', {
      method : 'POST',
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        username : e.target.username.value,
        password : e.target.password.value
      })
    })

    const res = await kirim.json()
    console.log(res)
    if(res.OK) {
      
      setWrongAccount(false)
      localStorage.setItem('isLogin', 'true')
      localStorage.setItem('userId', res?.userId)
      
      console.log(res)

      
      router.push('/')      
    } else {
      setWrongAccount(true)
    }

  }

  return (
    
      <form onSubmit={e => handleSubmit(e)} className='relative flex flex-col items-center h-[500px] mx-auto mt-16 border border-white rounded w-96'>
        <h1 className='my-5 text-2xl font-bold'>Login</h1>
        <div className='flex flex-col items-center w-full gap-5 mt-6 text-black'>          
          <input name='username' className='w-4/5 px-2 py-1 border-2 rounded' type="text" placeholder='Username'/>
          <input name='password' className='w-4/5 px-2 py-1 border-2 rounded' type="password" placeholder='Password' />
        </div>
        {wrongAccount && <h1 className='absolute font-bold text-red-500 top-1/2 '>Terdapat kesalahan dalam pengisian form</h1>}
        <p className='absolute font-semibold text-white bottom-36'>Belum Punya Akun? <Link className='text-blue-500' href='/register'>Buat disini</Link> </p>
        <button className='absolute w-4/5 py-1 font-bold text-black duration-200 bg-white border rounded bottom-20 hover:bg-black hover:text-white active:bg-white active:text-black' type="submit">LOGIN</button>
      </form>
    
  )
}

export default LoginPage