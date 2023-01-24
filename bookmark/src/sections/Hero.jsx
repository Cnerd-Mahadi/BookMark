import React, { useEffect } from "react";
import logo from "../images/logo-bookmark.svg";
import logo_black from "../images/logo-bookmark-footer.svg";
import hero from "../images/illustration-hero.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Hero = ({ mode, setMode }) => {
  const handleMode = () => {
    if (mode == "off") setMode("on");
    else setMode("off");
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 768) setMode("off");
    });
  });

  return (
    <section id="hero" className="relative">
      <div className="bg-blue-700 opacity-80 w-2/5 h-72 absolute -z-10 bottom-24 right-0 rounded-l-full hidden md:block"></div>
      <div className="safe-container max-w-5xl px-6 py-12">
        <nav className="flex flex-row justify-between items-center mb-20">
          <div className="flex">
            <img
              src={mode == "off" ? logo : logo_black}
              alt="logo"
              className={`z-30 ${mode == "on" && "fixed"}`}
            />
          </div>
          <div className="md:hidden flex duration-500">
            <img
              src={
                mode == "off"
                  ? "https://cdn-icons-png.flaticon.com/512/8867/8867520.png"
                  : "https://cdn-icons-png.flaticon.com/512/1828/1828665.png"
              }
              alt="menu-ham"
              className={`w-6 z-30 duration-200 ${
                mode == "on" && "rotate-180 fixed right-5 top-12"
              } cursor-pointer`}
              onClick={handleMode}
            />
          </div>
          <div className="hidden md:flex flex-row space-x-10 font-medium items-center">
            <AnchorLink
              href="#feature"
              className="hover:text-red-500 text-gray-400 uppercase"
            >
              Features
            </AnchorLink>
            <AnchorLink
              href="#download"
              className="hover:text-red-500 text-gray-400 uppercase"
            >
              Download
            </AnchorLink>
            <AnchorLink
              href="#faq"
              className="hover:text-red-500 text-gray-400 uppercase"
            >
              Faq
            </AnchorLink>
            <button className="px-8 py-2 bg-red-500 text-white hover:text-red-500 hover:bg-white border-2 border-red-500 uppercase rounded-lg">
              Login
            </button>
          </div>
        </nav>
        <div className="flex flex-col-reverse md:flex-row w-full items-center py-10 relative">
          <div className="flex flex-col space-y-12 md:text-left text-center md:w-1/2">
            <h1 className="md:text-6xl font-bold text-3xl">
              A Simple Bookmark Manager
            </h1>
            <p className="max-w-md md:text-2xl text-lg text-gray-400 font-normal">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free
            </p>
            <div className="flex flex-row space-x-4 justify-center md:justify-start">
              <button className="px-4 py-4 rounded-lg bg-blue-600 border-2 border-blue-600 text-white hover:bg-white hover:text-blue-600 font-bold">
                Get It On Chrome
              </button>
              <button className="px-4 py-4 rounded-lg bg-gray-300 border-2 border-gray-300 text-black hover:text-gray-600 hover:bg-white font-bold">
                Get It On Firefox
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={hero} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};
