import React from "react";
import { Link } from "./ui";
import { GithubLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

const SocialMedia = () => {
  return (
    <ul className="flex flex-row gap-x-3">
      <li>
        <Link href="/" className="text-lg text-pink-800">
          <InstagramLogo weight="regular" />
        </Link>
      </li>
      <li>
        <Link href="/" className="text-lg text-blue-800">
          <LinkedinLogo weight="fill" />
        </Link>
      </li>
      <li>
        <Link href="/" className="text-lg text-gray-700">
          <GithubLogo weight="regular" />
        </Link>
      </li>
    </ul>
  );
};

export default SocialMedia;
