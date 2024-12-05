import React from "react";
import FillButton from "./FillButton";

function Promotion() {
  return (
    <div className=" md:mt-0 bg-fixed bg-cover bg-[url('/plane.avif')]">
      <div className="flex flex-col bg-scroll bg-blue-950 w-full h-full  bg-opacity-70 items-center justify-center px-20">
        <h1 className="text-center text-2xl md:text-4xl py-10 pt-32 text-white font-semibold">
          Let us know your aircraft maintenance needs.
        </h1>
        <p className="text- md:text-2xl text-white ">
          Aircraft maintenance solutions tailored to the specific needs and
          scale of your operation.
        </p>
        <div className="py-10 z-10 text-white">
          <FillButton name={"CONTACT US"} link={"/contact"} />
        </div>
      </div>
    </div>
  );
}

export default Promotion;
