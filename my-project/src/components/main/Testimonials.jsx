import React from "react";
import Grid from "../ui/Grid";

const informations = [
  {
    id: 1,
    info: "Working with Natalie Dawson’s framework completely changed the way I run my business. Before, I was constantly overwhelmed, jumping between tasks without a clear direction. Her approach helped me build structure, focus on high-impact actions, and finally scale with confidence. Within a few months, my revenue became more predictable, my team became more organized, and I stopped feeling like everything depended only on me.",
  },
  {
    id: 2,
    info: "I’ve taken many courses and followed many business mentors, but Natalie Dawson’s insights stand out because they are extremely practical. She breaks everything into steps you can execute immediately. After applying her strategies, I improved my sales process and increased conversions significantly.",
  },
  {
    id: 3,
    info: "What I appreciate most is how she simplifies complex business growth into something understandable and repeatable. I used to think scaling required luck, but her system proved otherwise. I now make faster decisions and grow without burnout.",
  },
  {
    id: 4,
    info: "Before this approach, I struggled with consistency and structure. Now I operate with a system instead of chaos. My business is growing in a stable and sustainable way.",
  },
];

const Testimonials = () => {
  return (
    <section className="overflow-x-hidden w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-24 bg-black py-20">
      {/* HEADER */}
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-white text-[60px] md:text-[80px] font-semibold leading-tight">
          Impact
        </h1>
        <p className="text-white text-[20px] md:text-[28px]">
          I help owners build better businesses
        </p>
      </div>

      {/* GRID */}
      <Grid>
        {informations.map((item) => (
          <div
            key={item.id}
            className="h-full border border-white rounded-lg p-6 text-white bg-black/40 hover:bg-black/60 transition-all duration-300"
          >
            <p className="text-sm leading-relaxed text-gray-200">
              "{item.info}"
            </p>
          </div>
        ))}
      </Grid>
    </section>
  );
};

export default Testimonials;
