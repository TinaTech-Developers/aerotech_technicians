"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IoMdMenu, IoMdClose, IoMdArrowForward } from "react-icons/io";

function Navbar() {
  let links = [
    { name: "Home", link: "/" },
    { name: "Services", link: "/services" },

    { name: "About Us", link: "/about" },
    { name: "Contact ", link: "/contact" },
  ];

  let [open, setOpen] = useState(false);
  // [#06402B] bg
  return (
    <div className="shadow-lg w-full fixed top-0 left-0 z-50 bg-white">
      <div className="md:flex items-center justify-between bg- py-4  md:px-10 px-7 h-20 border-b-">
        <Link href={"/"} className="text-2xl font-bold text-blue-900">
          Aerotech Technicians
        </Link>
        {/* <div className="w-[70px] h-16 mb-2">
          <Image
            src={"/logo1.png"}
            alt=""
            height={200}
            width={150}
            className="object-cover "
          />
        </div> */}

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? <IoMdClose color="blue" /> : <IoMdMenu color="blue" />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-4
        absolute md:static bg-white  x-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
          open ? "top-20 opacity-100" : "top-[-490px]"
        } `}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base md:my-0 my-4">
              <a href={link.link} className="group text-blue-900">
                {link.name}
                <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden md:block">
          <Link
            href={""}
            className={`border flex items-center justify-between gap-2 text-xs md:text-sm py-2 relative md:px-4 px-2 bg-transparent text-blue-950 transition-colors before:absolute before:left-1/2 before:top-0 before:-z-10 before:h-full before:w-full before:origin-center before:scale-x-0 before:bg-blue-900 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 before:hover:left-0 before:hover:right-0`}
          >
            24/7 Support
            <IoMdArrowForward />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
