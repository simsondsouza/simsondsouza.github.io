import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import { profilePic } from "../assets";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub, AiOutlineDownload } from "react-icons/ai";

const Footer = () => (
  <footer id="contactMe" className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-t border-white/10">
    <div className="container mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-white font-poppins mb-4">
              {aboutMe.name}
            </h2>
            <p className="font-poppins font-normal text-gray-300 text-[16px] leading-[30.8px] max-w-[470px]">
              {aboutMe.tagLine}
            </p>
          </div>
          {/* Social Media */}
          <div className="flex flex-row space-x-4">
            {socialMedia.map((social) => (
              <a
                href={social.link}
                target="_blank"
                key={social.id}
                className="p-3 rounded-xl bg-glass border border-white/10 text-white text-[25px] hover:text-blue-400 hover:bg-glass-hover transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                {React.createElement(social.icon)}
              </a>
            ))}
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={resumeLink} target="_blank" rel="noopener noreferrer">
              <button className="btn-primary inline-flex items-center justify-center px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <AiOutlineDownload className="mr-2" />
                View Resume
              </button>
            </a>
          </div>
        </div>
        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={profilePic}
            alt="profile"
            className="w-[220px] h-auto rounded-2xl border border-white/20 shadow-2xl block"
          />
        </div>
      </div>
      {/* Bottom bar */}
      <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} {aboutMe.name}. All rights reserved.</p>
        <p>Built with React, Vite, Tailwind CSS, and Framer Motion.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
