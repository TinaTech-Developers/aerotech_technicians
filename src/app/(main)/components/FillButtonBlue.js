import Link from "next/link";
import React from "react";

function FillButtonBlue({ name, link }) {
  return (
    <Link
      href={link}
      className={`border flex items-center justify-between gap-2  py-2 relative md:px-4 px-2 bg-transparent text-blue-950 transition-colors before:absolute before:left-1/2 before:top-0 before:-z-10 before:h-full before:w-full before:origin-center before:scale-x-0 before:bg-blue-900 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 before:hover:left-0 before:hover:right-0`}
    >
      {name}
    </Link>
  );
}

export default FillButtonBlue;
