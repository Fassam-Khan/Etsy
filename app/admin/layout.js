import AdminSidebar from "@/components/AdminComponents/AdminSidebar"
export default function AdminLayout({ children }) {
    return (
        <>
            <div className="flex" >
                <div className='w-[20%] h-full sticky'>
                    <AdminSidebar />
                </div>
                <div className= "w-full">
                    {children}
                </div>
            </div>


        </>
    )
}