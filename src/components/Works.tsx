interface WorkType {
  imgSrc: string;
  header: string;
  subHeader: string;
  technologies: string[];
}

function Work({ imgSrc, header, subHeader, technologies }: WorkType) {
  return (
    <div className="work-item rounded-lg rounded-b-none shadow-xl bg-[#424242]">
      <div>
        <img className=" max-w-[200%] rounded-lg " src={imgSrc} alt={header} />
        <div className="p-[28px]">
          <h2 className=" text-[#FFC400] font-[700] text-[21px]">{header}</h2>
          <p className="text-white text-[21px] font-[600]">{subHeader}</p>
          <p className="text-center text-[#FFC400] text-[21px] font-[500]">
            Techonologies
          </p>
          <ul className=" flex space-x-6 text-[21px] mt-3 min-w-fit  flex-wrap">
            {technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const Works = () => {
  return (
    <section className="xl:w-[1496px] mt-[64px]  mx-auto lg:w-[1028px] md:w-[960px]">
      <div>
        <h2 className=" text-white font-semibold  text-[48px] text-center">
          Works
        </h2>
        <div>
          <div className=" flex gap-3  text-white text-[28px] items-center font-[600]">
            <span>Selected Projects</span>
            <span className="h-0.5 w-16 mt-3 bg-black dark:bg-white hidden md:block"></span>
          </div>
          <p className=" text-white text-[21px]">
            All small gallery of recent projects chosen by me. interrseted to
            see more? visit for more
          </p>
        </div>
        <div className="grid grid-cols-3 gap-[28px]">
          <Work
            header="PromptPilot"
            subHeader="Bla blahBla blahBla blahBla blahBla blahBla blah"
            technologies={[
              "React ",
              "React",
              "React",
              "React",
              "React",
              "React",
              "React",
              "React",
              "React",
            ]}
            imgSrc="/images/pp.jpg"
          />
          <Work
            header="PromptPilot"
            subHeader="Bla blah"
            technologies={["Bext ", "react", "react"]}
            imgSrc="/images/promptPilot.jpg"
          />
          <Work
            header="PromptPilot"
            subHeader="Bla blah"
            technologies={["Bext ", "react", "react"]}
            imgSrc="/images/promptPilot.jpg"
          />
        </div>
      </div>
    </section>
  );
};
