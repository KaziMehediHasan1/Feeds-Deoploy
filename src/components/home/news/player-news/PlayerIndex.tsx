import React from "react";
/* import Heading from "../../shared/Heading"; */
import SideNews from "./SideNews";
import PlayerNews from "./PlayerNews";

type Props = {};

const PlayerIndex = (props: Props) => {
  return (
    <div className="">
      {/* <Heading heading="Latest News" /> */}
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-[65%]">
          <PlayerNews />
        </div>
        <div className="w-full md:w-[35%]">
          <SideNews />
          {/* <PopularNewsList /> */}
        </div>
      </div>
    </div>
  );
};

export default PlayerIndex;
