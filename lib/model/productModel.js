import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    
        title: {
          type: String,
          required: true,
          trim: true,
        },
        shortDescription: {
          type: String,
          trim: true,
        },
        description: {
          type: String,
          trim: true,
        },
        price: {
          type: Number,
          required: [true, "Price is required"],
        },
        salePrice: {
          type: Number,
          default: null,
        },
        image: {
          type: String
        },
        category: {
          type: String,
          required: true,
        },
        inStock: {
          type: Boolean,
          default: true,
        },
        link: {
          type: String,
          default: "",
        },
      
      
})

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;