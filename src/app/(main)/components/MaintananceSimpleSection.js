"use client";
import React from "react";
import FillButton from "./FillButton";
import { motion } from "framer-motion";
import Link from "next/link";

function MaintananceSimpleSection() {
  return (
    <div className="bg-scroll bg-[url('/home2.jpg')] object-cover bg-no-repeat w-full min-h-screen md:h-[400px] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-95">
        <motion.div
          initial={{
            y: 0,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 0.8,
          }}
          transition={{
            y: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.4 },
          }}
          viewport={{ once: true }}
          className="mt-10 md:mt-32 mx-4 sm:mx-6 md:mx-10 text-white w-full max-w-[380px] sm:max-w-[500px] md:w-96 bg-blue-900 p-6 sm:p-8 md:p-8"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
            Aircraft Maintenance
          </h1>
          <p className="my-4 leading-loose text-sm sm:text-base">
            We understand the importance of aircraft reliability and the
            critical need for safety compliance in aviation. Let us ensure your
            aircraft is performing at its best.
          </p>
          <div className="w-full max-w-[150px] sm:max-w-[180px] md:w-32 border border-white">
            <Link
              href={""}
              className="flex items-center justify-between text-xs sm:text-sm md:text-base py-2 relative md:px-4 px-2 bg-transparent hover:text-blue-950 transition-colors before:absolute before:left-1/2 before:top-0 before:-z-10 before:h-full before:w-full before:origin-center before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] text-white before:hover:scale-x-100 before:hover:left-0 before:hover:right-0"
            >
              See More
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MaintananceSimpleSection;
