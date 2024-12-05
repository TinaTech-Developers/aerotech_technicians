import React from "react";
import SubHero from "../components/SubHero";
import CorePrinciples from "./_components/CorePrinciples";
import AboutOne from "../components/AboutOne";
import Promotion from "../components/Promotion";

function page() {
  return (
    <div className="mt-20">
      <SubHero heading={"About Us"} image={"/about.jpg"} />
      <AboutOne />
      <div className="p-10">
        <CorePrinciples />
      </div>
      <Promotion />
    </div>
  );
}

export default page;
