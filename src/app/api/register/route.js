import { NextResponse } from "next/server"
import ConnectionToDatabase from "@/lib/mongoose"
import User from "@/models/User"

export async function POST(request) {

    const bcrypt = require('bcrypt')

    try {
        await ConnectionToDatabase()
        const {username, password} = await request.json()

        const isExist = await User.findOne({username})
        if(isExist) {
            return NextResponse.json({
                message : 'username sudah digunakan'
            })
        }
        const hash = await bcrypt.hash(password, 10)

        const newUser = new User({
            username, 
            password : hash
        })
        await newUser.save()
        return NextResponse.json({
            message : 'Akun berhasil dibuat',
            OK : true
        })
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            OK : false,
            message : 'ada masalah icik boss'
            
        })
    }
}