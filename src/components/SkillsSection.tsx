import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const SkillItem = ({
  src,
  name,
}: {
  src: any;
  name: any;
  width: number;
  height: number;
}) => (
  <div
    className="space-y-7 flex flex-col 
  items-center"
  >
    <img
      src={src}
      alt={name}
      className="hover:scale-150 transition w-[64px]
       duration-500 ease-in-out"
    />
    <h3
      className="text-[#808080] whitespace-nowrap
     text-[21px]"
    >
      {name}
    </h3>
  </div>
);

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

  const frontendFrameworks = [
    { src: "/images/image/Next.js.png", name: "Next.js" },
    { src: "/icons/django-svgrepo-com.svg", name: "Django" },
  ];

  const frontendLanguages = [
    { src: "/images/image/HTML5.png", name: "HTML" },
    { src: "/images/image/CSS3.png", name: "CSS" },
    { src: "/images/image/Tailwind CSS.png", name: "Tailwind CSS" },
  ];

  const backendFrameworks = [
    { src: "/images/image/Node.js.png", name: "Node.js" },
    { src: "/images/image/icons8-express-js-50.png", name: "Express.js" },
  ];
  const backendLanguages = [
    {
      src: "/images/image/TypeScript.png",
      name: "TypeScript",
    },
    {
      src: "/images/image/JavaScript.png",
      name: "JavaScript",
    },
    { src: "/images/image/Python.png", name: "Python" },
    { src: "/images/image/C++ (CPlusPlus).png", name: "C++" },
  ];

  return (
    <div className="p-[64px] lg:flex mt-[64px]">
      <div>
        <div className="frontDiv flex flex-col items-center">
          <img className="w-[48px]" src="\icons\frontend.svg" alt="Frontend" />
          <h2 className="font-[700] text-white mt-4 text-[28px]">
            Frontend Dev
          </h2>
        </div>

        <h3 className="frontDiv text-primary-0 text-center font-[600] mt-[44px] text-lg">
          Frameworks & Runtime
        </h3>

        <div className="grid firstUpperDiv max-lg:grid-cols-2 lg:grid-cols-2 mt-[48px] max-lg:gap-y-[64px] lg:space-x-[106px]">
          {frontendFrameworks.map((framework, index) => (
            <SkillItem
              key={index}
              src={framework.src}
              name={framework.name}
              width={0}
              height={0}
            />
          ))}
        </div>

        <h3 className="secondDiv text-primary-0 text-center font-[600] mt-[54px] text-lg">
          Languages
        </h3>

        <div className="grid secondLowerDiv max-lg:grid-cols-2 w-full grid-cols-3 max-lg:gap-y-[64px] mt-[48px] lg:space-x-[106px]">
          {frontendLanguages.map((language, index) => (
            <SkillItem
              key={index}
              src={language.src}
              name={language.name}
              width={0}
              height={0}
            />
          ))}
        </div>
      </div>

      <div className="BackDiv border-l-2 max-lg:hidden ml-[132px] border-line border-gray-300 h-[828px]"></div>

      <div className="max-lg:mt-[64px] flex flex-col items-center">
        <div className="BackDiv flex flex-col items-center">
          <img
            className="w-[48px] text-primary-0"
            src="icons/backend.svg"
            alt="Backend"
          />
          <h2 className="font-[700] text-white mt-4 text-[28px]">
            Backend Dev
          </h2>
        </div>

        <span className="BackDiv text-primary-0 font-[600] mt-[44px] text-lg">
          Frameworks & Runtime
        </span>

        <div className="grid firstUpperDiv w-full max-lg:grid-cols-2 grid-cols-3 mt-[48px] max-lg:gap-x-[96px] max-lg:gap-y-[64px] lg:space-x-[106px]">
          {backendFrameworks.map((framework, index) => (
            <SkillItem
              key={index}
              src={framework.src}
              name={framework.name}
              width={0}
              height={0}
            />
          ))}
        </div>

        <h3 className="secondDiv text-center text-primary-0 font-[600] mt-[48px] text-lg">
          Languages
        </h3>

        <div className="grid gap-y-[64px] secondLowerDiv max-lg:grid-cols-2 w-full lg:grid-cols-3 mt-[48px]">
          {backendLanguages.map((language, index) => (
            <SkillItem
              key={index}
              src={language.src}
              name={language.name}
              width={0}
              height={0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
//@ts-ignore
const LibraryItem = ({ src, name, width = 55, height = 55, alt }) => (
  <div
    className="flex flex-col items-center text-center space-y-3 
    transition ease-in-out duration-500 text-customGrayHeavy
    dark:text-[#AAAAAA] hover:scale-125 hover:text-black
    dark:hover:text-white"
  >
    <img width={width} height={height} src={src} alt={alt || name} />
    <span>{name}</span>
  </div>
);

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

  const libraries = [
    {
      src: "/images/image/React.png",
      name: "React.js",
      alt: "React.js icon",
    },
    {
      src: "/images/image/JSON.png",
      name: "JSON WEB TOKEN",
      alt: "JSON Web Token icon",
    },
    {
      src: "/images/image/prisma-removebg-preview.png",
      name: "Prisma",
      alt: "Prisma icon",
    },
  ];
  // const libraries3 = [
  //   { src: "/images/image/HTML5.png", name: "HTML" },
  //   { src: "/images/image/CSS3.png", name: "CSS" },
  //   { src: "/images/image/Tailwind CSS.png", name: "Tailwind CSS" },
  // ];
  return (
    <div className="border border-b-0 border-x-0 border-t-[2px] border-t-[#69666c] p-[38px]">
      <div className="library py-[72px] flex flex-col items-center">
        <img
          width="45px"
          height="45px"
          src="/icons/database.svg"
          alt="Database svg icon"
        />
        <h2 className="text-[28px] font-[700] text-primary-0">Libraries</h2>

        <div
          className="grid gap-y-[64px] max-lg:gap-x-[64px] 
          max-lg:grid-cols-3 w-full grid-cols-3 p-[48px] mt-[48px]"
        >
          {libraries.map((library, index) => (
            <LibraryItem
              key={index}
              src={library.src}
              name={library.name}
              alt={library.alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
const SkillItem3 = ({
  //@ts-ignore
  src,
  //@ts-ignore
  name,
  width = 45,
  height = 45,
  scale = "scale-100",
}) => (
  <div className="flex flex-col items-center text-center space-y-3 transition ease-in-out duration-500 text-customGrayHeavy dark:text-[#AAAAAA] hover:scale-125 hover:text-black dark:hover:text-white">
    <div className={`h-12 flex items-center ${scale}`}>
      <img
        width={width}
        height={height}
        src={src}
        alt={name}
        className="w-full h-full"
      />
    </div>
    <p>{name}</p>
  </div>
);

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

  const databases = [
    { src: "/images/image/PostgresSQL.png", name: "PostgreSQL" },
    { src: "/images/image/MySQL.png", name: "MySQL" },
    { src: "/images/image/MongoDB.png", name: "MongoDB" },
    {
      src: "/images/image/Firebase.png",
      name: "Firebase",
      scale: "scale-75",
    },
  ];

  const infrastructure = [
    {
      src: "/images/image/Docker.png",
      name: "Docker",
      scale: "scale-75",
    },
  ];

  return (
    <div className="border border-b-0 border-x-0 border-t-[2px] border-t-[#69666c] p-[38px]">
      <div className="infraData mt-[64px] grid grid-cols-2 max-lg:grid-cols-1">
        <div className="database border-r-2 px-[48px] max-lg:border-0 border-r-[#69666c]">
          <div className="flex items-center flex-col">
            <img
              width="45px"
              height="45px"
              src="/icons/database.svg"
              alt="Database svg icon"
            />
            <h2 className="text-[28px] font-[700] text-primary-0">Databases</h2>
          </div>

          <div className="grid gap-y-[64px] max-lg:grid-cols-3 grid-cols-3 mt-[48px]">
            {databases.map((db, index) => (
              <SkillItem3
                key={index}
                src={db.src}
                name={db.name}
                scale={db.scale}
              />
            ))}
          </div>
        </div>

        <div className="px-12 infra">
          <div className="flex items-center flex-col">
            <img
              width="45px"
              height="45px"
              src="/icons/git.svg"
              alt="git svg icon"
            />
            <h2 className="text-[28px] font-[700] text-primary-0">
              Infrastructure
            </h2>
          </div>

          <div className="grid max-lg:gap-y-[64px] max-lg:gap-x-[64px] max-lg:grid-cols-3 grid-cols-3 mt-[48px] lg:space-x-[106px]">
            {infrastructure.map((infra, index) => (
              <SkillItem3
                key={index}
                src={infra.src}
                name={infra.name}
                scale={infra.scale}
              />
            ))}
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
              src="/images/image/GitHub.png"
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
              <div
                className="w-fit flex flex-col items-center text-center 
          space-y-3 transition ease-in-out duration-500 text-customGrayHeavy
           dark:text-[#AAAAAA] hover:scale-125 hover:text-black
            dark:hover:text-white "
              >
                <img
                  width="60px"
                  height="60px"
                  src="/images/image/Vercel.png"
                  alt="github svg icon"
                />{" "}
                <p className="dark:text-[#AAAAAA]">Vercel</p>
              </div>
            </div>
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
