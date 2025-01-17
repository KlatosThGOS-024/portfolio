export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative z-0  xl:w-[1496px] mt-[96px]  mx-auto lg:w-[1028px] md:w-[960px]"
    >
      <div>
        <h2 className=" text-center text-white text-[48px] font-[600]">
          Contact
        </h2>
        <div className="flex items-center justify-center">
          <a
            className="h-[44px] w-[44px] flex items-center justify-center border rounded-full 
            shadow-md transition-all p-2 duration-500 ease-in-out hover:bg-primary-0 hover:border-primary-0 hover:text-[#333333] hover:scale-110"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="envelope"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              height="36px"
              width="36px"
            >
              <path
                fill="currentColor"
                d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
              ></path>
            </svg>
          </a>
          <span className=" text-white text-[21px]  mx-3 font-[600]">
            Priyanshutiwari024@yahoo.com
          </span>
        </div>
        <div className="mt-[48px] w-3/5 mx-auto ">
          <form className="flex items-center flex-col gap-[18px]">
            <input
              placeholder="Name"
              className="px-[12px] py-[12px] rounded-lg  outline-none border border-[#999999] w-full
               bg-inputPrimary-0 text-[#fff]"
              type="text"
            ></input>
            <input
              className="px-[12px] rounded-lg  py-[12px]  outline-none border border-[#999999] w-full
               bg-inputPrimary-0 text-[#fff]"
              placeholder="Email"
              type="text"
            ></input>
            <textarea
              className="h-36 w-full flex items-center p-2 px-5  border border-[#999999]
               bg-inputPrimary-0 text-[#fff] rounded-xl outline-none  shadow-md
               dark:bg-input"
              placeholder="Message"
            ></textarea>
            <button
              className=" bg-[#999] w-fit rounded-lg font-[700] text-black px-[64px] py-2 "
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
