import React from "react";
import { IoIosArrowForward, IoLogoInstagram } from "react-icons/io";
import { BiLogoFacebook, BiSupport } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

function Footer() {
  return (
    <div className="p-10 bg-black">
      <div className=" grid grid-cols-1 md:grid-cols-3  text-gray-600 md:h-full">
        <div className="col-span-1 md:p-4 ">
          {/* logo */}
          <h1>Mt Hampden Harare Engineering Company Limited</h1>
          <p className="my-10">Site 10A Charles Prince Airport</p>
          <p className="pb-5">
            Mt Hampden Harare, <br />
            Zimbabwe
          </p>
          <hr />
          <span className="flex items-center justify-between text-xl font-semibold hover:text-blue-900 py-4">
            <p> Contact us</p>
            <IoIosArrowForward />
          </span>
        </div>
        <div className="col-span-1 md:p-4">
          <div className="flex items-center justify-start gap-6">
            <BiSupport size={32} />{" "}
            <p className="text-xl font-semibold">24/7 AOG Support</p>
          </div>
          <p className="my-6">Email: info@aerotech.co.zw</p>
          <p className="font-semibold mb-3">AOG Hotline</p>
          <p>(000)</p>
        </div>
        <div className="col-span-1 md:p-4">
          <h1 className="text-xl font-semibold">Discover More</h1>

          <span className="flex items-center justify-between   hover:text-blue-900 py-4">
            <p>Services</p>
            <IoIosArrowForward />
          </span>
          <hr />
          <span className="flex items-center justify-between   hover:text-blue-900 py-4">
            <p>About us</p>
            <IoIosArrowForward />
          </span>
          <hr />
          <span className="fex-col items-center justify-start py-4 gap-4">
            <p className="py-4">Aerotech Group</p>
            <div className="flex items-center justify-start gap-4">
              <IoLogoInstagram size={32} className="hover:text-blue-900" />
              <BiLogoFacebook size={32} className="hover:text-blue-900" />
              <FaXTwitter size={32} className="hover:text-blue-900" />
            </div>
          </span>
        </div>
      </div>
      <hr className="my-5 md:my-0" />
      <span className="flex items-center justify-center text-white mt-2">
        Developed by{" "}
        <Link className="text-blue-900" href={"www.tinasoftnexus.co.zw"}>
          TinaSoft Nexus
        </Link>
      </span>
    </div>
  );
}

export default Footer;
