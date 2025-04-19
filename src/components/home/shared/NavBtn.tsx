import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { IconType } from "react-icons";

type Props = {
  href: string;
  Icon?: IconType;
  text?: string;
};

const NavBtn = ({ href, text = "Go", Icon = IoIosArrowForward }: Props) => {
  return (
    <Link
      href={href}
      className="flex items-center text-sm font-bold text-[#3F8FD5] hover:text-[#5ca6ff]"
    >
      {text} <Icon />
    </Link>
  );
};

export default NavBtn;
