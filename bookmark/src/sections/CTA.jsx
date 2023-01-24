import React from "react";

export const CTA = () => {
  return (
    <section id="cta" className="bg-blue-500 py-24">
      <div className="flex flex-col items-center justify-center space-y-8 px-6">
        <p className="text-lg text-white font-medium text-center">
          35,000+ ALREADY JOINED
        </p>
        <h2 className="text-center text-4xl font-bold text-white max-w-md">
          Stay up-to-date with what we're doing
        </h2>
        <div className="both-flex md:space-x-4 md:space-y-0 space-y-4 items-center">
          <input
            type="text"
            className="px-6 py-3 rounded-lg bg-white focus:outline-none"
            placeholder="Enter Your Email Address"
          />
          <button className="px-4 py-3 rounded-lg bg-red-500 text-white font-bold hover:opacity-70">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};
