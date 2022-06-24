import React, {useState} from "react";
import Link from "next/link";
import Image from "next/image";
const PostCard = ({ post }) => {
  const [love, setLove] =useState(1);
  const handleClick = () => {
    setLove(love + 1);
  }  
  return (
    <div className="card bg-white dark:bg-secondary-dark  rounded-2xl box-shadow hover:box-shadow-hover duration-300 hover:-translate-y-6 h-fit max-w-sm mt-8 w-full ">
      <div>
        <Link href={`/post/${post.slug}`}>
          <Image
            src={post.featuredimage}
            alt={post.title}
            className="rounded-t-2xl w-full h-48 cursor-pointer"
            width= {500}
            height= {350}
          />
        </Link>
      </div>
      <div className="relative p-4">
        <span
          style={{ top: "-28px" }}
          className="category absolute top- right-5 text-white  bg-indigo-600 px-3 py-2 rounded-full duration-300"
        >
          {post.categories}
        </span>
        <h3
          className="text-gray-900 dark:text-white font-bold leading-tight pt-3 "
          title={post.title}
        >
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h3>
        <div className="border-b  border-gray-100 pt-3">
          <p className="text-sm text-gray-900 dark:text-slate-200">{post.excerpt}</p>
        </div>
        <div>
          <div className="flex items-center justify-between  pt-2 ">
            <div className="flex items-center">
              <Image src={post.author.picture} alt={post.author.name} width={30} height={30} className="rounded-full"  />
              <span className="mx-3 text-gray-900 dark:text-slate-300 font-medium">
                {post.author.name}
              </span>
            </div>
            <div className="flex">
              <svg onClick={handleClick} className="w-6 h-6  dark:text-white hover:text-red-600 cursor-pointer duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              <span className="select-none dark:text-slate-200">{love}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
