
{/* Components */ }
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Faq from "./Faq";
import HowItWorks from "./HowItWorks";
import Why from "./Why";

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
