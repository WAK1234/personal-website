import React from 'react'
import useForm from '../../hooks/useForm';
import Button from '../ui/Button'
const CtaSection = () => {
  const {state, handleChange} = useForm();
  return (
    <section className="w-full h-auto px-4 sm:px-8 md:px-16 lg:px-24 py-10 bg-[#F6F4F1]">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-5 max-w-6xl mx-auto">
        <div className="flex flex-col items-start gap-4">
          <h1 className="text-[22px] font-semibold leading-[29px] max-w-[250px]">
            Join the Free “Business &” Newsletter
          </h1>
          <p className="text-[16px] leading-[27px] font-normal">
            Not another feel-good email that gets lost in your inbox. This is
            your weekly dose of straight-to-the-point strategy, real-world
            insights, and market trend updates that keep you in the know and
            give you the consistent edge in your professional, personal, and
            financial life.
            <span className="font-semibold">
              No filler, just the insights to keep you scaling a step ahead of
              the competition.
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start md:pt-24 md:ml-2 gap-4">
          <input
            type="text"
            className="w-full md:w-[600px] bg-white p-2"
            name="name"
            value={state.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            type="email"
            className="w-full md:w-[600px] bg-white p-2"
            name="email"
            value={state.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <Button variant="secondary">subscribe</Button>
        </div>
      </div>
    </section>
  );
}

export default CtaSection