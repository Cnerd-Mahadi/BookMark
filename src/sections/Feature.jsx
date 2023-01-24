import React from "react";
import { useState } from "react";
import tab1_image from "../images/illustration-features-tab-1.svg";
import tab2_image from "../images/illustration-features-tab-2.svg";
import tab3_image from "../images/illustration-features-tab-3.svg";

export const Feature = () => {
  const [tab, setTab] = useState(1);
  const [image, setImage] = useState(tab1_image);
  const [bigText, setBigText] = useState("Bookmark in one click");
  const [smallText, setSmallText] = useState(
    "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
  );

  const handleTab = (e) => {
    if (e.target.value === "tab1") {
      setTab(1);
      setImage(tab1_image);
      setBigText("Bookmark in one click");
      setSmallText(
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
      );
    } else if (e.target.value === "tab2") {
      setTab(2);
      setImage(tab2_image);
      setBigText("Intelligent search");
      setSmallText(
        "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
      );
    } else {
      setTab(3);
      setImage(tab3_image);
      setBigText("Share your bookmarks");
      setSmallText(
        "Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button."
      );
    }
  };

  return (
    <section id="feature" className="relative">
      <div className="bg-blue-700 opacity-80 w-2/5 h-72 absolute -z-10 -bottom-28 left-0 rounded-r-full hidden md:block"></div>
      <div className="safe-container px-6 mb-32">
        <div className="flex flex-col space-y-6 items-center">
          <h3 className="text-4xl font-bold">Features</h3>
          <p className="max-w-md text-gray-400 text-center font-medium">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
          <div className="both-flex md:space-x-16 md:border-b md:border-b-gray-300 font-medium w-full md:w-fit md:justify-center md:px-2 pt-6">
            <div className="h-16 border-b md:border-none border-b-gray-300 flex justify-center items-end">
              <div
                className={`w-fit border-b-4 border-b-white ${
                  tab == 1 && "border-b-red-500"
                }`}
              >
                <button
                  className="text-gray-500 hover:text-red-500 mb-4"
                  value="tab1"
                  onClick={handleTab}
                >
                  Simple Bookmarking
                </button>
              </div>
            </div>
            <div className="h-16 border-b md:border-none border-b-gray-300 flex justify-center items-end">
              <div
                className={`w-fit border-b-4 border-b-white ${
                  tab == 2 && "border-b-red-500"
                }`}
              >
                <button
                  className="text-gray-500 hover:text-red-500 mb-4"
                  value="tab2"
                  onClick={handleTab}
                >
                  Speedy Searching
                </button>
              </div>
            </div>
            <div className="h-16 border-b md:border-none border-b-gray-300 flex justify-center items-end">
              <div
                className={`w-fit border-b-4 border-b-white ${
                  tab == 3 && "border-b-red-500"
                }`}
              >
                <button
                  className="text-gray-500 hover:text-red-500 mb-4"
                  value="tab3"
                  onClick={handleTab}
                >
                  Easy Sharing
                </button>
              </div>
            </div>
          </div>
          <div className="both-flex md:space-x-28 md:space-y-0 space-y-28 pt-4">
            <div className="md:w-1/2 flex items-center justify-center">
              <img src={image} alt="feature_tab" />
            </div>
            <div className="flex flex-col space-y-10 md:w-1/2 items-center md:items-start">
              <h3 className="font-bold text-3xl">{bigText}</h3>
              <p className="font-medium text-gray-400 max-w-md">{smallText}</p>
              <button className="px-6 py-3 rounded-lg bg-blue-600 border-2 border-blue-600 text-white hover:bg-white hover:text-blue-600 font-bold">
                More Info
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
