import React from "react";

const AboutSection = () => {
  return (
    <section className="text-white mt-20">
      <div className="flex justify-center md:justify-start gap-2 items-center mb-5 md:mb-10">
        <h2 className="text-center md:text-left py-10 text-xl md:text-[40px] text-[#ef0e0f]">
          {" "}
          <span className="text-white font-bold">About</span> Us
        </h2>
        <img
          className="md:w-[30px] md:h-[50px] w-6 h-8"
          src="./images/thun.png"
          alt=""
        />
      </div>
      <div className="flex flex-wrap justify-center">
        {/*=== text== */}
        <div className="md:w-[60%]">
          <p className="leading-relaxed text-justify md:pr-5">
            Flash Fusion is a multichain blockchain security toolkit. Which
            offers low fee, no hidden charges to its users. Lock your tokens or
            liquidity tokens in a few steps. We have much more coming in future.
            Stay tune.
          </p>{" "}
        </div>
        <div className="md:w-[40%] relative">
          <img className="w-[350px] mx-auto" src="./images/fap.png" alt="" />
          <img
            className="animate-ud w-[110px] h-[110px] top-[30px] left-[120px] md:w-[120px] md:h-[120px] md:top-[10px] md:left-[195px] absolute"
            src="./images/coin-3d-3x.png"
            alt=""
          />
          <img
            className="animate-3d w-[80px] h-[80px] top-[195px] left-[135px] md:w-[90px] md:h-[120px] md:top-[170px] md:left-[210px] absolute "
            src="./images/hero/etherium.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
