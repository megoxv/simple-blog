import React from "react";
import Image from "next/image";
import Link from "next/link";
import pageNotFound from "../assets/images/404.svg";
const error404 = () => {
  return (
    <div className="bg-gray-50 dark:bg-main-dark flex flex-col items-center py-8">
      <Image src={pageNotFound} alt="404" width={500} height={500} />
      <button className="py-3 px-4 text-center text-white bg-indigo-600 hover:bg-indigo-700 rounded-full shadow w-fit">
        <Link href="/">Home Page</Link>
      </button>
    </div>
  );
};

export default error404;
