"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push("/login"); // redirect after signup
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      <h2 className="text-xl font-semibold">Create an Account</h2>
      <form onSubmit={handleSignup} className="mt-6 flex flex-col gap-2 w-[90%]">
        <label className=" font-semibold">Email address *</label>
    
        <input className="bg-white border border-black p-1"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
                <label className=" font-semibold">Password *</label>

        <input
        className="bg-white border border-black p-1"
          type="password"
       
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={loading} className="bg-orange-500 text-white">
          {loading ? "Creating..." : "Sign Up"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}

     
    </div>
  );
}
