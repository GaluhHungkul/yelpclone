import ConnectionToDatabase from "@/lib/mongoose"
import Bestpoint from "@/models/Bestpoints"
import { NextResponse } from "next/server"

export async function PUT(req, {params}) {

    const id = params.id
    const body = await req.json()

    try {
        
        await ConnectionToDatabase()
        const bespointChange = await Bestpoint.findByIdAndUpdate(id,body,{new : true})
        return NextResponse.json({
            message : 'data updated',
            bespointChange
        })

    } catch (err) {
        console.log(err)
    }

}