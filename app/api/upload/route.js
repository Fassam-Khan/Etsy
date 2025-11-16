import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req) {
  try {
    const { image } = await req.json(); // Base64 from frontend

    const result = await cloudinary.uploader.upload(image, {
      folder: "products",
    });

    return Response.json({
      url: result.secure_url,
      public_id: result.public_id,
    });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
