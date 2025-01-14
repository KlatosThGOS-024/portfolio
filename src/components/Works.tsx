export const Works = () => {
  return (
    <section className="xl:w-[1496px] mt-[64px]  mx-auto lg:w-[1028px] md:w-[960px]">
      <div>
        <h2 className=" text-white font-semibold  text-[48px] text-center">
          Works
        </h2>
        <div>
          <div className=" flex gap-3  text-white text-[28px] items-center font-[600]">
            {" "}
            <span>Selected Projects</span>
            <span className="h-0.5 w-16 mt-3 bg-black dark:bg-white hidden md:block"></span>
          </div>{" "}
          <p className=" text-white text-[21px]">
            All small gallery of recent projects chosen by me. interrseted to
            see more? visit for more
          </p>
        </div>
      </div>
    </section>
  );
};
