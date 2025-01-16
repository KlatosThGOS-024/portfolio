import Hamburger from "hamburger-react";
import { useState } from "react";

function MenuBar() {
  return (
    <div className="w-full">
      <div className=" absolute left-0 my-3 w-full  text-[20px] bg-[#1A1522] text-[#fff]">
        <ul className="grid grid-cols-2 px-6 space-y-7 ">
          <li className="hover:text-[#FFB809] -mb-5  w-fit flex gap-5 items-center  transition-all duration-300 transform-origin-center leading-none">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="lightbulb"
              className="svg-inline--fa fa-lightbulb w-5 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
              ></path>
            </svg>
            <span className=" group-hover:">Skills</span>
          </li>
          <li className="hover:text-[#FFB809]  w-fit  flex gap-5 items-center  transition-all duration-300 transform-origin-center leading-none">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="rocket"
              className="svg-inline--fa fa-rocket w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
              ></path>
            </svg>
            <span>Experience</span>
          </li>

          <li className="hover:text-[#FFB809]  w-fit  flex gap-5 items-center  transition-all duration-300 transform-origin-center leading-none">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="graduation-cap"
              className="svg-inline--fa fa-graduation-cap w-6 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path
                fill="currentColor"
                d="M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"
              ></path>
            </svg>
            <span>Education</span>
          </li>
          <li className="hover:text-[#FFB809]  w-fit  flex gap-5 items-center  transition-all duration-300 transform-origin-center leading-none">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="certificate"
              className="svg-inline--fa fa-certificate  w-6"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M211 7.3C205 1 196-1.4 187.6 .8s-14.9 8.9-17.1 17.3L154.7 80.6l-62-17.5c-8.4-2.4-17.4 0-23.5 6.1s-8.5 15.1-6.1 23.5l17.5 62L18.1 170.6c-8.4 2.1-15 8.7-17.3 17.1S1 205 7.3 211l46.2 45L7.3 301C1 307-1.4 316 .8 324.4s8.9 14.9 17.3 17.1l62.5 15.8-17.5 62c-2.4 8.4 0 17.4 6.1 23.5s15.1 8.5 23.5 6.1l62-17.5 15.8 62.5c2.1 8.4 8.7 15 17.1 17.3s17.3-.2 23.4-6.4l45-46.2 45 46.2c6.1 6.2 15 8.7 23.4 6.4s14.9-8.9 17.1-17.3l15.8-62.5 62 17.5c8.4 2.4 17.4 0 23.5-6.1s8.5-15.1 6.1-23.5l-17.5-62 62.5-15.8c8.4-2.1 15-8.7 17.3-17.1s-.2-17.4-6.4-23.4l-46.2-45 46.2-45c6.2-6.1 8.7-15 6.4-23.4s-8.9-14.9-17.3-17.1l-62.5-15.8 17.5-62c2.4-8.4 0-17.4-6.1-23.5s-15.1-8.5-23.5-6.1l-62 17.5L341.4 18.1c-2.1-8.4-8.7-15-17.1-17.3S307 1 301 7.3L256 53.5 211 7.3z"
              ></path>
            </svg>{" "}
            <span>Certs</span>
          </li>
          <li className="hover:text-[#FFB809]  w-fit  flex gap-5 items-center  transition-all duration-300 transform-origin-center leading-none">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              className="svg-inline--fa fa-envelope w-6 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              ></path>
            </svg>
            <span>Contact</span>
          </li>
        </ul>
        <hr className="border-t-4 border-gray-300 my-4"></hr>

        <div className=" my-3 text-center text-[#FFB809] space-x-6 text-[24px]">
          <span>Visitors</span>
          <span>Views</span>
        </div>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [isOpen, setOpen] = useState<React.SetStateAction<boolean>>(false);
  return (
    <nav className="bg-[#19151F] w-full relative">
      <div className="flex py-4  px-6 text-[20px] justify-between  items-center text-[#FFFFFF]">
        <h2 className="text-[28px] font-[700] ml-9">
          PRIYANSHU.<span className="text-[#FFB809]">DEV</span>
        </h2>
        <ul className="flex gap-[64px] max-lg:hidden">
          <li className="group w-fit relative flex gap-2 items-center hover:scale-110 transition-all duration-300 transform-origin-center leading-none">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="lightbulb"
              className="w-4 group-hover:-translate-x-[48px] transition-all duration-500 group-hover:text-[#FFB809] ease-in-out"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
              ></path>
            </svg>

            <p
              className="group-hover:-translate-x-6 absolute group-hover:text-[#FFB809]  transition-all opacity-0 
           duration-500 ease-in-out group-hover:opacity-100"
            >
              Skills
            </p>
          </li>
          <li className="group w-fit relative  flex items-center hover:scale-110 transition-all duration-300 transform-origin-center leading-none">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="rocket"
              className="w-4  group-hover:-translate-x-[48px] transition-all 
           duration-500 group-hover:text-[#FFB809] ease-in-out"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
              ></path>
            </svg>

            <p
              className="group-hover:-translate-x-6 absolute group-hover:text-[#FFB809]  transition-all opacity-0 
           duration-500 ease-in-out group-hover:opacity-100"
            >
              Experience
            </p>
          </li>
          <li className="group w-fit relative flex space-x-4 items-center hover:scale-110 transition-all duration-300 transform-origin-center leading-none">
            <svg
              height="29px"
              width="29px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 245.827 245.827"
              className="  group-hover:-translate-x-[48px] transition-all 
              duration-500 group-hover:text-[#FFB809] ease-in-out"
            >
              <g>
                <g>
                  <g>
                    <path
                      fill="#fff"
                      d="M223.336,148.384l-0.137-23.527l22.628-12.662L122.576,47.195L0,113.495l49.144,28.216
				l0.098,16.766l0.01,1.339l0.449-0.215c-0.518,0.703-0.85,1.426-0.84,2.149c0.039,8.246,33.326,14.772,74.41,14.548
				c41.064-0.215,74.302-7.122,74.273-15.349c0-0.723-0.381-1.426-0.889-2.149l0.449,0.215v-1.339l-0.088-16.834l21.309-13.258
				l0.117,20.83c-2.345,1.006-3.976,3.312-3.957,6.009c0.02,3.537,2.892,6.399,6.458,6.37c3.586-0.02,6.429-2.912,6.409-6.439
				C227.332,151.657,225.691,149.371,223.336,148.384z M123.241,170.621c-36.452,0.205-66.017-3.801-66.046-8.91
				c-0.029-5.11,29.496-9.399,65.949-9.585c36.462-0.205,66.017,3.781,66.037,8.881
				C189.209,166.098,159.703,170.426,123.241,170.621z M195.335,127.183c-4.934-5.188-22.618-18.886-72.426-18.602
				c-49.877,0.264-67.336,14.128-72.211,19.394l-0.029-4.963c0,0,14.147-21.524,72.202-21.827
				c58.025-0.313,72.436,21.045,72.436,21.045L195.335,127.183z M215.755,162.199l-2.511,36.433
				c7.767-12.203,14.255-7.66,14.255-7.66l-0.156-28.832C218.998,165.414,215.755,162.199,215.755,162.199z"
                    />
                  </g>
                </g>
              </g>
            </svg>
            <p
              className="group-hover:-translate-x-6 absolute group-hover:text-[#FFB809]  transition-all opacity-0 
           duration-500 ease-in-out group-hover:opacity-100"
            >
              Education
            </p>
          </li>
          <li className="group w-fit relative  flex gap-2 items-center hover:scale-110 transition-all duration-300 transform-origin-center leading-none">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="briefcase"
              className="w-4  group-hover:-translate-x-[48px] transition-all 
           duration-500 group-hover:text-[#FFB809] ease-in-out"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"
              ></path>
            </svg>
            <p
              className="group-hover:-translate-x-6 absolute group-hover:text-[#FFB809]  transition-all opacity-0 
           duration-500 ease-in-out group-hover:opacity-100"
            >
              Works
            </p>
          </li>
          <li className="group w-fit relative  flex gap-2 items-center hover:scale-110 transition-all duration-300 transform-origin-center leading-none">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              className="w-4  group-hover:-translate-x-[48px] transition-all 
           duration-500 group-hover:text-[#FFB809] ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              ></path>
            </svg>
            <p
              className="group-hover:-translate-x-6 absolute group-hover:text-[#FFB809]  transition-all opacity-0 
           duration-500 ease-in-out group-hover:opacity-100"
            >
              Contact
            </p>
          </li>
        </ul>
        <div className="flex cursor-pointer space-x-5">
          <svg
            height="29px"
            width="29px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 56 56"
            className="-rotate-45 max-lg:hidden block"
          >
            <path
              fill="#fff"
              d="M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28
	s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z"
            />
          </svg>

          <button
            className=" flex  gap-3 justify-center items-center 
          max-lg:hidden hover:text-[#FFB809] transition-all 
          duration-300 transform-origin-center leading-none"
          >
            <p>Download Resume </p>
            <svg
              aria-hidden="true"
              height="24px"
              width="24px"
              focusable="false"
              data-prefix="fas"
              data-icon="download"
              className="svg-inline--fa fa-download animate-bounce"
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

        <div className="flex lg:hidden items-center space-x-4 ">
          {!isOpen && (
            <svg
              height="29px"
              width="29px"
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 56 56"
              className="-rotate-45"
            >
              <path
                fill="#fff"
                d="M29,28c0-11.917,7.486-22.112,18-26.147C43.892,0.66,40.523,0,37,0C21.561,0,9,12.561,9,28
	s12.561,28,28,28c3.523,0,6.892-0.66,10-1.853C36.486,50.112,29,39.917,29,28z"
              />
            </svg>
          )}{" "}
          <Hamburger
            //@ts-ignore
            toggled={isOpen}
            toggle={setOpen}
          />
          {isOpen && <MenuBar />}
        </div>
      </div>
    </nav>
  );
}
