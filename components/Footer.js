import React from "react";
import Link from "next/link";
import { footer } from "../assets/data";
import { siteName } from "../assets/variables";
const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-white dark:bg-secondary-dark  border-t-2 border-gray-100  py-16">
      <ul className="md:flex text-center">
        {footer.map((item) => (
          <li
            key={item.slug}
            className="mx-3 text-gray-600 dark:text-gray-200 hover:text-indigo-600"
          >
            <Link href={item.slug}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <div>
        <p className="py-4 text-sm text-gray-900 dark:text-gray-300">
          Copyright © 2022 by {siteName} All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
