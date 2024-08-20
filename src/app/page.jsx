"use client";
{
  /* Components */
}
import AboutUs from "../components/Home/AboutUs";
import Banner from "../components/Home/Banner";
import Faq from "../components/Home/Faq";
import HowItWorks from "../components/Home/HowItWorks";
import Why from "../components/Home/Why";

// export const metadata = {
//   title: "Home || FitMAtch",
//   description: "Home || FitMAtch",
// };

export default function Home() {
  return (
    <>
     
      <Banner />
      <AboutUs />
      <Why />
      <HowItWorks />
      <Faq />
    </>
  );
}
