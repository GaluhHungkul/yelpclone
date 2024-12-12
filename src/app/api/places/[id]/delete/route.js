import ConnectionToDatabase from "@/lib/mongoose"
import Bestpoint from "@/models/Bestpoints"
import { NextResponse } from "next/server"

export async function DELETE(req, {params}) {
    const id = params.id

    try {
        
        await ConnectionToDatabase()
        const deletedData = await Bestpoint.findByIdAndDelete(id)
        if(!deletedData) {
            return NextResponse.json({
                error : 'data tidak ditemukan',
                status : 404
            })
        }
        return NextResponse.json({
            message : 'data berhasil dihapus',
            deletedData
        })

    } catch (err) {
        console.log(err)
        
    }
    
}