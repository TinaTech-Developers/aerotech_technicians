"use client";
import React from "react";
import FillButton from "./FillButton";
import { motion } from "framer-motion";
import Link from "next/link";

function Maintanance() {
  return (
    <div className="bg-scroll bg-[url('/MRO-aerospace.jpg')] bg-cover bg-no-repeat w-full md:min-h-screen md:h-[400px] h-[600px] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-95">
        <motion.div
          initial={{
            y: -100,

            opacity: 0,
          }}
          whileInView={{
            y: 0,

            opacity: 1,
          }}
          transition={{ duration: 1.8 }}
          className="mt-[30%] md:mt-32 mx-4 sm:mx-6 md:mx-10 text-white  w-72 md:w-96 bg-blue-900 p-4 sm:p-4 md:p-8"
        >
          <div className="p-2 border-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold">
              Compliance Monitoring
            </h1>
            <p className="my-4 leading-loose text-sm sm:text-base">
              Ensuring Aerotech Technicians maintains the highest standards and
              complies with all regulatory requirements.
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

export default Maintanance;
