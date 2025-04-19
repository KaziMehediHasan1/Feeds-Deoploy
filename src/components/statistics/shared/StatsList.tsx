import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

interface StatsLink {
  label: string;
  href: string;
  id?: string;
}

type Props = {
  list: StatsLink[];
  className?: string;
};

const StatsList = (props: Props) => {
  const { list = [] } = props;
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 gap-y-2 p-4">
      {list.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={item.id || index}
            className="flex justify-between items-center border-y border-y-black px-4 py-2 cursor-pointer bg-[#f8fbfc] hover:text-[#3F8FD5]"
          >
            <p className="font-semibold text-[##00193f] text-sm">
              {item.label}
            </p>
            <IoIosArrowForward className="text-black" />
          </Link>
        );
      })}
    </div>
  );
};

export default StatsList;
