"use client";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay"; // Import autoplay styles
import styled from "@emotion/styled";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";
import { IoArrowRedoCircleOutline } from "react-icons/io5";

const Slide = styled.div`
  height: 200px; /* Adjust height as needed */
  border: 1px solid #ccc; /* Example border */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5; /* Example background */
`;

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px; /* Space between pagination bullets */
  margin-top: 10px; /* Space above pagination */
`;

const StyledSwiper = styled(Swiper)`
  /* Ensure the Swiper has room for the pagination */
  padding-bottom: 40px; /* Adjust based on the pagination height */
`;

import FillButtonBlue from "./FillButtonBlue";
import Promotion from "./Promotion";

function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null); // Ref to access the Swiper instance

  // Function to move to the previous slide
  const goPrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  // Function to move to the next slide
  const goNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 h-full md:h-[500px] p-10 bg-white">
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
          className="col-span-1 p-4 text-blue-900 "
        >
          <p className="text-sm uppercase">What we do</p>
          <h1 className="text-2xl font-semibod md:text-4xl my-4">
            A comprehensive suite of <br />
            services
          </h1>
          <p className="my-6 leading-loose text-gray-600">
            We provide nose-to-tail solutions that address the various
            maintenance, overhaul, and repair requirements of airlines
            worldwide. We can deliver because we have the personnel, the
            resources, and the experience.
          </p>
          <div className="w-32 z-50">
            <FillButtonBlue name={"Learn More"} link={""} />
          </div>
        </motion.div>
        <div className="col-span-1 p-4 h-96 ">
          <motion.div
            initial={{
              y: 100,

              opacity: 0,
            }}
            whileInView={{
              y: 0,

              opacity: 1,
            }}
            transition={{ duration: 1.8 }}
            className="flex flex-col items-center justify-center object-cover"
          >
            <Image
              src={"/plane.avif"}
              alt=""
              height={600}
              width={600}
              className="h-96  w-80 md:w-full md:h-full object-cover border-2 border-blue-900 "
            />
          </motion.div>
        </div>
      </div>
      <Promotion />
      <div className="px-10 md:mx-20 my-5 md:mt-10">
        {/* <h1 className="mb-10    md:text-3xl t text-2xl  text-blue-900 text-center">
          Caliberaton Services
        </h1> */}
        <div className=" md:flex items-center justify-center gap-4 ">
          <div className="md:block flex items-center justify-center mb-5">
            <IoMdArrowRoundBack
              size={32}
              color="blue"
              className="cursor-pointer"
              onClick={goPrev}
            />
          </div>
          <StyledSwiper
            ref={swiperRef} // Attach the swiper instance to the ref
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]} // Add Autoplay module here
            spaceBetween={50}
            // pagination={{ clickable: true }}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            autoplay={{
              delay: 3000, // Auto slide every 3 seconds
              disableOnInteraction: false, // Allow auto-slide even when interacting
            }}
            loop={true} // Explicitly enable loop
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 5,
              },
            }}
            className=""
          >
            <SwiperSlide>
              <Card
                heading={"Power Supply Units"}
                description={
                  "In airplane maintenance, power supply units give avionics and lighting, among other onboard systems, steady electrical power. They eliminate power fluctuations that can impair system functionality by converting and regulating voltage to guarantee steady performance. Electrical systems' dependability and safety during flight operations are guaranteed by routine testing."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                heading={"Temperature Controllers"}
                description={
                  "Control and preserve the temperature of vital components in airplane maintenance, including avionics, engines, and cabin conditions. They guarantee that systems run within safe temperature ranges, avoiding malfunction or overheating. Accurate temperature control and overall system dependability depend on routine testing and calibration."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                heading={"Gauges & Regulators"}
                description={
                  "In aircraft maintenance monitor and control pressure in systems like fuel, hydraulics, and oxygen. Gauges provide accurate pressure readings, while regulators maintain safe operating limits. These components are essential for ensuring the aircraft's systems function properly and safely during flight. Regular testing ensures their reliability and accuracy."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                heading={"Gas Pressure Gauges & Indicating Instruments"}
                description={
                  "In aircraft maintenance measure and display pressure levels in gas systems, such as oxygen or nitrogen. These instruments ensure that gas systems operate within safe pressure ranges, preventing malfunctions. Regular calibration and testing are essential for accurate readings and reliable system performance."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                heading={"Torque wrenches & Testers"}
                description={
                  "In aircraft maintenance are used to apply and measure precise torque on fasteners to ensure they are tightened to manufacturer specifications. These tools help prevent over-tightening or under-tightening, which could lead to component failure. Regular calibration ensures accuracy and reliability for safe aircraft operation."
                }
              />
            </SwiperSlide>
            <SwiperSlide>
              <Card
                heading={"Pressure testing and certification"}
                description={
                  "In aircraft maintenance involves subjecting components like fuel tanks, hydraulic systems, or air conditioning units to controlled pressure to check for leaks and structural integrity. Once the system passes the test, it is certified as airworthy, ensuring it meets safety standards for flight operations."
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                heading={"Magneto Sychronisers"}
                description={
                  "We ensure that the magnetos (which generate electrical power for the spark plugs) are properly synchronized. This helps maintain engine efficiency and prevents misfiring by ensuring the timing of the ignition system is correct. Regular testing and calibration are essential for optimal engine performance and reliability."
                }
              />
            </SwiperSlide>

            <SwiperSlide>
              <Card
                heading={"Cable Tensiomenter"}
                description={
                  "In order to ensure that control cables are appropriately adjusted for safe and responsive operation, cable tension meters are used in aircraft maintenance. The operation of flight control systems depends on precise tension. Reliable measurements and safe airplane control are ensured by routine meter calibration and testing."
                }
              />
            </SwiperSlide>
          </StyledSwiper>
          <div className="md:block flex items-center justify-center -mt-5">
            <IoMdArrowRoundForward size={32} color="blue" onClick={goNext} />
          </div>
        </div>
      </div>
    </>
  );

  function Card({ heading, description }) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0,
          x: -100,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{ duration: 0.9 }}
        className="flex flex-col justify-center items-center w-80 h-96 md:w-60 border bg-blue-900 text-white hover:text-gray-600  opacity- p-4 hover:bg-white hover:shadow-2xl"
      >
        <h1 className="font-semibold text-lg capitalize">{heading}</h1>
        <p className="text-sm my-4 ca">{description}</p>
        <Link href={"/services"} className="">
          <IoArrowRedoCircleOutline size={35} className="" />
        </Link>
      </motion.div>
    );
  }
}

export default WhatWeDo;
