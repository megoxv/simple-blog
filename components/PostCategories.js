import React from "react";
import Link from "next/link";
const PostCategories = () => {
  return (
    <div className="bg-gray-50 dark:bg-secondary-dark p-6 mt-8 rounded-2xl relative  box-shadow">
      <h3 className="text-lg   before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500  relative inline-block">
      <span className="relative text-white">Categories</span>
      </h3>
      <div className="flex flex-col dark:text-white">
        <span className="my-1 mt-4 hover:translate-x-3 hover:text-indigo-600 duration-300"><Link href="/" >HTML</Link></span>
        <span className="my-1 hover:translate-x-3 hover:text-indigo-600 duration-300"><Link href="/" >CSS</Link></span>
        <span className="my-1 hover:translate-x-3 hover:text-indigo-600 duration-300"><Link href="/" >Java Script</Link></span>
        <span className="my-1 hover:translate-x-3 hover:text-indigo-600 duration-300"><Link href="/" >Web Devolpment</Link></span>
      </div>
    </div>
  );
};

export default PostCategories;
