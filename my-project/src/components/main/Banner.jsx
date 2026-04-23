import React from "react";
import img from "../../assets/jud-mackrill-drLKC_gGwE4-unsplash.jpg";
import Button from "../ui/Button";
const Banner = () => {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 w-full min-h-screen">
      <div
        className="my-24 px-4 flex flex-col items-center justify-center text-center gap-5 min-h-screen text-white"
        style={bgStyle}
      >
        <h1 className="text-[21px] leading-[27px] font-light">for ceos who need fast, field-tested scaling</h1>
        <p className="text-[57px] font-semibold leading-[74px]">Remix your business</p>
        <Button>
            join the course
        </Button>
      </div>
    </section>
  );
};

export default Banner;
