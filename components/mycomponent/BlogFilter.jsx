// "use client"
// import React from 'react'
// import { useState } from 'react';
// import { blogCategories } from '@/data/blogdata';
// import { blog } from '@/data/blogdata';
// import { BlocksIcon } from 'lucide-react';
// import BlogCard from './BlogCard';
// import BlogList from './BlogList';

// const BlogFilter = () => {
//     const [menue, setmenue] = useState("All")
//     return (
//         <>
//             <div className=' p-10 flex justify-center items-center gap-10'>
//                 {blogCategories.map((item) => {
//                     return <div key={item} className=' '>
//                         <button onClick={() => setmenue(item)}
//                             className={`cursor-pointer  rounded-full p-2  ${menue === item && ' bg-orange-300 font-semibold '} `}>
//                             {item}
//                         </button>
//                     </div>
//                 })}

//             </div>
//             <div>
                
//             </div>
//         </>
//     )
// }


// export default BlogFilter
