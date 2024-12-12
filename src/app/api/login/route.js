import ConnectionToDatabase from "@/lib/mongoose"
import User from "@/models/User"
import { NextResponse } from "next/server"


export async function POST(request) {

    const bcrypt = require('bcrypt')


    try {
        
        await ConnectionToDatabase()

        const {username, password} = await request.json()

        const currUser = await User.findOne({username})
        if(currUser) {
            const isMatch = await bcrypt.compare(password, currUser.password)
          
            if(isMatch) {
                return NextResponse.json({
                    OK : true,
                    message : 'data asli',
                    userId : currUser._id  
                })
            } else {
                return NextResponse.json({
                    message : 'password salah'
                })
            }
        } else {
            return NextResponse.json({
                message : 'username tidak ditemukan'
            })
        }

        

    } catch (error) {
        console.log(error)
    }
}