import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="container mx-auto flex p-2 justify-between border-b-2 items-center">
      <h2 className="text-3xl font-bold text-red-500">BlogHouse</h2>
      <ul className="flex  gap-4">
        <li>
          <Link className="hover:text-red-500" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href={"/contact-us"}>
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="hover:text-red-500" href={"/news"}>
            News
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
