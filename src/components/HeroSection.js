import React from "react";

const HeroSection = () => {
  return (
    <section className="text-white flex-wrap gap-10 flex items-center justify-evenly mt-10">
      <div>
        <h1 className="font-bold tracking font text-[30px] md:text-[65px] text-center md:text-left">
          <span className="text-gr">One Stop </span> Secure{" "}
        </h1>
        <h1 className="font-normal font text-[20px] md:text-[50px] text-center md:text-left">
          Defi Infrastructure{" "}
        </h1>
        <p className="text-md mt-2 capitalized font text-center md:text-left md:w-[80%]">
          Welcome to flash fusion network. Most secure decentralized and trusted
          network.
        </p>
        <p className="text-md mt-2 capitalized font text-center md:text-left md:w-[80%]">
          Enjoy Less Fee on everything.
        </p>
        <div className="flex justify-center md:justify-start gap-3 mt-5">
          <a
            href="/"
            className="text-sm font-semibold bg-gradient-to-r from-[#fe1c11] to-[#ffbe31] px-4 py-1 rounded-full"
          >
            Go to App
          </a>
          <a
            href="/"
            className="gradient-border-mask text-sm font-semibold  px-4 py-1 rounded-full"
          >
            Documentation
          </a>
        </div>
      </div>

      {/* ==== Image secetion */}
      <div className="img-container relative">
        <img
          className="w-[300px] md:w-[500px]"
          src="./images/mobile.png"
          alt="hero-img"
        />
        {/* etherium */}
        <img
          className="absolute top-5 md:top-5 left-[120px] md:left-[200px] animate-m w-[80px] md:w-[130px]"
          src="./images/hero/mining.png"
          alt="hero-img"
        />
        <img
          className="absolute top-[95px] left-[70px] md:top-[145px]  md:left-[130px] animate-c w-[75px] md:w-[130px]"
          src="./images/hero/c.png"
          alt="hero-img"
        />
        <img
          className="absolute top-[160px] left-[30px] md:top-[280px] md:left-[50px] animate-e w-[80px] md:w-[140px]"
          src="./images/hero/etherium.png"
          alt="hero-img"
        />

        <img
          className="absolute top-[30px] right-[40px] md:top-[60px] md:right-[65px] w-[65px] md:w-[120px] animate-e"
          src="./images/hero/e.png"
          alt="hero-img"
        />
        <img
          className="absolute top-[110px] right-[77px] md:top-[160px] md:right-[120px] animate-l w-[70px] md:w-[130px]"
          src="./images/hero/Lock.png"
          alt="hero-img"
        />
        <img
          className="absolute top-[180px] right-[115px] md:top-[300px] md:right-[210px] animate-s w-[70px] md:w-[115px]"
          src="./images/hero/sheild.png"
          alt="hero-img"
        />
      </div>
    </section>
  );
};

export default HeroSection;
