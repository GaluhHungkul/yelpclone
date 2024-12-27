"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import useUserInfo from '@/zustand/useUserInfo'
import { useRouter } from 'next/navigation'


const Navbar = () => {

    const pathname = usePathname()

    const {dataUser} = useUserInfo()

    const router = useRouter()

    const isLogin = localStorage.getItem('isLogin')

    const [showProfile, setShowProfile] = useState(false)

    const handleLogOut = () => {
        localStorage.removeItem('isLogin')
        setShowProfile(false)
        router.push('/')        
    }
        
    

  return (
    <div className='sticky top-0 z-10 flex items-center justify-between h-16 bg-black '>
        <Link href="/" className='ml-10 text-2xl font-bold text-white'>Yelp<span className='text-blue-500'>Clone</span></Link>
        <div className='flex items-center justify-between w-2/5 '>            
            <ul className='flex items-center justify-between text-lg font-semibold w-80'>
                <li><Link className={`${pathname == '/' ? 'text-blue-500' : 'text-white'}`} href="/">Home</Link></li>
                <li><Link className={`${pathname == '/about' ? 'text-blue-500' : 'text-white'}`} href="/about">About</Link></li>
                <li><Link className={`${pathname == '/contactus' ? 'text-blue-500' : 'text-white'}`} href="/contactus">Contact Us</Link></li>
            </ul>
            <div className='flex gap-3 mr-10 font-bold text-black'>
                {isLogin !== 'true' ? 
               
                    <Link className='px-4 py-1 bg-white rounded' href='/login'>LOGIN</Link>
                   
                 : 
                <>
                    <div className='relative bg-white rounded-full cursor-pointer size-10 hover:bg-gray-200' onClick={() => setShowProfile(prev => !prev)} >
                    </div>
                    {showProfile && 
                        <div className='fixed w-56 h-40 p-2 bg-white rounded cursor-default right-10 top-16'>
                            <div className='relative mx-auto mb-2 bg-black rounded-full size-10'>

                            </div>
                            <h1 className='capitalize'>Username : {dataUser?.username}</h1>
                            <button onClick={handleLogOut} className='absolute px-4 py-1 font-bold text-white duration-300 translate-x-1/2 bg-black border-2 border-black rounded bottom-2 right-1/2 hover:bg-white hover:text-black '>Log Out</button>
                    </div>}
                </>}
            </div> 
        </div>
    </div>
  )
}

export default Navbar