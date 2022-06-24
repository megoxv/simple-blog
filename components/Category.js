import React from "react";
import Image from "next/image";
import Link from "next/link";

const Category = ({ category }) => {
  return (
    <div>
      <Link href={`/categories/${category.slug}`}>
        <div className="text-white cursor-pointer rounded-2xl py-8 px-6 max-h-48 max-w-72 mx-3 bg-gradient-to-r from-indigo-500 to-indigo-800 ">
          <p>{category.name}</p>
          <p className="text-2xl">{category.name}</p>
          {/* <Image src={category.background} alt={category.name} /> */}
        </div>
      </Link>
    </div>
  );
};

export default Category;
