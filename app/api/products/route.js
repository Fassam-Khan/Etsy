import { connectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import Product from "@/lib/model/productModel";
export async function GET() {
  try {
    await connectDB();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    await connectDB();
    const body = await request.json();
    const newProduct = await Product.create(body);
    return NextResponse.json(newProduct);
  } catch (error) {
    console.error("POST Error:", error);
    console.error("❌ POST Error Details:", error); // <-- yeh line add karo

    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
