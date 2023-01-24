import React from "react";
import dot from "../images/bg-dots.svg";
import chrome from "../images/logo-chrome.svg";
import firefox from "../images/logo-firefox.svg";
import opera from "../images/logo-opera.svg";

export const Download = () => {
  return (
    <section id="download">
      <div className="safe-container flex flex-col px-6 space-y-8 items-center">
        <h3 className="text-4xl font-bold">Download the extension</h3>
        <p className="text-gray-400 max-w-lg font-medium text-center">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite you'd like us to prioritize.
        </p>
        <div className="both-flex md:space-x-8 md:space-y-0 space-y-8 py-24 w-full md:justify-center max-w-5xl px-10 md:px-6">
          <div className="w-full md:w-1/3">
            <div className="flex flex-col space-y-6 rounded-lg shadow-xl items-center py-4">
              <img src={chrome} alt="chrome" className="mt-3 mb-4" />
              <h4 className="text-xl font-bold">Add to Chrome</h4>
              <p className="text-gray-400 font-medium text-lg">
                Minimum Version 62
              </p>
              <img src={dot} alt="dot" />
              <button className="px-6 py-3 rounded-lg bg-blue-600 border-2 border-blue-600 text-white hover:bg-white hover:text-blue-600 font-bold">
                Add & Install Extension
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex flex-col space-y-6 rounded-lg shadow-xl items-center py-4 md:mt-8">
              <img src={firefox} alt="firefox" className="mt-3 mb-4" />
              <h4 className="text-xl font-bold">Add to Firefox</h4>
              <p className="text-gray-400 font-medium text-lg">
                Minimum Version 55
              </p>
              <img src={dot} alt="dot" />
              <button className="px-6 py-3 rounded-lg bg-blue-600 border-2 border-blue-600 text-white hover:bg-white hover:text-blue-600 font-bold">
                Add & Install Extension
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="flex flex-col space-y-6 rounded-lg shadow-xl items-center py-4 md:mt-16">
              <img src={opera} alt="opera" className="mt-3 mb-4" />
              <h4 className="text-xl font-bold">Add to Opera</h4>
              <p className="text-gray-400 font-medium text-lg">
                Minimum Version 46
              </p>
              <img src={dot} alt="dot" />
              <button className="px-6 py-3 rounded-lg bg-blue-600 border-2 border-blue-600 text-white hover:bg-white hover:text-blue-600 font-bold">
                Add & Install Extension
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
