"use client";

import { AiOutlineMenu } from "react-icons/ai";

const UserName = () => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
          onClick={() => {}}
        >
          Airbnb your home
        </div>
        <div
          className="hover-shadow-md transition rounded-full cursor-pointer items-center gap-3 flex flex-row border-neutral-200 p-4 md:py-1 md:px-2 border-[1px]"
          onClick={() => {}}
        >
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default UserName;
