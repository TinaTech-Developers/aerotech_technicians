"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HeroCard from "./HeroCard";
import Link from "next/link";

function HeroSection() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        <SwiperSlide>
          <HeroCard
            image={"/home2.jpg"}
            heading={"Welcome to Aerotech Technicians"}
            description={
              "At Aerotech Technicians, we provide world-class aircraft maintenance solutions, specializing in ensuring airworthiness and operational efficiency for all types of aircraft. Our team of FAA-certified technicians and engineers is dedicated to providing comprehensive, reliable, and fast services to keep your aircraft flying  safely and smoothly."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            image={"/homee.jpeg"}
            heading={"Tailored Solutions for Every Aircraft"}
            description={
              "We understand that every aircraft has unique requirements,  which is why we offer customized maintenance packages  designed to meet your specific needs. Whether you're a  private aircraft owner or a commercial fleet operator, our  experts deliver top-notch services tailored to ensure  maximum performance and safety."
            }
          />
        </SwiperSlide>
        <SwiperSlide>
          <HeroCard
            image={"/engine.jpg"}
            heading={"Advanced Avionics and Technology Support"}
            description={
              " Our advanced avionics systems support also ensures that your aircraft is equipped with the latest technology for seamless flight operations. No matter the scale or complexity of the maintenance needs, Aerotech Technicians is committed to providing dependable, efficient, and professional solutions to keep you in the air with confidence."
            }
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HeroSection;
