import React from "react";

export const Overlay = ({ menuMode }) => {
  return (
    <div
      className={`fixed z-20 bg-slate-900 opacity-90 w-full h-full md:hidden ${
        menuMode == "off" && "hidden"
      } flex flex-col divide-y divide-gray-400 px-10 py-28`}
    >
      <a
        href=""
        className="hover:text-red-500 text-white uppercase text-center py-4"
      >
        Features
      </a>
      <a
        href=""
        className="hover:text-red-500 text-white uppercase text-center py-4"
      >
        Download
      </a>
      <a
        href=""
        className="hover:text-red-500 text-white uppercase text-center py-4"
      >
        Faq
      </a>
      <a
        href=""
        className="hover:text-red-500 text-white uppercase text-center py-4"
      >
        Login
      </a>
    </div>
  );
};
