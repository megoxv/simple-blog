import React from "react";
import Image from "next/image";
import Link from "next/link";
import svgimg from "../assets/images/svg.png";
const PostWidget = () => {
  return (
    <div className="bg-gray-50 dark:bg-secondary-dark p-6 mt-8 rounded-2xl relative  box-shadow">
      <h3 className="text-lg   before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-indigo-500  relative inline-block">
        <span className="relative text-white">Popular posts</span>
      </h3>
      <div className="mt-6">
        <div className="flex mt-6">
          <div>
            <Image
              src={svgimg}
              alt="image"
              width={110}
              height={78}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col ml-3">
            <h3 className="text-md text-gray-900 dark:text-white">
              <Link href="/">HTML Space – How to Add Spaces in HTML</Link>
            </h3>
            <span className="text-gray-600 dark:text-gray-300">4 Jun 2022</span>
          </div>
        </div>
        <div className="flex mt-6">
          <div>
            <Image
              src={svgimg}
              alt="image"
              width={110}
              height={78}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col ml-3">
            <h3 className="text-md text-gray-900 dark:text-white">
              <Link href="/">HTML Space – How to Add Spaces in HTML</Link>
            </h3>
            <span className="text-gray-600 dark:text-gray-300">4 Jun 2022</span>
          </div>
        </div>
        <div className="flex mt-6 ">
          <div>
            <Image
              src={svgimg}
              alt="image"
              width={110}
              height={78}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col ml-3">
            <h3 className="text-md text-gray-900 dark:text-white">
              <Link href="/">HTML Space – How to Add Spaces in HTML</Link>
            </h3>
            <span className="text-gray-600 dark:text-gray-300">4 Jun 2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostWidget;
