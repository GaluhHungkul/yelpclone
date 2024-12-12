import User from "@/models/User";
import ConnectionToDatabase from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    try {
        await ConnectionToDatabase()
        const {username, password} = await request.json()
        const newUser = new User({
            username, password
        })
        await newUser.save()
        return NextResponse.json({
            status : 201,
            message : 'Data diterima dan berhasil disimpan',
            newUser
        })

    } catch (err) {
        console.log(err)
    }
}