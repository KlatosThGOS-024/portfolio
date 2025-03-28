import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface WorkType {
  imgSrc: string;
  header: string;
  subHeader: string;
  technologies: string[];
  link?: string;
}

function Work({ imgSrc, header, subHeader, technologies, link }: WorkType) {
  return (
    <div
      className="my-9 work-item rounded-lg relative transition-all
       ease-in-out duration-500 hover:scale-110
    shadow-xl h-[720px] bg-[#424242]"
    >
      <div>
        <img
          className=" max-w-[100%] rounded-lg rounded-b-none "
          src={imgSrc}
          alt={header}
        />
        <div className="p-[28px]">
          <h2 className=" text-[#FFC400] font-[500] text-[21px]">{header}</h2>
          <p className="text-white text-[18px] font-[500] mt-3">{subHeader}</p>
          <p className="text-center mt-[21px] text-[#FFC400] text-[21px] font-[500]">
            Techonologies
          </p>
          <ul className=" flex text-[18px] gap-x-[18px] gap-y-[8px] mt-3 min-w-fit flex-wrap">
            {technologies.map((tech, index) => (
              <li className=" font-[500] text-gray-300  " key={index}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <a className="m-3  text-[#FFC400] font-[600] text-lg absolute bottom-0">
          Live
        </a>

        <a
          href={link}
          target="_blank"
          aria-label={link}
          rel="noopener noreferrer"
          className="p-3 absolute bottom-0 m-3  cursor-pointer right-0 transition duration-300 ease-in-out hover:scale-125 
          hover:text-primary"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-up-right-from-square"
            className="svg-inline--fa fa-arrow-up-right-from-square w-7 "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path
              fill="currentColor"
              d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
const works = [
  {
    header: "PromptPilot",
    subHeader:
      "AI-powered platform for efficient prompt generation and response handling.",
    technologies: [
      "Turborepo",
      "Next",
      "React",
      "Tailwind",
      "React Libraries",
      "Gemini Ai",
    ],
    imgSrc: "/images/pp.jpg",
    className: "work 1",
    link: "https://uni-kitab-final2-web.vercel.app/home",
  },
  {
    header: "UniKitab",
    subHeader:
      "Unikitab: The ultimate study companion for college students. Access previous year question papers (PYQs), get AI-powered notemaking and answers, explore LeetCode DSA questions, and practice with personalized solutions by uploading your DSA sheets.",
    technologies: [
      "Turborepo",
      "Next",
      "React",
      "Tailwind",
      "React Libraries",
      "Gemini Ai",
    ],
    imgSrc: "/images/saasUniKitab.png",
    className: "work 2",
    link: "https://uni-kitab-final2-web.vercel.app/home",
  },
  {
    header: "PromptPilot",
    subHeader: "Bla blah",
    technologies: ["Bext", "react", "react"],
    imgSrc: "/images/pp.jpg",
    className: "work1",
  },
  {
    header: "PromptPilot",
    subHeader: "Bla blahBla blahBla blahBla blahBla blahBla blah",
    technologies: [
      "React",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT & caching",
      "Gemini",
      "Reudx",
      "Tailwind",
      "Typescript",
    ],
    imgSrc: "/images/pp.jpg",
    className: "work 2",
    link: "https://prompt-pilot-frontend-rebatpuoa-klatosthgos-024s-projects.vercel.app/",
  },
  {
    header: "PromptPilot",
    subHeader: "Bla blah",
    technologies: ["Bext", "react", "react"],
    imgSrc: "/images/pp.jpg",
    className: "work2",
    link: "https://uni-kitab-final2-web.vercel.app/home",
  },
  {
    header: "PromptPilot",
    subHeader: "Bla blah",
    technologies: ["Bext", "react", "react"],
    imgSrc: "/images/pp.jpg",
    className: "work2",
    link: "https://uni-kitab-final2-web.vercel.app/home",
  },
];
export const Works = () => {
  useGSAP(() => {
    gsap.from(".work1", {
      y: 200,
      opacity: 0,
      scale: 0.5,
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".work1",
        start: "top 120%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",

        scroller: ".main-scroller",
      },
    });
  });
  useGSAP(() => {
    gsap.from(".work2", {
      y: 200,
      opacity: 0,
      scale: 0.5,
      duration: 1.4,
      ease: "power4.out",
      scrollTrigger: {
        trigger: ".work2",
        start: "top 120%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",

        scroller: ".main-scroller",
      },
    });
  });

  return (
    <section
      id="works"
      className="xl:w-[1496px] mt-[64px] px-[64px]  mx-auto lg:w-[1028px] md:w-[960px]"
    >
      <div>
        <h2 className=" text-white px-[48px] font-semibold  text-[48px] text-center">
          Works
        </h2>
        <div>
          <div className=" flex gap-3  text-white text-[28px] items-center font-[600]">
            <span className="my-6">Selected Projects</span>
            <span className="h-0.5 w-16 mt-3 bg-black dark:bg-white md:block"></span>
          </div>
          <p className=" text-white text-[21px]">
            All small gallery of recent projects chosen by me. interrseted to
            see more? visit for more
          </p>
        </div>
        <div className="grid max-lg:grid-cols-2 max-md:grid-cols-1 grid-cols-3 gap-[28px]">
          {works.map((work, index) => (
            <div key={index} className={work.className}>
              <Work
                link={work.link}
                header={work.header}
                subHeader={work.subHeader}
                technologies={work.technologies}
                imgSrc={work.imgSrc}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
