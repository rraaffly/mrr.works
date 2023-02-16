import React from "react";
import { Link, Text } from "../ui";

const ShowcaseCard = () => {
  return (
    <div className="flex flex-col lg:flex-row rounded-md border border-gray-200">
      <div className="w-full h-full lg:w-52 h-40">
        <img src="/image.jpg" className="w-full h-full object-cover" alt="" />
      </div>

      <div className="w-full py-4 px-8">
        <Link href="/" className="mb-2 block font-bold text-lg" styled>
          Dynamic broadcast overlays with Google Sheets and Web Technologies
        </Link>
        <Text as="p" className="text-sm tracking-tight">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum eligendi
          perferendis ex similique, ut porro quis qui pariatur dolorum laborum
          autem architecto et veniam aliquid, eaque debitis quia dolor
          cupiditate.
        </Text>
        <div className="flex flex-row gap-x-2">
          <div className="mt-4 text-[10px] leading-4 px-2 py-0.5 bg-blue-500 block w-fit rounded text-white font-medium tracking-tight">
            React
          </div>
          <div className="mt-4 text-[10px] leading-4 px-2 py-0.5 bg-gray-700 block w-fit rounded text-white font-medium tracking-tight">
            Express
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
