import React from "react";
import { Link, Text } from "../ui";

const PostCard = () => {
  return (
    <div className="px-4 py-2.5 rounded border border-gray-200">
      <div className="flex flex-col">
        <Text as="span" className="text-[10px] leading-4">
          13 Februari 2023
        </Text>
        <Link href="/" className="text-base leading-5 font-semibold" styled>
          Dynamic broadcast overlays with Google Sheets and web technologies
        </Link>
        <Text as="p" className="mt-2 text-xs leading-relaxed">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque ab
          unde dolores recusandae quod voluptatum, error dolorem facilis ipsum
          id rerum voluptatem doloribus minima enim fugiat neque quam ex!
          Aliquam?
        </Text>
      </div>
    </div>
  );
};

export default PostCard;
