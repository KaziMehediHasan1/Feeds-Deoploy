import React from "react";
import Heading from "../home/shared/Heading";
import { generateRandomId } from "@/lib/utils";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

const TransferHeader = () => {
  const linkList = [
    {
      id: generateRandomId(),
      label: "Top Goal Scorers",
      href: "/stats/top-goal-scorers",
    },
    {
      id: generateRandomId(),
      label: "Most Assists",
      href: "/stats/most-assists",
    },
    {
      id: generateRandomId(),
      label: "Most Goal Contributions",
      href: "/stats/most-goal-contributions",
    },
  ];
  return (
    <div className="bg-[var(--color-primary)] px-3 py-4">
      <Heading
        heading="Transfers and Rumours"
        className="text-black text-4xl text-center font-bold"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
        <div className="flex flex-col gap-4">
          <div>
            <img
              src="https://tmsi.akamaized.net/discover/transfers/discover-transfers-latest.webp"
              alt=""
              className="border-l-5 border-l-[#5CA6FF] border-b-5 border-b-[#5CA6FF]"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <img
              src="https://tmsi.akamaized.net/discover/transfers/discover-transfers-top.webp"
              alt=""
              className="border-l-5 border-l-[#5CA6FF] border-b-5 border-b-[#5CA6FF] md:max-w-[205px] h-auto"
            />
            <img
              src="https://tmsi.akamaized.net/discover/transfers/discover-transfers-hero-rumour.webp"
              alt=""
              className="border-l-5 border-l-[#5CA6FF] border-b-5 border-b-[#5CA6FF] md:max-w-[205px] h-auto"
            />
          </div>
        </div>
        {/* ******right section******* */}
        <div>
          <Heading
            heading="Most viewed transfer stats"
            className="text-black text-[10px]"
          />
          <div>
            <LinkList list={linkList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferHeader;

// this component is only for link
interface Link {
  label: string;
  href: string;
  id?: string;
}

type Props = {
  list: Link[];
  className?: string;
};

const LinkList = (props: Props) => {
  const { list = [] } = props;
  return (
    <div className="flex flex-col gap-3 py-3">
      {list.map((item, index) => {
        return (
          <Link
            href={item.href}
            key={item.id || index}
            className="flex justify-between items-center border-y border-black px-4 py-2 cursor-pointer "
          >
            <p className="font-semibold text-black hover:text-[#3F8FD5] text-sm flex gap-2">
              <span className="bg-black text-white px-[6px] font-bold rounded-sm">
                {index + 1}
              </span>
              {item.label}
            </p>
            <IoIosArrowForward className="text-black" />
          </Link>
        );
      })}
    </div>
  );
};
