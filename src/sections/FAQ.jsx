import React from "react";
import { useState } from "react";
import arrow from "../images/icon-arrow.svg";

export const FAQ = () => {
  const [faq, setFaq] = useState({ name: "none", mode: "none" });

  const handleClick = (name) => {
    if (faq.name == "none") setFaq({ name: name, mode: "on" });
    else if (faq.name == name) {
      if (faq.mode == "on") setFaq({ name: name, mode: "off" });
      else faq.mode = setFaq({ name: name, mode: "on" });
    } else {
      setFaq({ name: name, mode: "on" });
    }
  };

  return (
    <section id="faq">
      <div className="safe-container px-6 pt-24 pb-36 flex justify-center items-center">
        <div className="flex flex-col max-w-2xl w-full items-center space-y-10">
          <h1 className="text-4xl font-bold text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-center max-w-md">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
          <div className="flex flex-col w-full">
            <div
              className="h-14 flex items-center justify-between border-b border-gray-400 group"
              onClick={() => handleClick("faq1")}
            >
              <p className="text-gray-500 font-medium group-hover:text-red-500 cursor-pointer">
                What is Bookmark?
              </p>
              <img
                src={arrow}
                alt="arrow"
                className={`duration-500 ${
                  faq.name == "faq1" &&
                  faq.mode == "on" &&
                  "rotate-180 arrow-red"
                }`}
              />
            </div>
            {faq.name == "faq1" && faq.mode == "on" && (
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            )}
            <div
              className="h-14 flex items-center justify-between border-b border-gray-400 group"
              onClick={() => handleClick("faq2")}
            >
              <p className="text-gray-500 font-medium group-hover:text-red-500 cursor-pointer">
                How can I request a new browser?
              </p>
              <img
                src={arrow}
                alt="arrow"
                className={`duration-500 ${
                  faq.name == "faq2" &&
                  faq.mode == "on" &&
                  "rotate-180 arrow-red"
                }`}
              />
            </div>
            {faq.name == "faq2" && faq.mode == "on" && (
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            )}
            <div
              className="h-14 flex items-center justify-between border-b border-gray-400 group"
              onClick={() => handleClick("faq3")}
            >
              <p className="text-gray-500 font-medium group-hover:text-red-500 cursor-pointer">
                Is ther a mobile app?
              </p>
              <img
                src={arrow}
                alt="arrow"
                className={`duration-500 ${
                  faq.name == "faq3" &&
                  faq.mode == "on" &&
                  "rotate-180 arrow-red"
                }`}
              />
            </div>
            {faq.name == "faq3" && faq.mode == "on" && (
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            )}
            <div
              className="h-14 flex items-center justify-between border-b border-gray-400 group"
              onClick={() => handleClick("faq4")}
            >
              <p className="text-gray-500 font-medium group-hover:text-red-500 cursor-pointer">
                What about other Chromium browsers
              </p>
              <img
                src={arrow}
                alt="arrow"
                className={`duration-500 ${
                  faq.name == "faq4" &&
                  faq.mode == "on" &&
                  "rotate-180 arrow-red"
                }`}
              />
            </div>
            {faq.name == "faq4" && faq.mode == "on" && (
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                repellat amet doloribus consequuntur eos similique provident
                tempora voluptates iure quia fuga dicta voluptatibus culpa
                mollitia recusandae delectus id suscipit labore?
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
