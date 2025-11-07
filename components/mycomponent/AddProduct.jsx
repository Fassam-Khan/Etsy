"use client";
import { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
    image: null, // Base64 string (not File object)
  });
  const [loading, setLoading] = useState(false);

  // Convert image file to Base64 string
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result }); // Base64 string
    };
    reader.readAsDataURL(file); // Converts image to base64
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // ✅ Directly send the Base64 image string with the rest of product data
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: form.title,
          price: parseFloat(form.price),
          category: form.category,
          description: form.description,
          image: form.image, // Base64 image data
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Product Added Successfully!");
        setForm({
          title: "",
          price: "",
          category: "",
          description: "",
          image: null,
        });
      } else {
        alert("❌ Error: " + (data.error || "Product submission failed"));
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("❌ Something went wrong: Check console for details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Add New Product</h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-full max-w-md border p-6 rounded-xl shadow"
      >
        <input
          placeholder="Product Title"
          className="border p-2 rounded"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
        />

        {form.image && (
          <img
            src={form.image}
            alt="Preview"
            className="w-32 h-32 object-cover rounded-lg border mx-auto"
          />
        )}

        <input
          placeholder="Category"
          className="border p-2 rounded"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        />

        <input
          placeholder="Price"
          type="number"
          className="border p-2 rounded"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />

        <textarea
          placeholder="Description"
          className="border p-2 rounded min-h-[100px]"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="bg-orange-500 text-white p-2 rounded hover:bg-orange-600 disabled:opacity-50"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
