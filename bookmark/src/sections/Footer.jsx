import React from "react";
import foot_logo from "../images/logo-bookmark-footer.svg";
import fb from "../images/icon-facebook.svg";
import tw from "../images/icon-twitter.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

export const Footer = () => {
  return (
    <section id="footer" className="bg-slate-900 py-20">
      <div className="safe-container max-w-5xl both-flex md:justify-between items-center space-y-16 md:space-y-0">
        <div className="both-flex md:space-x-16 md:space-y-0 space-y-10 items-center">
          <img src={foot_logo} alt="foot_logo" />
          <AnchorLink
            href="#feature"
            className="text-gray-400 hover:text-red-500 uppercase"
          >
            Features
          </AnchorLink>
          <AnchorLink
            href="#download"
            className="text-gray-400 hover:text-red-500 uppercase"
          >
            Download
          </AnchorLink>
          <AnchorLink
            href="#faq"
            className="text-gray-400 hover:text-red-500 uppercase"
          >
            Faq
          </AnchorLink>
        </div>
        <div className="flex flex-row space-x-10">
          <a href="#" className="ficon">
            <img src={fb} alt="fb" />
          </a>
          <a href="#" className="ficon">
            <img src={tw} alt="tw" />
          </a>
        </div>
      </div>
    </section>
  );
};
