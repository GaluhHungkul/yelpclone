import ConnectionToDatabase from "@/lib/mongoose";
import Bestpoint from "@/models/Bestpoints";
import useLogin from "@/zustand/useLogin";

import { NextResponse } from "next/server";


export async function GET() {


  try {
    await ConnectionToDatabase();

    const bestpoint = await Bestpoint.find()
    return NextResponse.json({
      status: 201,
      message: "Data bestpoints",
      data : bestpoint
    });
  } catch (err) {
    console.log(err);
  }
}
