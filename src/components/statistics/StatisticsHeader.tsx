import React from "react";
import Heading from "../home/shared/Heading";

type Props = {};

const StatisticsHeader = (props: Props) => {
  return (
    <div className="bg-[var(--color-primary)] px-3 py-4">
      <Heading
        heading="Most Viewed Football Stats"
        className="text-black text-4xl text-center"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-3 items-center">
        <div>
          <img
            src="https://tmsi.akamaized.net/discover/statistics/hero/wettbewerb/formtabelle/GB1.webp"
            alt=""
            className="border-l-5 border-l-[#5CA6FF] border-b-5 border-b-[#5CA6FF]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <img
            src="https://tmsi.akamaized.net/discover/statistics/hero/wettbewerb/toperhalteneelfmeter/GB1.webp"
            alt=""
            className="border-l-5 border-l-[#5CA6FF] border-b-5 border-b-[#5CA6FF]"
          />
          <img
            src="https://tmsi.akamaized.net/discover/statistics/hero/global/topscorer.webp"
            alt=""
            className="border-l-5 border-l-[#5CA6FF] border-b-5 border-b-[#5CA6FF]"
          />
          <img
            src="https://tmsi.akamaized.net/discover/statistics/hero/wettbewerb/formtabelle/default.webp"
            alt=""
            className="border-l-5 border-l-[#5CA6FF] border-b-5 border-b-[#5CA6FF]"
          />
          <img
            src="https://tmsi.akamaized.net/discover/statistics/hero/global/legionaere.webp"
            alt=""
            className="border-l-5 border-l-[#5CA6FF] border-b-5 border-b-[#5CA6FF]"
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticsHeader;
