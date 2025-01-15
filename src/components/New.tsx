import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SlidingText = () => {
  //   useGSAP(() => {
  //     gsap.from(
  //       ".text-slide",

  //       {
  //         x: -200,
  //         opacity: 0,
  //         duration: 1.2,
  //         scrollTrigger: {
  //           trigger: ".text-slide",
  //           start: "top 75%",
  //           end: "bottom 50%",
  //           toggleActions: "play none none reverse",
  //           markers: true,
  //           scroller: ".main-scroller", // Ensure this matches the intended scroller
  //         },
  //       }
  //     );
  //   });

  return (
    <div style={{ height: "150vh" }}>
      <div
        className="text-slide"
        style={{
          fontSize: "24px",
          padding: "20px",
          backgroundColor: "#f0f0f0",
        }}
      >
        This text slides in from the left!
      </div>
    </div>
  );
};

export default SlidingText;
