"use client";
import React from "react";
import FillButton from "./FillButton";
import { motion } from "framer-motion";
import Link from "next/link";

function MaintananceSimpleSection() {
  return (
    <div className="bg-scroll bg-[url('/home2.jpg')] bg-cover bg-no-repeat w-full min-h-screen md:h-[400px] h-[400px] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-95">
        <motion.div
          initial={{
            x: -100,
            scale: 0,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            scale: 1,
            opacity: 1,
          }}
          transition={{ duration: 0.8 }}
          className="mt-[30%] md:mt-32 mx-4 sm:mx-6 md:mx-10 text-white  w-72 md:w-96 bg-blue-900 p-4 sm:p-4 md:p-8"
        >
          <div className="p-2 border-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Aircraft Maintenance
            </h1>
            <p className="my-4 leading-loose text-sm sm:text-base">
              We understand the importance of aircraft reliability and the
              critical need for safety compliance in aviation. Let us ensure
              your aircraft is performing at its best.
            </p>
            <div className="w-32 border border-white">
              <Link
                href={""}
                className="flex items-center justify-between  py-2 relative md:px-4 px-2 bg-transparent hover:text-blue-950 transition-colors before:absolute before:left-1/2 before:top-0 before:-z-10 before:h-full before:w-full before:origin-center before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] text-white before:hover:scale-x-100 before:hover:left-0 before:hover:right-0"
              >
                See More
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MaintananceSimpleSection;
