import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function SkillSec1() {
  useGSAP(() => {
    gsap.from(".frontDiv", {
      x: 200,
      opacity: 0,
      scale: 0.5,
      duration: 0.9,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".frontDiv",
        start: "bottom 90%",
        end: "bottom 90%",
        toggleActions: "play none none reverse",
        scroller: ".main-scroller",
      },
    });

    gsap.from(".BackDiv", {
      x: -200,
      opacity: 0,
      scale: 0.5,
      duration: 0.6,
      ease: "power4.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".frontDiv",
        start: "bottom 90%",
        end: "bottom 90%",
        toggleActions: "play none none reverse",
        scroller: ".main-scroller",
      },
    });

    gsap.from(".firstUpperDiv", {
      y: 200,
      opacity: 0,
      scale: 0.5,
      duration: 0.9,
      ease: "power4.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".firstUpperDiv",
        start: "-550% 90%",
        end: "90% 50%",
        toggleActions: "play none none reverse",
        scroller: ".main-scroller",
      },
    });
    gsap.from(".secondLowerDiv", {
      y: 200,
      opacity: 0,
      scale: 0.5,
      duration: 0.9,
      ease: "power4.out",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".secondLowerDiv",
        start: "-500% 90%",
        end: "-400% 50%",
        toggleActions: "play none none reverse",
        scroller: ".main-scroller",
      },
    });
  });

  return (
    <div className=" p-[64px] lg:flex mt-[64px]  ">
      {/* {LEFT SIDE} */}
      <div>
        <div className="frontDiv flex flex-col items-center">
          <img className="w-[48px]" src="public\icons\frontend.svg" />
          <h2 className="font-[700] text-white mt-4 text-[28px]">
            Frontend Dev
          </h2>
        </div>
        <h3 className="frontDiv text-primary-0 text-center font-[600] mt-[44px] text-lg ">
          Frameworks & Runtime
        </h3>
        <div
          className="grid firstUpperDiv max-lg:grid-cols-2 lg:grid-cols-3 
         mt-[48px] max-lg:gap-y-[64px] lg:space-x-[106px]"
        >
          <div className=" space-y-6 flex flex-col items-center">
            <img
              className="hover:scale-150 transition duration-500 ease-in-out"
              src="/icons/nextjs.svg"
              alt="Next.js Icon"
            />

            <h3 className=" text-[#808080] text-[21px]">Next.js</h3>
          </div>
          <div className=" space-y-6 flex flex-col items-center">
            <img
              src="/icons/nuxtjs.svg"
              className="hover:fill-[#fff] hover:scale-150 transition  duration-500 ease-in-out"
            />
            <h3 className=" text-[#808080] text-[21px]">Nuxt.js</h3>
          </div>
          <div className=" space-y-6 flex flex-col items-center">
            <img
              className="hover:fill-[#fff] hover:scale-150 transition  duration-500 ease-in-out"
              src="public\icons\flutter.svg"
            />
            <h3 className=" text-[#808080] text-[21px]">Flutter</h3>
          </div>
        </div>
        {/* {LANGUAGES} */}
        <h3 className="secondDiv text-primary-0 text-center font-[600] mt-[54px] text-lg ">
          Languages
        </h3>
        <div className="grid secondLowerDiv max-lg:grid-cols-2 w-full grid-cols-3 max-lg:gap-y-[64px] mt-[48px] lg:space-x-[106px]">
          <div className=" space-y-6 flex flex-col items-center">
            <img
              src="public\icons\html.svg"
              alt="html icon"
              className=" hover:scale-150 transition  duration-500 ease-in-out"
            />
            <h3 className=" text-[#808080] text-[21px]">HTML</h3>
          </div>
          <div className=" space-y-6 flex flex-col items-center">
            <img
              src="icons/css.svg"
              alt="html icon"
              className=" hover:scale-150 transition  duration-500 ease-in-out"
            />
            <h3 className=" text-[#808080] text-[21px]">CSS</h3>
          </div>
        </div>
      </div>
      {/* {BORDERLINE} */}
      <div className="BackDiv border-l-2 max-lg:hidden ml-[132px] border-line border-gray-300  h-[828px] "></div>
      {/* {BACKEND} */}
      {/* {RIGHT SIDE} */}
      <div className=" max-lg:mt-[64px] p- flex flex-col items-center">
        <div className="BackDiv flex flex-col  items-center">
          <img className="w-[48px] text-primary-0" src="icons/backend.svg" />
          <h2 className=" font-[700] text-white mt-4 text-[28px]">
            Backend Dev
          </h2>
        </div>
        <span className="BackDiv text-primary-0 font-[600]  mt-[44px] text-lg ">
          Frameworks & Runtime
        </span>

        <div
          className="grid firstUpperDiv w-full max-lg:grid-cols-2 grid-cols-3 
          mt-[48px] max-lg:gap-x-[96px] max-lg:gap-y-[64px] 
          lg:space-x-[106px]"
        >
          <div className=" space-y-6 flex flex-col items-center">
            <img
              className="w-[45px] h-[45px] hover:scale-150 transition  duration-500 ease-in-out"
              src="icons/node-js.svg"
            />
            <h3 className=" text-[#808080] text-[21px]">Node.js</h3>
          </div>
          <div className=" space-y-6 flex flex-col items-center">
            <img
              className="w-[45px] h-[45px] hover:scale-150 transition  duration-500 ease-in-out"
              src="icons/express-js-icon.svg"
            />
            <h3 className=" text-[#808080] text-[21px]">Express.js</h3>
          </div>
          <div className=" space-y-6 flex flex-col items-center">
            <img
              width="45px"
              height="45px"
              className="w-[45px] h-[45px] hover:scale-150 transition  duration-500 ease-in-out"
              src="icons/icons8-spring-boot.svg"
            />

            <h3 className=" text-[#808080] text-[21px]">Spring boot</h3>
          </div>
        </div>
        <h3 className="secondDiv text-center text-primary-0 font-[600] mt-[48px] text-lg ">
          Languages
        </h3>
        <div
          className="grid gap-y-[64px] secondLowerDiv
        max-lg:grid-cols-2 w-full lg:grid-cols-3 mt-[48px] 
        "
        >
          <div className=" space-y-6 flex flex-col items-center">
            <img
              width="45px"
              height="45px"
              className="w-[45px] h-[45px] hover:scale-150 transition  duration-500 ease-in-out"
              src="icons/typescript-svgrepo-com.svg"
            />
            <h3 className=" text-[#808080] text-[21px]">Typescript</h3>
          </div>
          <div className=" space-y-6 flex flex-col items-center">
            <img
              className="hover:scale-150 transition  duration-500 ease-in-out"
              src="icons/icons8-javascript.svg"
            />
            <h3 className=" text-[#808080] text-[21px]">Javascript</h3>
          </div>
          <div className=" space-y-6 flex flex-col items-center">
            <img
              width="55px"
              height="55px"
              className="hover:scale-150  transition  duration-500 ease-in-out"
              src="icons/python-svgrepo-com.svg"
            />

            <h3 className=" text-[#808080] text-[21px]">Python</h3>
          </div>
          <div className="  space-y-6 flex flex-col items-center">
            <img
              width="45px"
              height="45px"
              className="hover:scale-150 transition  duration-500 ease-in-out"
              src="icons/c.svg"
            />
            <h3 className=" text-[#808080] text-[21px]">C++</h3>
          </div>
          <div className=" space-y-6 flex flex-col items-center">
            <img
              width="45px"
              height="45px"
              className="hover:scale-150 transition  duration-500 ease-in-out"
              src="icons/c.svg"
            />
            <h3 className=" text-[#808080] text-[21px]">C#</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
function SkillSec2() {
  useGSAP(() => {
    gsap.from(".library", {
      y: 200,
      opacity: 0,
      scale: 0.5,
      duration: 0.9,
      ease: "power4.inOut",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".library",
        start: "-100% 90%",
        end: "top top",
        toggleActions: "play none none reverse",
        scroller: ".main-scroller",
      },
    });
  });

  return (
    <div className=" border border-b-0 border-x-0 border-t-[2px] border-t-[#69666c] p-[38px]">
      <div className="library py-[72px] flex flex-col items-center">
        <img
          width="45px"
          height="45px"
          src="/icons/database.svg"
          alt="Database svg icon"
        />
        <h2 className=" text-[28px] font-[700] text-primary-0">Libraries</h2>

        <div
          className="grid gap-y-[64px] max-lg:gap-x-[64px] 
        max-lg:grid-cols-3 w-full grid-cols-3 p-[48px]  mt-[48px] 
      "
        >
          <div
            className=" flex flex-col items-center text-center space-y-3 
            transition ease-in-out duration-500 text-customGrayHeavy
             dark:text-[#AAAAAA] hover:scale-125 hover:text-black
              dark:hover:text-white "
          >
            <img
              width="55px"
              height="55px"
              src="/icons/react.svg"
              alt="Database svg icon"
            />
            <span>React.js</span>
          </div>
          <div className=" flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-customGrayHeavy dark:text-[#AAAAAA] hover:scale-125 hover:text-black dark:hover:text-white ">
            <img
              width="55px"
              height="55px"
              src="/icons/tailwind.svg"
              alt="Database svg icon"
            />
            <span>React.js</span>
          </div>{" "}
          <div
            className=" flex flex-col items-center text-center space-y-3
           transition ease-in-out duration-500 text-customGrayHeavy
            dark:text-[#AAAAAA] hover:scale-125 hover:text-black dark:hover:text-white "
          >
            {" "}
            <img
              width="55px"
              height="55px"
              src="/icons/code-json.svg"
              alt="json web token svg icon"
            />
            <span>JSON WEB TOKEN</span>
          </div>
          <div className=" flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-customGrayHeavy dark:text-[#AAAAAA] hover:scale-125 hover:text-black dark:hover:text-white ">
            <img
              width="55px"
              height="55px"
              src="/icons/data-type-json.svg"
              alt="data-type-json svg icon"
            />
            <span>TypeORM</span>
          </div>
          <div
            className=" flex flex-col items-center text-center space-y-3
           transition ease-in-out duration-500 text-customGrayHeavy
            dark:text-[#AAAAAA] hover:scale-125 hover:text-black dark:hover:text-white "
          >
            <img
              width="50px"
              height="50px"
              src="/icons/prisma.svg"
              alt="prisma svg icon"
            />
            <span>Prisma</span>
          </div>
        </div>
      </div>
    </div>
  );
}
function SkillSec3() {
  useGSAP(() => {
    gsap.from(".database", {
      x: -50,
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".infraData",
        start: "-20% 80%",
        end: "top 10%",
        toggleActions: "play none none reverse",
        scroller: ".main-scroller",
      },
    });
    gsap.from(".infra", {
      x: 50,
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.2,
      scrollTrigger: {
        trigger: ".infraData",
        start: "-20% 80%",
        end: "top 10%",
        toggleActions: "play none none reverse",
        scroller: ".main-scroller",
      },
    });
  });
  return (
    <div className=" border border-b-0 border-x-0 border-t-[2px] border-t-[#69666c] p-[38px]">
      <div className="infraData mt-[64px] grid grid-cols-2 max-lg:grid-cols-1">
        <div className="database border-r-2 px-[48px] max-lg:border-0 border-r-[#69666c]">
          <div className=" flex items-center flex-col">
            <img
              width="45px"
              height="45px"
              src="/icons/database.svg"
              alt="Database svg icon"
            />
            <h2 className="text-[28px] font-[700] text-primary-0">Databases</h2>
          </div>
          <div
            className="grid gap-y-[64px] :gap-x-[64px]
             max-lg:grid-cols-3  grid-cols-3 mt-[48px]
             "
          >
            <div className=" flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-customGrayHeavy dark:text-[#AAAAAA] hover:scale-125 hover:text-black dark:hover:text-white ">
              <img
                width="45px"
                height="45px"
                src="/icons/postgresql.svg"
                alt="postgresql svg icon"
              />
              <span>PostgreSQL</span>
            </div>
            <div className=" flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-customGrayHeavy dark:text-[#AAAAAA] hover:scale-125 hover:text-black dark:hover:text-white ">
              <img
                width="45px"
                height="45px"
                src="/icons/mysql-original (1).svg"
                alt="mysql-original (1) svg icon"
              />
              <span>MySQL</span>
            </div>
            <div className=" flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-customGrayHeavy dark:text-[#AAAAAA] hover:scale-125 hover:text-black dark:hover:text-white ">
              <img
                width="45px"
                height="45px"
                src="/icons/mongodb-original.svg"
                alt="mongodb-original svg icon"
              />
              <span>MongoDB</span>
            </div>
            <div className=" flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-customGrayHeavy dark:text-[#AAAAAA] hover:scale-125 hover:text-black dark:hover:text-white ">
              <div className="  flex items-center scale-75">
                <img
                  width="45px"
                  height="45px"
                  src="/icons/firebase.svg"
                  alt="firebase svg icon"
                />
              </div>
              <p>Firebase</p>
            </div>
          </div>
        </div>

        <div className="px-12 infra">
          <div className=" flex items-center flex-col">
            <img
              width="45px"
              height="45px"
              src="/icons/git.svg"
              alt="git svg icon"
            />
            <h2 className=" text-[28px] font-[700] text-primary-0">
              Infrastructre
            </h2>
          </div>
          <div
            className=" grid max-lg:gap-y-[64px]  max-lg:gap-x-[64px] 
        max-lg:grid-cols-3  grid-cols-3 mt-[48px] 
        lg:space-x-[106px]"
          >
            <div className=" flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-customGrayHeavy dark:text-[#AAAAAA] hover:scale-125 hover:text-black dark:hover:text-white ">
              <div className="h-12 flex items-center scale-75">
                <div>
                  <img
                    width="45px"
                    height="45px"
                    src="/icons/docker.svg"
                    alt="docker svg icon"
                  />
                </div>
              </div>
              <p>Docker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
function SkillSec4() {
  useGSAP(() => {
    gsap.from(".leftDiv", {
      x: -200,
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "power4.inOut",

      scrollTrigger: {
        trigger: ".leftDiv",
        scroller: ".main-scroller",
        start: "-70% 80%",
        end: "top 10%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".middleDiv", {
      y: 200,
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "power4.inOut",

      scrollTrigger: {
        trigger: ".middleDiv",
        scroller: ".main-scroller",
        start: "-230% 80%",
        end: "top 10%",
        toggleActions: "play none none reverse",
      },
    });
    gsap.from(".rightDiv", {
      x: 200,
      opacity: 0,
      scale: 0.5,
      duration: 1.2,
      ease: "power4.inOut",

      scrollTrigger: {
        trigger: ".rightDiv",
        scroller: ".main-scroller",
        start: "-70% 80%",
        end: "top 10%",
        toggleActions: "play none none reverse",
      },
    });
  });
  return (
    <div
      className="skillSection4 my-[48px] border border-b-0 border-x-0 border-t-[2px]
     border-t-[#69666c] p-[64px]"
    >
      <div className="grid grid-cols-3 max-lg:grid-cols-1 ">
        <div
          className="leftDiv  border-r-2 max-lg:border-0 
        border-r-[#69666c]"
        >
          <div className=" gap-6 p-[28px] flex items-center flex-col ">
            <img
              width="45px"
              height="45px"
              src="/icons/git.svg"
              alt="git svg icon"
            />
            <h3 className=" text-[28px] text-white font-extrabold">
              Version Control
            </h3>
          </div>
          <div
            className="w-fit flex flex-col items-center text-center 
          space-y-3 transition ease-in-out duration-500 text-customGrayHeavy
           dark:text-[#AAAAAA] hover:scale-125 hover:text-black
            dark:hover:text-white "
          >
            <img
              width="45px"
              height="45px"
              src="/icons/github.svg"
              alt="github svg icon"
            />
            <span>Github</span>
          </div>
        </div>
        <div className="middleDiv">
          <div className="py-[28px]  gap-3  flex items-center flex-col">
            <img
              width="45px"
              height="45px"
              src="/icons/cloud.svg"
              alt="cloud svg icon"
            />
            <h3 className=" text-[28px] text-primary-0 font-[700]">Hosting</h3>
          </div>{" "}
          <div
            className="w-fit flex flex-col items-center text-center
          space-y-3 transition ease-in-out duration-500 px-[48px]
           hover:scale-125 hover:text-black
           dark:hover:text-white "
          >
            <div className="h-12 flex items-center scale-75">
              <div>
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 1L24 22H0L12 1Z" fill="#fff"></path>
                </svg>
              </div>
            </div>
            <p className="dark:text-[#AAAAAA]">Vercel</p>
          </div>
        </div>
        <div className="rightDiv">
          <div className=" gap-6 py-[28px]  flex items-center flex-col ">
            <img
              width="45px"
              height="45px"
              src="/icons/rocket-sharp.svg"
              alt="rocket-sharp svg icon"
            />
            <h3 className=" text-[28px] text-white font-extrabold">CI/CD</h3>
          </div>{" "}
          <div
            className=" w-fit flex flex-col items-center
           text-center space-y-3 transition ease-in-out
            duration-500 text-customGrayHeavy dark:text-[#AAAAAA]
             hover:scale-125 hover:text-black
              dark:hover:text-white "
          >
            <img
              width="45px"
              height="45px"
              src="/icons/github.svg"
              alt="github svg icon"
            />
            <span>Github Action</span>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export const SkillsSection = () => {
  return (
    <section
      id="skill-section"
      className="xl:w-[1496px] max-lg:mt-[326px]  mx-auto lg:w-[1028px] md:w-[960px]"
    >
      <h2 className=" text-[48px] text-white font-bold text-center">Skills</h2>
      <SkillSec1 />
      <SkillSec2 />
      <SkillSec3 />
      <SkillSec4 />
    </section>
  );
};
