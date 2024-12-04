import React from "react";
import FillButtonBlue from "./FillButtonBlue";

function QualityAndSafety() {
  return (
    <div className="bg-scroll bg-[url('/new.avif')] bg-cover bg-no-repeat w-full md:min-h-screen md:h-[400px] h-[600px] relative">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent opacity-95">
        <div className="flex flex-col items-center justify-center text-white z-50 py-10 md:mt-10 mx-auto">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Safety, Quality, Commitment
          </h1>
          <p className="text-center px-4 md:px-32 my-10">
            In aircraft maintenance, Safety, Quality, and Commitment are key to
            ensuring reliability. Safety comes first with strict inspections and
            protocols. Quality is maintained through thorough diagnostics and
            precision in repairs. The team’s Commitment ensures fast, efficient
            service, minimizing downtime. These principles work together to
            ensure every flight is safe and dependable.
          </p>

          <h1 className="text-2xl md:text-3xl font-semibold capitalize">
            Building a global footprint
          </h1>
          <p className="text-center px-4 md:px-32 my-10">
            Building a global footprint in aircraft maintenance means expanding
            our reach and expertise across the world. By establishing a network
            of highly skilled technicians, state-of-the-art facilities, and
            strategic partnerships, we ensure that top-tier maintenance services
            are available wherever needed. This global presence allows us to
            provide reliable, consistent support to airlines, enhancing safety,
            efficiency, and operational performance across international
            markets.
          </p>
          <FillButtonBlue name={"Learn More"} link={""} />
        </div>
      </div>
    </div>
  );
}

export default QualityAndSafety;
