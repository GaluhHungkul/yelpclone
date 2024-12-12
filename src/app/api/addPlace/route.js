import { NextResponse } from "next/server"
import ConnectionToDatabase from "@/lib/mongoose"
import Bestpoint from "@/models/Bestpoints"

export async function POST(request) {
    try {
        console.log('masuk try')
        await ConnectionToDatabase()
        console.log('connect db')
        const {title, description, price, location, image} = await request.json()
        console.log('data masuk')
       
        const newBestpoint = new Bestpoint({
            title, description, price, location, image
        })
      
        await newBestpoint.save()
      
        return NextResponse.json({
            newBestpoint
        })
    } catch (err) {
        console.log(err)
        return NextResponse.json({
            OK : false,
            message : 'ada masalah boy'
        })

    }
}

