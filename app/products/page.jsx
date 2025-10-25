import Link from "next/link";
import products from "@/data/product.json" // ✅ import JSON data

export default function ProductsPage() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-xl shadow p-4 text-center hover:shadow-lg transition"
        >
          <img
            src={product.image}
            alt={product.name}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
            className="w-full h-48 object-cover rounded-lg"
          />
          <h2 className="text-lg font-semibold mt-3">{product.name}</h2>
          <p className="text-gray-700 mt-1">Rs. {product.price}</p>
          <Link
            href={`/products/${product.id}`}
            className="inline-block mt-3 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
