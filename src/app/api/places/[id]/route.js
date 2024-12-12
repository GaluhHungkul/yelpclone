import { NextResponse } from "next/server";
import ConnectionToDatabase from "@/lib/mongoose";
import Place from "@/models/Bestpoints";

export async function GET(request, { params }) {
  const { id } = params;

  try {
    await ConnectionToDatabase();

    const detailPlace = await Place.findById(id)

    return NextResponse.json({
      message: "Bismillah",
      data : detailPlace
    });
  } catch (error) {}
}
