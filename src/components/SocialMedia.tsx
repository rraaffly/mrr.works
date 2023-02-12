import React from "react";
import { Link } from "./ui";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5";
import { RxNotionLogo } from "react-icons/rx";

const SocialMedia = () => {
  return (
    <ul className="flex flex-row gap-x-5">
      <li>
        <Link
          href="https://www.instagram.com/rraaffly"
          className="text-xl lg:text-lg hover:text-pink-700"
          newTab
        >
          <IoLogoInstagram />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com/rraaffly"
          className="text-xl lg:text-lg hover:text-yellow-600"
          newTab
        >
          <RxNotionLogo />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/raaafly/"
          className="text-xl lg:text-lg hover:text-blue-800"
          newTab
        >
          <IoLogoLinkedin />
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/raaafly"
          className="text-xl lg:text-lg hover:text-gray-700"
          newTab
        >
          <IoLogoGithub />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
