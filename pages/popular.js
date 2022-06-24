import React from "react";
import Head from "next/head";
import { siteName } from "../assets/variables";
import { populars } from "../assets/data";
import { PostCard } from "../components";
const popular = () => {
  return (
    <div className="bg-gray-50 dark:bg-main-dark">
      <div className="container px-11 md:px-16 xl:px-36 mx-auto pb-8 pt-6 ">
        <Head>
          <title>Popular | {siteName}</title>
        </Head>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ">
          {populars.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default popular;
