import ConnectionToDatabase from "@/lib/mongoose";
import Bestpoint from "@/models/Bestpoints";
import User from "@/models/User";

import { NextResponse } from "next/server";


export async function GET(request, {params}) {


  try {

    await ConnectionToDatabase();

    const {id} = params

    const bestpoint = await Bestpoint.find()

    const currUser = await User.findById(id)

    return NextResponse.json({
      status: 201,
      message: "Data bestpoints",
      data : bestpoint,
      user : currUser
    });
  } catch (err) {
    console.log(err);
  }
}
