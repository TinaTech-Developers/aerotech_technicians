"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
function SubHero({ image, heading, description }) {
  return (
    <div className="bg-cover bg-no-repeat bg-center w-full h-[400px] md:h-[400px] relative">
      <div className="bg-scroll h-full w-full relative">
        <Image
          src={image}
          alt="home"
          layout="fill" // Ensures the image takes up the full container size
          objectFit="cover" // Ensures the image covers the area, maintaining aspect ratio
          className="absolute inset-0 object-cover"
          quality={100} // Make sure the quality is set to 100 to maintain high image quality
        />
        <motion.div
          className="relative p-4 md:ml-36 md:m-10 m-4 w-72 bg-blue-800 opacity-5 md:w-96 bottom-16 md:botton-0"
          initial={{
            y: 250,
            opacity: 0,
          }}
          whileInView={{
            y: 250,
            opacity: 0.8,
          }}
          transition={{
            y: { duration: 0.6, ease: "easeOut" },
            opacity: { duration: 0.4 },
          }}
          viewport={{ once: true }}
        >
          <motion.h1
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
            className="text-xl font-bold text-white flex items-center justify-center"
          >
            <div className="w-full h-full p-2 border-2 border-white">
              <h1>{heading}</h1>
              <p className="text-sm font-normal">{description}</p>

              <div className="hidden md:block mx-1 border my-3 py-[7px] border-white text-white w-28 text-sm">
                <Link
                  href={""}
                  className={`flex items-center justify-between text-xs md:text-sm py-2 relative md:px-4 px-2 bg-transparent hover:text-blue-950 transition-colors before:absolute before:left-1/2 before:top-0 before:-z-10 before:h-full before:w-full before:origin-center before:scale-x-0 before:bg-white before:transition-transform before:duration-300 before:content-[''] text-white before:hover:scale-x-100 before:hover:left-0 before:hover:right-0`}
                >
                  See More
                  <IoMdArrowForward />
                </Link>
              </div>
            </div>
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}

export default SubHero;
