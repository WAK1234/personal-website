import React from "react";
import img from "../../assets/pexels-thirdman-8485839.jpg";

const Hero = () => {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "top center",
  };

  return (
    <section
      className="overflow-x-hidden w-full min-h-screen flex flex-col items-end justify-center gap-4 text-white px-4 sm:px-8 md:px-16 lg:px-24"
      style={bgStyle}
    >
      <h1 className="text-[30px] leading-[37px] md:text-[67px] text-right font-light md:leading-[74px]">
        Growth operator, small <br />business-obsessed <br /> entrepreneur, investor, <br /> and
        author.
      </h1>
    </section>
  );
};

export default Hero;
