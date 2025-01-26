import { LucideGithub, LucideLinkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center min-h-32 py-8 items-center bg-blue-700  text-white ">
        <div className="max-w-7xl mx-auto px-4 space-y-3">
          <div className="flex flex-col gap-2 justify-center items-center">
            <h1 className="text-xl font-semibold text-center">
              pennypal.
            </h1>
            <p className="text-center text-sm text-white">
              Copyright © 2025 - All right reserved
            </p>
          </div>
          <hr className="border-white my-8" />
          <div className="flex mx-auto gap-5 justify-center items-center">
            <Link
              href={`#`}
              target="_blank"
              className="hover:text-blue-400 hover:-tranblue-y-1 transition-all duration-500"
            >
              <LucideLinkedin size={24} color="rgb(203 213 225)" />
            </Link>
            <Link
              href={`#`}
              target="_blank"
              className="hover:text-blue-400 hover:-tranblue-y-1 transition-all duration-500"
            >
              <LucideGithub size={24} color="rgb(203 213 225)" />
            </Link>
            <Link
              href={`#`}
              target="_blank"
              className="hover:text-blue-400 hover:-tranblue-y-1 transition-all duration-500"
            >
              <Mail size={24} color="rgb(203 213 225)" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
