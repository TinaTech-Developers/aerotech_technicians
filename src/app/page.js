import Image from "next/image";
import HeroSection from "./(main)/components/HeroSection";
import OurPurpose from "./(main)/components/OurPurpose";
import AboutOne from "./(main)/components/AboutOne";
import MaintananceSimpleSection from "./(main)/components/MaintananceSimpleSection";
import Maintanance from "./(main)/components/Maintanance";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OurPurpose />
      <MaintananceSimpleSection />
      <AboutOne />
      <Maintanance />
    </>
  );
}
