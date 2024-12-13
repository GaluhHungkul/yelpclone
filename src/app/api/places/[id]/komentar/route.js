import ConnectionToDatabase from "@/lib/mongoose"
import Bestpoint from "@/models/Bestpoints"
import User from "@/models/User"
import {  NextResponse } from "next/server"


export async function POST(req, {params}) {
    const {userId, komentar} = await req.json()
    const {id} = params

    const {user, message} = komentar


    try {
        
        await ConnectionToDatabase()

        const currUser = await User.findById(userId)
        const currPlace = await Bestpoint.findById(id)

        const formattedDate = new Date().toLocaleString("id-ID", {
            timeZone: "Asia/Jakarta",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });



        const datedKomentar = {
            user,
            message,
            date : new Date(),
            formattedDate
        }

        currPlace.komentar.push(datedKomentar)

        await currPlace.save()

        return NextResponse.json({
            currPlace,
            user,
            message
            // currUser,
            // komentar
        })

    } catch (error) {
        console.log(error)
        return NextResponse.json({
            error 
        })
    }
}