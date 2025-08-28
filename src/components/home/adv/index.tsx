const Adv = () => {
  return (
    <div
      className="relative bg-cover bg-center pt-32 md:pt-32"
      style={{
        backgroundImage:
          "url('https://themedox.com/mykd/wp-content/uploads/2023/10/slider_bg.jpg')",
      }}
    >
      <div className="w-10/12 mx-auto flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Left Text Content */}
        <div className="w-full md:w-7/12 flex flex-col gap-4 text-center md:text-left">
          <div className="w-full lg:w-10/12 mx-auto md:mx-0 bg-gradient-to-r from-[#4cff8877] to-transparent p-3 lg:p-6 lg:pr-20 rounded-2xl">
            <p className="uppercase text-base md:text-xl font-extrabold font-sans text-[#45f882]">
              Live gaming
            </p>
          </div>
          <p
            className="font-sans text-[clamp(2rem,10vw,100px)] uppercase font-extrabold leading-tight
             bg-clip-text text-transparent bg-gradient-to-r from-green-200 to-green-600"
            style={{
              WebkitTextStroke: "3px white",
              textShadow:
                "0 0 8px #f3ffefff, 0 0 12px #2aec7bff, 0 0 16px #30d716ff",
            }}
          >
            steaming
          </p>

          <p
            className="font-bold font-sans text-sm md:text-3xl uppercase text-white"
            style={{
              WebkitTextStroke: "1.5px #a9eba9ff", // viền xanh lá
              textShadow:
                "0 0 2px #032005ff, 0 0 8px #1de137ff, 0 0 20px #18a550ff", // glow trắng
            }}
          >
            video games online
          </p>

          <div className="py-2 mt-2 w-10/12 md:w-5/12 mx-auto md:mx-0 group transition-colors duration-300">
            <button
              className="w-full p-3 rounded-full font-sans font-extrabold text-sm lg:text-md text-green-800 transition-all duration-300"
              style={{
                background: "linear-gradient(to right, #f0fff5, #49ec7a)", // gradient xanh
                boxShadow: "0 0 8px #45f882, 0 0 6px #a8ffc4, 0 0 10px #70ff9b", // luôn phát sáng
              }}
              onMouseEnter={(e) => {
                (e.currentTarget.style as any).boxShadow =
                  "0 0 12px #45f882, 0 0 16px #a8ffc4, 0 0 24px #70ff9b";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget.style as any).boxShadow =
                  "0 0 4px #45f882, 0 0 6px #a8ffc4, 0 0 8px #70ff9b";
              }}
            >
              CONTACT US
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-5/12 flex justify-center">
          <img
            src="https://themedox.com/mykd/wp-content/uploads/2023/10/slider_img01.png"
            alt="Banner"
            className="animate-float max-w-[300px] md:max-w-full"
          />
        </div>
      </div>

      {/* Bottom Shape Decorations */}
      <div className="hidden md:block absolute bottom-0 left-0 w-1/2 h-[96px] bg-[#45f882] [clip-path:polygon(0_0,100%_100%,0_50%)]"></div>
      <div className="hidden md:block absolute bottom-0 right-0 w-1/2 h-[96px] bg-[#45f882] [clip-path:polygon(100%_0,0_100%,100%_50%)]"></div>
    </div>
  );
};

export default Adv;
