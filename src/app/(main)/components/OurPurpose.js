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
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import FillButton from "./FillButton";

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

function OurPurpose() {
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
    <div className="grid grid-cols-1 md:grid-cols-5  md:m-10 mt-10  gap-10 bg-white p-10">
      <motion.div
        initial={{
          x: -100,

          opacity: 0,
        }}
        whileInView={{
          x: 0,

          opacity: 1,
        }}
        transition={{ duration: 0.8 }}
        className="col-span-1 md:col-span-2 text-blue-900"
      >
        <h1 className="text-sm uppercase">Aerotech Stories</h1>
        <h2 className="text-2xl font-semibod md:text-4xl my-4">
          Our Mission in
          <br /> action
        </h2>
        <p className="my-4 text-gray-600">
          {
            " At Aerotech Technicians, our mission is to provide reliable and expert aircraft maintenance solutions in Harare. With a focus on safety, precision, and innovation, we ensure your aircraft operates at peak performance. Discover how our commitment to quality and service drives us to deliver unparalleled maintenance for aviation professionals and enthusiasts alike. This description emphasizes the company's mission and commitment to excellence while aligning with the context of Our Mission in Action "
          }
        </p>
        <div className="flex items-center justify-center gap-12 md:mt-10">
          <IoIosArrowDropleft
            size={32}
            className="cursor-pointer hover:bg-text-white"
            onClick={goPrev} // Trigger slide to previous slide on click
          />
          <IoIosArrowDropright
            size={32}
            className="cursor-pointer hover:bg-text-white"
            onClick={goNext} // Trigger slide to next slide on click
          />
        </div>
      </motion.div>
      <div className="col-span-1 md:col-span-3 ">
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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
          }}
          className=""
        >
          <SwiperSlide>
            <Card
              image={"/home.jpeg"}
              heading={"Expert Aircraft Maintenance"}
              description={
                "We provide comprehensive inspections, repairs, and overhauls to ensure your aircraft is always in top condition. Safety and precision are our priorities."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={"/safety.jpg"}
              heading={"Safety & Reliability"}
              description={
                "Your aircraft's safety is our top priority. We adhere to the highest industry standards to provide reliable and secure maintenance services."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={"/mision.jpg"}
              heading={"Our Mission in Action"}
              description={
                "At Aerotech Technicians, our mission is to ensure that every flight is safe and every aircraft operates at peak performance. Trust our team to provide exceptional service."
              }
            />
          </SwiperSlide>
          <SwiperSlide>
            <Card
              image={"/safety.webp"}
              heading={"Skilled & Certified Technicians"}
              description={
                "Our team consists of highly trained and certified professionals with extensive experience in aircraft maintenance. We ensure that your aircraft is always in expert hands."
              }
            />
          </SwiperSlide>
        </StyledSwiper>
      </div>
    </div>
  );

  function Card({ image, heading, description }) {
    return (
      <div className="w-80 h-full border bg-white mx-auto">
        <Image
          src={image}
          alt=""
          height={100}
          width={200}
          className="w-80 h-48 object-cover top-0"
        />
        <div className="p-4">
          <h1 className="text-lg font-semibold text-blue-900">{heading}</h1>
          <hr className="w-16 p-[2px] bg-blue-500" />
          <p className="text-gray-800 my-4 ">{description}</p>

          <div className="w-28">
            <FillButton name={"Read More"} link={""} />
          </div>
        </div>
      </div>
    );
  }
}

export default OurPurpose;
