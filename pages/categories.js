import React from "react";
import Head from "next/head";

import { Header } from "../components";
import { Category } from "../components";
import { category } from "../assets/data";
import { siteName } from "../assets/variables";

const categories = () => {
  return (
    <div className="bg-gray-50 dark:bg-main-dark  ">
      <div className=" container px-11 md:px-16 xl:px-36 mx-auto h-screen-calc ">
        <Head>
          <title>Categories | {siteName}</title>
        </Head>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-6">
          {category.map((category) => (
            <Category key={category.slug} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default categories;
