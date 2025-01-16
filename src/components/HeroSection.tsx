import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(TextPlugin);

// const Component = () => {
//   const words = ["Fullstack Developer", "Software Developer", "Pentester"];
//   useGSAP(() => {
//     gsap.to(".cursor", {
//       opacity: 0,
//       repeat: -1,
//       ease: "power2.inOut",
//     });
//   });
//   const boxTl = gsap.timeline();
//   boxTl
//     .to(".box", {
//       duration: 1,

//       delay: 0.5,
//       ease: "power4.inOut",
//     })
//     .from(".hi", { duration: 1, y: "7vw", ease: "power3.out" })
//     .to(".box", {
//       duration: 1,
//       height: "7vw",
//       ease: "elastic.out",
//       onComplete: () => {
//         masterTl.play();
//       },
//     })
//     .to(".box", {
//       duration: 2,
//       autoAlpha: 0.7,
//       yoyo: true,
//       repeat: -1,
//       ease: "rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})",
//     });

//   const masterTl = gsap.timeline({ repeat: -1 }).pause();
//   words.forEach((word) => {
//     const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
//     tl.to(".text", {
//       duration: 1,
//       text: word,
//     });
//     masterTl.add(tl);
//   });
//   return (
//     <div>
//       <br></br>
//       <span className="box"></span>
//       <span className="hi">Hi</span>
//       <span className="text"></span>
//       <span className="cursor">_</span>
//     </div>
//   );
// };

export const HeroSection = () => {
  return (
    <section className="mt-[128px] px-[32px]  h-screen">
      <div className=" w-full xl:w-full lg:w-[1028px] md:w-[960px] mx-auto">
        <div
          className="px-[96px] max-lg:p-3 max-lg:flex-col-reverse items-center justify-center
      text-[#fff] flex"
        >
          <div className="leftSide px-[28px] max-lg:space-y-[28px]">
            <h2 className=" max-lg:mt-[58px] max-lg:text-[38px] text-[64px] font-semibold">
              Hi there<span className=" text-[#FFB809]">!</span>
            </h2>
            <div className=" flex gap-6 ">
              <span className="h-0.5 w-16 mt-3 bg-black dark:bg-white hidden md:block"></span>
              <p className=" text-[21px] break-words text-wrap">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et in
                inventore, aliquid tempore dolore incidunt, veritatis labore
                odit debitis saepe sint nobis nostrum itaque! Et saepe sint
                libero corporis ducimus!
              </p>
            </div>
            <div className=" space-y-[64px] mt-[48px]  text-center flex items-center flex-col">
              <span className="text-[26px]  break-words w-4/5">
                "debitis saepe sint nobis nostrum itaque! Et saepe sint libero
                corporis ducimus!"
              </span>
              <div className="flex gap-[64px]">
                <span className=" bg-[#424242] p-3 rounded-full hover:text-[#FFB809]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </span>
                <span className=" bg-[#424242] p-3 rounded-full hover:text-[#FFB809]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 11v5" />
                    <path d="M8 8v.01" />
                    <path d="M12 16v-5" />
                    <path d="M16 16v-3a2 2 0 1 0 -4 0" />
                    <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                  </svg>{" "}
                </span>
                <span className=" bg-[#424242] p-3 rounded-full hover:text-[#FFB809]">
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35px"
                    height="35px"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                  </svg>{" "}
                </span>
              </div>

              <button
                className="group flex items-center gap-3 bg-[#FFB809] 
                hover:scale-110 transition-all font-[600] duration-500 
                ease-in-out text-black  text-[21px]
               px-[26px] py-2 rounded-xl"
              >
                <span> Download Resume </span>{" "}
                <svg
                  aria-hidden="true"
                  height="24px"
                  width="24px"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="download"
                  className="svg-inline--fa fa-download group-hover:animate-bounce"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div className="rightSide  max-lg:w-1/2">
            <img src="../../public/images/dev.png" />
            <p className=" font-[700] mt-4 text-[28px] text-center ">
              Priyanshu Tiwari
            </p>
            <p className="text-gray-600 mt-4 text-center text-[21px]">
              @priyanshu.dev
            </p>{" "}
            <p className="text-[#FFB809] mt-4 text-center text-[21px]">
              Full stack Developer
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
