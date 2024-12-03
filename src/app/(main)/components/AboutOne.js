import React from "react";
import FillButtonBlue from "./FillButtonBlue";
import Link from "next/link";

function AboutOne() {
  return (
    <div className=" p-10 bg-whie h-full md:h-96">
      <h1 className="md:text-3xl text-blue-900 text-2xl">
        About Aerotech Technicians
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <p className="text-gray-600 md:mr-4 my-4 leading-loose">
            Founded with a vision to redefine the standards of aircraft
            maintenance, Aerotech Technicians has established itself as a
            trusted partner in the aviation industry. With decades of experience
            and a deep understanding of both traditional and next-generation
            aircraft systems, we have built a reputation for providing reliable,
            high-quality maintenance solutions.
          </p>
        </div>
        <div className="col-span-1">
          <p className="text-gray-600 md:mr-4 my-4 leading-loose">
            Our team consists of FAA-certified A&P (Airframe and Powerplant)
            mechanics, avionics specialists, and maintenance managers trained in
            the latest industry technologies and procedures. We pride ourselves
            on our ability to handle everything from routine inspections to
            complex overhauls and emergency AOG (Aircraft on Ground) support.
          </p>
          <div className="w-32 z-10">
            <FillButtonBlue name={"Read More"} link={""} />
          </div>

          {/* <Link
            href={""}
            className={`border flex items-center justify-between gap-2 text-xs md:text-sm py-2 relative md:px-4 px-2 bg-transparent text-blue-950 transition-colors before:absolute before:left-1/2 before:top-0 before:-z-10 before:h-full before:w-full before:origin-center before:scale-x-0 before:bg-blue-900 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100 before:hover:left-0 before:hover:right-0`}
          >
            24/7 Support
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default AboutOne;
