import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

gsap.registerPlugin(ScrollTrigger);

export const Education = () => {
  const useGSAPAnimation = (className: string) => {
    useGSAP(() => {
      gsap.from(className, {
        x: -300,
        opacity: 0,
        duration: 1.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: className,
          start: "top 80%",
          end: "bottom 50%",
          toggleActions: "play none none reverse",
          markers: false,
          scroller: ".main-scroller",
        },
      });
    }, [className]);
  };
  useGSAPAnimation(`.schl`);
  useGSAPAnimation(`.clg`);
  return (
    <section
      id="education"
      className="education xl:w-[1496px] mt-[64px]  mx-auto lg:w-[1028px] md:w-[960px]"
    >
      <div className="py-[96px] px-[64px]">
        <h2
          className="font-[700] mb-[96px] text-center text-white
         text-[48px]"
        >
          Education
        </h2>
        <div className=" space-y-[64px]">
          <div className=" schl space-y-3">
            <p className="text-lg font-[600] text-[#FFC400]">2020-2022</p>
            <p
              className="font-[700] text-white
         text-[38px]"
            >
              High School S.V sec-8
            </p>
            <p
              className="font-[700] text-white
         text-[28px]"
            >
              Completed PCM
            </p>
            <span
              className="font-[500] text-white
         text-[18px]"
            >
              85.5%
            </span>
          </div>
          <hr className="  border-gray-500"></hr>
          <div className=" clg space-y-3">
            <p className="text-lg font-[600] text-[#FFC400]">2023-2027</p>
            <p
              className="font-[700] text-white
         text-[38px]"
            >
              University of Delhi
            </p>
            <p
              className="font-[700] text-white
         text-[28px]"
            >
              Bachelor of Science(Hons) Computer Science
            </p>
            <span
              className="font-[500] text-white
         text-[18px]"
            >
              Pursuing
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
