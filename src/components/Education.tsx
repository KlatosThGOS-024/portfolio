import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const Education = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".schl",
      {
        opacity: 0,
        x: -300,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        scrollTrigger: {
          trigger: ".schl",
          start: "top 20%", // Starts animation when .schl is 80% in the viewport
          end: "top 50%", // Ends animation when .schl is 20% out of the viewport
          onEnter: () => {
            gsap.to(".schl", { opacity: 1, x: 0, duration: 1.2 });
          },
          onLeave: () => {
            gsap.to(".schl", { opacity: 0, x: -300, duration: 1.2 });
          },
          onEnterBack: () => {
            gsap.to(".schl", { opacity: 1, x: 0, duration: 1.2 });
          },
          onLeaveBack: () => {
            gsap.to(".schl", { opacity: 0, x: -300, duration: 1.2 });
          },
          scrub: true, // Ensures smooth transition between states
        },
      }
    );
  });
  return (
    <section className="xl:w-[1496px] mt-[64px]  mx-auto lg:w-[1028px] md:w-[960px]">
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
