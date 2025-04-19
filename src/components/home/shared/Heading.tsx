import React from "react";

type Props = {
  heading: string;
  className?: string;
};

const Heading = (props: Props) => {
  return (
    <h3
      className={`uppercase text-[20px] text-black font-extrabold p-1 ${props.className}`}
    >
      {props.heading}
    </h3>
  );
};

export default Heading;
