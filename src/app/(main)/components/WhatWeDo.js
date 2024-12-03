import Image from "next/image";
import React from "react";
import FillButtonBlue from "./FillButtonBlue";

function WhatWeDo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 px-10 h-full md:h-[500px] p-10 bg-white">
      <div className="col-span-1 p-4 text-blue-900 ">
        <p className="text-sm uppercase">What we do</p>
        <h1 className="text-2xl font-semibod md:text-4xl my-4">
          A comprehensive suite of <br />
          services
        </h1>
        <p className="my-6 leading-loose text-gray-600">
          We provide nose-to-tail solutions that address the various
          maintenance, overhaul, and repair requirements of airlines worldwide.
          We can deliver because we have the personnel, the resources, and the
          experience.
        </p>
        <div className="w-32 z-50">
          <FillButtonBlue name={"Learn More"} link={""} />
        </div>
      </div>
      <div className="col-span-1 p-4">
        <div className="flex flex-col items-center justify-center">
          <Image src={"/wire.png"} alt="" height={600} width={600} />
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
