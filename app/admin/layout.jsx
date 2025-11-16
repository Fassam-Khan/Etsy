import "../globals.css";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Dashboard from "@/components/AdminComponents/Dashboard";

// 1. Configure font
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","300","400","500","600","700","900"],
  variable: "--font-poppins",
});
export const metadata = {
  title: "Dashboard",
  description: "",
};

export default function AdminLayout({ children }) {
  return (
    <ClerkProvider>
      <Dashboard/>
      <div>
        {children}
      </div>
    </ClerkProvider>
  );
}
