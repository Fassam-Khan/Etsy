"use client"; // only if you use App Router

import { useState } from "react";
import { auth } from "../../lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation"; // use next/router if Pages Router

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="" >
      <h2 className="text-xl font-semibold">Login</h2>
      <form onSubmit={handleLogin} className="flex flex-col gap-2 mt-6 flex-wrap md:w-[90%] w-[100%] ">
        <label className="font-semibold" >Usename or email address * </label>
        <input  className="bg-white border border-black p-1"
          type="email"
          
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
                <label className="font-semibold " >Password * </label>


        <input className="bg-white border border-black p-1"
          type="password"
         
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="mt-2 bg-orange-500 text-white p-1 cursor-pointer rounded">Login</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
