import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";





export async function GET() {
    console.log("ENV MONGO =", process.env.MONGODB_URL);

  try {
    await connectDB();
    return NextResponse.json({
      success: true,
      message: "DB Connected Successfully"
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "DB Connection Failed",
      error: error.message
    }, { status: 500 });
  }

}
