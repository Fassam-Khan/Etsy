"use client"
import React, { useState } from 'react'
// Assuming your blog data has a 'category' field for filtering
import { blog } from '@/data/blogdata' 
import BlogItem from './BlogItem'

const BlogList = () => {
  // Use a clearer name like 'selectedCategory'
  const [selectedCategory, setSelectedCategory] = useState("All");

  // --- 1. Filtering Logic ---
  const filteredBlogs = blog.filter((item) => {
    // If 'All' is selected, return all items
    if (selectedCategory === "All") {
      return true;
    }
    // Otherwise, check if the item's category matches the selected category
    // NOTE: You must ensure your 'blog' data objects have a 'category' property
    // that matches the filter names (e.g., 'Electronics', 'Web Development', etc.)
    return item.category === selectedCategory; 
  });
  // --------------------------

  // Helper function to generate class names for active state
  const getButtonClasses = (category) => {
    const baseClasses = 'cursor-pointer py-1.5 px-4 rounded-full transition-all duration-200';
    const activeClasses = 'bg-blue-600 text-white font-bold shadow-md';
    const inactiveClasses = 'bg-gray-300 text-gray-800 hover:bg-gray-400';

    return `${baseClasses} ${selectedCategory === category ? activeClasses : inactiveClasses}`;
  };

  return (
    <div>
      {/* Set the buttons to look nice and apply the state update */}
      <div className='flex gap-4 justify-center flex-wrap mt-10'>
        <button 
          className={getButtonClasses('All')} 
          onClick={() => setSelectedCategory('All')}
        >
          All
        </button>
        <button 
          className={getButtonClasses('Electronics')} 
          onClick={() => setSelectedCategory('Electronics')}
        >
          Electronics
        </button>
        <button 
          className={getButtonClasses('Web Development')} 
          onClick={() => setSelectedCategory('Web Development')}
        >
          Web Development
        </button>
        <button 
          className={getButtonClasses('Graphic Designing')} 
          onClick={() => setSelectedCategory('Graphic Designing')}
        >
          Graphic Designing
        </button>
        {/* Corrected the class application and added the onClick handler */}
        <button 
          className={getButtonClasses('Digital Marketing')} 
          onClick={() => setSelectedCategory('Digital Marketing')}
        >
          Digital Marketing
        </button>
      </div>
      
      {/* Map the FILTERED list */}
      <div className='grid md:grid-cols-4 mt-12 grid-cols-1 gap-6'>
        {filteredBlogs.map((item, index) => {
          return (
            <BlogItem 
              key={index} 
              image={item.image_url} 
              title={item.blog_title} 
              description={item.description}
              id={item.blog_id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BlogList;