import { useEffect, useState } from "react";
import { Certificate } from "../components/Certificate";
import { Contact } from "../components/Contact";
import { Education } from "../components/Education";
import { Experinces } from "../components/Experinces";
import { Footer } from "../components/Footer";
import { HeroSection } from "../components/HeroSection";
import NavBar from "../components/NavBar";

import { SkillsSection } from "../components/SkillsSection";
import { Works } from "../components/Works";

export const Header = () => {
  return <section></section>;
};

const BouncingArrow = () => {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById("heroSection");

    if (heroSection) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setShowArrow(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      observer.observe(heroSection);

      return () => {
        observer.disconnect();
      };
    }
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    if (targetId) {
      const targetEle = document.getElementById(targetId);
      if (targetEle) {
        targetEle.scrollIntoView({
          behavior: "smooth",
        });
      }
    }
  };

  return showArrow ? (
    <div className="fixed bottom-0 right-0 m-[64px]">
      <div className="bg-[#424242] animate-bounce duration-100 transition-all ease-in-out hover:bg-primary-0 px-3 py-[11px] group relative rounded-full">
        <a onClick={scrollToSection} href="#heroSection">
          <svg
            fill="#000000"
            height="20px"
            width="20px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330"
            className="fill-primary-0"
          >
            <path
              className="group-hover:fill-[#424242]"
              d="M213.107,41.894l-37.5-37.5c-5.857-5.858-15.355-5.858-21.213,0l-37.5,37.5
              c-4.29,4.29-5.573,10.742-3.252,16.347c2.322,5.605,7.792,9.26,13.858,9.26H150V315c0,8.284,6.716,15,15,15c8.284,0,15-6.716,15-15
              V67.5h22.5c6.067,0,11.537-3.655,13.858-9.26C218.68,52.635,217.397,46.184,213.107,41.894z"
            />
          </svg>
        </a>
      </div>
    </div>
  ) : null;
};

export const HomePage = () => {
  return (
    <main className="bg-[#28242C] overflow-x-hidden  w-full h-screen main-scroller relative">
      <NavBar />
      <HeroSection />
      <SkillsSection />
      <Experinces />
      <Works />
      <Education />
      <Certificate />
      <Contact />
      <Footer />
      <BouncingArrow />
    </main>
  );
};
