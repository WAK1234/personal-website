import React from "react";
import img from "../../assets/christina-wocintechchat-com-m-1Ym8pU4gewk-unsplash.jpg";

const Feauters = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 px-4 sm:px-8 md:px-16 lg:px-24 py-10 gap-5">
      {/* TEXT SIDE */}
      <div className="flex flex-col items-start gap-4">
        <h1 className="text-[53px] font-normal leading-[64px] ">Up Front</h1>
        <div className="h-1 w-24 bg-black mb-10" />
        <p className="text-[16px] leading-[27px] font-normal">
          <span className="font-bold">
            I didn’t learn scaling from textbooks—
          </span>
          I learned it by breaking businesses, rebuilding them, and turning
          failure into formula.
        </p>

        <p className="text-[16px] leading-[27px] font-normal">
          <span className="font-bold">Built, Not Borrowed:</span> reinvesting
          profits instead of relying on outside capital.{" "}
          <span className="font-bold">Blueprint-Driven Growth</span>: replicable
          systems proven in the trenches. No Excuses Execution: actionable
          strategy and measurable outcomes.
        </p>

        <p>
          If you’re ready to scale smarter, faster, and with zero distractions –
          you’re in the right place.
        </p>
      </div>

      {/* IMAGE SIDE */}
      <div className="w-full">
        <img src={img} alt="feature" className="w-full h-auto object-cover" />
      </div>
    </section>
  );
};

export default Feauters;
