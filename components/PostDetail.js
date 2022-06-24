import React from "react";
import Image from "next/image";
import Img from "../assets/images/htmlspace.jpg";

const PostDetail = ({ post }) => {
  return (
    <div className="p-4 sm:p-8 bg-gray-50 dark:bg-secondary-dark rounded-2xl mt-8">
      <div className="border-b-4 border-white ">
        <h1 className="text-3xl text-gray-900 dark:text-white">HTML Space – How to Add Spaces in HTML</h1>
        <div className="sm:flex py-4 text-gray-600 dark:text-gray-300">
          <span className="flex">
            <svg
              className="w-6 h-6 mx-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="dark:text-gray-200">Created by Abdelmjid</span>
          </span>
          <span className="flex my-4 sm:my-0 sm:mx-8">
            <svg
              className="w-6 h-6 mx-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span className="dark:text-gray-200">Category in HTML</span>
          </span>
          <span className="flex">
            <svg
              className="w-6 h-6 mx-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span className="dark:text-gray-200">30 Jun 2021</span>
          </span>
        </div>
      </div>

      <div>
        <div className="flex justify-center py-4">
          <Image src={Img} alt="fdsfd" width={520} height={380} className="rounded-2xl" />
        </div>
        <div className="pt-4 text-gray-600 dark:text-gray-200">
          <p>
            Adding a space to your featuredImageHTML can be deceptively
            difficult. And there are at least 5 of ways to go about doing this.
            This tutorial will show you several examples. It will also show you
            how to use fancy versions of space, too. You can do all this in raw
            HTML, without the need for CSS. But be advised that CSS is the
            preferred way to add space to your HTML. And freeCodeCamp has a ton
            of tutorials on how to accomplish this using the CSS box model. What
            is the ASCII character for a space? The ASCII character code for a
            space is 20. But this is just the standard way. There are several
            There are 5 types of spaces in HTML that you can use. To the naked
            eye, they look the same but they serve slightly different purposes.
            And there is also the Tab Character, which represents pressing the
            tab key on your keyboard. And the Carriage Return Character, which
            represents pressing the enter key on your keyboard.
          </p>
          <br />
          <p>
            Adding a space to your featuredImageHTML can be deceptively
            difficult. And there are at least 5 of ways to go about doing this.
            This tutorial will show you several examples. It will also show you
            how to use fancy versions of space, too. You can do all this in raw
            HTML, without the need for CSS. But be advised that CSS is the
            preferred way to add space to your HTML. And freeCodeCamp has a ton
            of tutorials on how to accomplish this using the CSS box model. What
            is the ASCII character for a space? The ASCII character code for a
            space is 20. But this is just the standard way. There are several
            There are 5 types of spaces in HTML that you can use. To the naked
            eye, they look the same but they serve slightly different purposes.
            And there is also the Tab Character, which represents pressing the
            tab key on your keyboard. And the Carriage Return Character, which
            represents pressing the enter key on your keyboard.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
