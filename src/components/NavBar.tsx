function MenuBar() {
  return (
    <div>
      <div className=" absolute left-0 my-3  w-full mx-8 text-[20px] text-[#fff]">
        <ul className="grid grid-cols-2 px-6 space-y-5  ">
          <li className="hover:text-[#FFB809]  w-fit  flex gap-2 items-center  transition-all duration-300 transform-origin-center leading-none">
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
            <span>Skills</span>
          </li>
          <li className="hover:text-[#FFB809]  w-fit  flex gap-2 items-center  transition-all duration-300 transform-origin-center leading-none">
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

          <li className="hover:text-[#FFB809]  w-fit  flex gap-2 items-center  transition-all duration-300 transform-origin-center leading-none">
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
          <li className="hover:text-[#FFB809]  w-fit  flex gap-2 items-center  transition-all duration-300 transform-origin-center leading-none">
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
          <li className="hover:text-[#FFB809]  w-fit  flex gap-2 items-center  transition-all duration-300 transform-origin-center leading-none">
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
  return (
    <nav className="bg-[#19151F] w-full relative">
      <div className="flex py-4  px-6 text-[20px] justify-between items-center text-[#FFFFFF]">
        <h2>name</h2>
        <ul className="flex space-x-7  max-lg:hidden">
          <li className="hover:text-[#FFB809] flex gap-2 items-center hover:scale-110 transition-all duration-300 transform-origin-center leading-none">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="lightbulb"
              className="svg-inline--fa fa-lightbulb w-4 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
            >
              <path
                fill="currentColor"
                d="M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z"
              ></path>
            </svg>
            <span>Skills</span>
          </li>
          <li className="hover:text-[#FFB809] hover:scale-110 transition-all duration-300 transform-origin-center leading-none">
            <span>Experience</span>
          </li>
          <li className="hover:text-[#FFB809] hover:scale-110 transition-all duration-300 transform-origin-center leading-none">
            <span>Education</span>
          </li>
          <li className="hover:text-[#FFB809] hover:scale-110 transition-all duration-300 transform-origin-center leading-none">
            <span>Certs</span>
          </li>
          <li className="hover:text-[#FFB809] hover:scale-110 transition-all duration-300 transform-origin-center leading-none">
            <span>Contact</span>
          </li>
        </ul>
        <div className=" space-x-5">
          <span>Nigh mode</span>

          <button className=" max-lg:hidden hover:text-[#FFB809] hover:scale-110 transition-all duration-300 transform-origin-center leading-none">
            Download Resume
          </button>
        </div>
        <div className=" max-lg:block hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </div>
      </div>
    </nav>
  );
}
