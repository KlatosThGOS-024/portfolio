export const SkillsSection = () => {
  return (
    <section className="">
      <h2 className=" text-[48px] text-white font-bold text-center">Skills</h2>
      <div className=" flex justify-around mt-[64px] ">
        <div className=" flex flex-col items-center">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="code"
            className="svg-inline--fa fa-code fa-2x text-primary w-[78px] text-[#FFB809]"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
          >
            <path
              fill="currentColor"
              d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"
            ></path>
          </svg>
          <h2 className=" font-[700] text-white mt-4 text-[28px]">
            Frontend Dev
          </h2>
        </div>
        <div className="border-l-2 border-gray-300 h-32 "></div>
        <div className=" flex flex-col items-center">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="terminal"
            className="svg-inline--fa fa-terminal fa-2x text-primary w-[78px] text-[#FFB809]"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path
              fill="currentColor"
              d="M9.4 86.6C-3.1 74.1-3.1 53.9 9.4 41.4s32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 9.4 86.6zM256 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H256c-17.7 0-32-14.3-32-32s14.3-32 32-32z"
            ></path>
          </svg>{" "}
          <h2 className=" font-[700] text-white mt-4 text-[28px]">
            Backend Dev
          </h2>
        </div>{" "}
      </div>
    </section>
  );
};
