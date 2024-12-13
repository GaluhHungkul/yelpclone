import { NextResponse } from "next/server";
import ConnectionToDatabase from "@/lib/mongoose";
import Place from "@/models/Bestpoints";
import User from "@/models/User";

export async function GET(request, { params }) {
  const { id, userId } = params;

  try {
    await ConnectionToDatabase();

    const detailPlace = await Place.findById(id)
    const currUser = await User.findById(userId)

    return NextResponse.json({
      message: "Bismillah",
      data : detailPlace,
      user : currUser
    });
  } catch (error) {}
}
