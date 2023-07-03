import React from "react";
import SingleProducts from "./SingleProducts";

const data = [
  {
    title: "Token locker",
    description:
      "A transparent, multi-chain, secure and decentralized smart contract vault for time-released vesting of liquidity and project tokens",
    icon: "./images/icons/token.png",
    size: "40px",
  },
  {
    title: "Token Vesting",
    description:
      "Hourly Release Vesting Dashboard providing a vesting smart contract for Seed, ICO, IDO, Airdrop participants.",
    icon: "./images/icons/token.png",
    size: "40px",
  },
  {
    title: "LP locker v2 & v3",
    description:
      "Lock your tokens or liquidity tokens in a few simple steps with Team Finance. Our process is easy, fast and secure.",
    icon: "./images/icons/locker.png",
    size: "40px",
  },
  {
    title: "Flash Airdrops",
    description:
      "Airdrop your NFts , tokens and Native Coin to multiple Users in single transaction.",
    icon: "./images/icons/airdrop.png",
  },
  {
    title: "Flash Token Generator",
    description:
      "The multi-chain platform where anyone can easily mint, within minutes and without coding experience, a customizable and fully audited token.",
    icon: "./images/icons/mint.png",
    size: "35px",
  },
  //   {
  //     title: "flash anti bot",
  //     description:
  //       "Lorem ipsum dolor sit amet, Vestibulum nec turpis ante. Nam pellentesque tempor metus vel tempor. ",
  //     icon: "./images/icons/bot.png",
  //     size: "40px",
  //   },
  //   {
  //     title: "New pair explorer",
  //     description:
  //       "Lorem ipsum dolor sit amet, Vestibulum nec turpis ante. Nam pellentesque tempor metus vel tempor. ",
  //     icon: "./images/icons/roket.png",
  //     size: "45px",
  //   },
  //   {
  //     title: "Flash Staking",
  //     description:
  //       "Flash Fusion offers its token holders",
  //     icon: "./images/icons/Group.png",
  //     size: "27px",
  //   },
  {
    title: "NFT Membership Sale",
    description:
      "Flash Fusion offers a way to its users, they can generate a art work and let their community to buy easily.",
    icon: "./images/icons/Group.png",
    size: "27px",
  },
];
const ProductSection = () => {
  return (
    <section className="text-white">
      <div className="flex justify-center gap-2 items-center">
        <h2 className="text-center py-10 text-xl md:text-[40px] text-[#ef0e0f]">
          {" "}
          <span className="text-white font-bold">Our</span> Products
        </h2>
        <img
          className="md:w-[30px] md:h-[50px] w-6 h-8"
          src="./images/thun.png"
          alt=""
        />
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {data.map((item) => (
          <SingleProducts item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
