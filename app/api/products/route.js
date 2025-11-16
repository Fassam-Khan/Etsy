import Product from "@/lib/model/Product";
import { connectDB } from "@/lib/config/db";
export async function GET() {
  await connectDB();
  const products = await Product.find();
  return Response.json(products);
}

export async function POST(req) {
  await connectDB();
  const body = await req.json();
  const newProduct = await Product.create(body);
  return Response.json(newProduct);
}

