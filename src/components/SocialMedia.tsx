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
          aria-label="Instagram"
          target="_blank"
        >
          <IoLogoInstagram />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.instagram.com/rraaffly"
          className="text-xl lg:text-lg hover:text-yellow-600"
          aria-label="Notion"
          target="_blank"
        >
          <RxNotionLogo />
        </Link>
      </li>
      <li>
        <Link
          href="https://www.linkedin.com/in/raaafly/"
          className="text-xl lg:text-lg hover:text-blue-800"
          aria-label="LinkedIn"
          target="_blank"
        >
          <IoLogoLinkedin />
        </Link>
      </li>
      <li>
        <Link
          href="https://github.com/raaafly"
          className="text-xl lg:text-lg hover:text-gray-700"
          aria-label="Github"
          target="_blank"
        >
          <IoLogoGithub />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
