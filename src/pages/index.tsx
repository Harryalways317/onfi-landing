import { useState } from "react";

import HeroSection from "@/components/landing/HeroSection";
import Nav from "@/components/landing/Nav";
import WorksWith from "@/components/landing/WorksWith";
import AutomateFinance from "@/components/landing/AutomateFinance";
import BackedBy from "@/components/landing/BackedBy";
import NeoGPTSection from "@/components/landing/NeoGPTSection";
import MediaArticles from "@/components/landing/MediaArticles";
import ReliableSection from "@/components/landing/ReliabeSection";
import DeployedSecurely from "@/components/landing/DeployedSecurely";
import OurBlog from "@/components/landing/OurBlog";
import Footer from "@/components/landing/Footer";
import Certifications from "@/components/landing/Certifications";


export default function Home() {
  const [openNav,setOpenNav] = useState(false);
  return (
    <div onClick={()=>{
      setOpenNav(false);
    }} className='w-screen min-h-screen flex flex-col items-center bg-[#FEFDF5]'>
      <Nav openNav={openNav} setOpenNav={setOpenNav} />
      <div id="hero">
        <HeroSection />
      </div>
      <div id="features">
        <WorksWith />
        <Certifications />
        <AutomateFinance />
        <BackedBy />
        <NeoGPTSection />
      </div>
      {/* <div id="pricing"> */}
        <MediaArticles />
      {/* </div> */}
    
        <ReliableSection />
      <div id="pricing">
        <DeployedSecurely />
      </div>
 
      <div id="blogs">
        <OurBlog />
        </div>
        <div id="contact">
        <Footer />
      </div>
    </div>
  );
}
