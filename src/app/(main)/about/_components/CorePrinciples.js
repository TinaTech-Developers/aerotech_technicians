"use client";
import React from "react";
import { motion } from "framer-motion";

function CorePrinciples() {
  return (
    <>
      <div className="flex flex-col justify-center mb-10 md:my-10">
        <motion.h1
          initial={{
            y: -100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="md:text-3xl text-blue-900 text-2xl capitalize f text-start"
        >
          core principles
        </motion.h1>
      </div>
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="p-4 md:h-24 h-full w-full border shadow-2xl"
        >
          <div class="md:h-16 h-full border-l-4 px-2 md:pl-6 border-blue-500">
            <h1 className="text-xl py-1 text-blue-500">Vision</h1>
            <p className="text-gray-600">
              To be the best one stop shop for all your general aviation
              services in the region
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="p-4 md:h-24 h-full w-full border shadow-2xl"
        >
          <div class="md:h-16 h-full border-l-4 px-2 md:pl-6 border-blue-500">
            <h1 className="text-xl py-1 text-blue-500">Mission</h1>
            <p className="text-gray-600">
              To make aircraft maintenance safe and affordable
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2.8 }}
          className="p-4 h-full w-full border shadow-2xl"
        >
          <div class="h-full border-l-4 px-2 md:pl-6 border-blue-500">
            <h1 className="text-xl py-1 text-blue-500">Core Values</h1>
            <h2 className="py-1 pt-4 text-blue-500">Commitment</h2>
            <p className="text-gray-600">
              We are dedicated to delivering quality and affordable services
            </p>
            <h2 className="py-1 pt-4 text-blue-500">Team Work</h2>
            <p className="text-gray-600">
              A commitment to common goals through collaboration and
              communication with stakeholders
            </p>
            <h2 className="py-1 pt-4 text-blue-500">Integrity</h2>
            <p className="text-gray-600">
              Inspire trust by being honest, accountable and ethical in
              everything we do
            </p>
            <h2 className="py-1 pt-4 text-blue-500">Excellence</h2>
            <p className="text-gray-600">
              Build lifelong customer relations - lives depend on our quality of
              work
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default CorePrinciples;
