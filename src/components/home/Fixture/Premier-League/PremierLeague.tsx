import React from "react";
import Heading from "../../shared/Heading";
import PremireLagueMatchFixture from "./PremireLeagueMatchFixture";
import PremierLeaguePointTable from "./PremierLaguePointTable";

type Props = {};

const PremierLeague = (props: Props) => {
  return (
    <div className="shadow-lg p-2 my-3">
      <Heading heading="Premier League" />
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-[65%]">
          <PremireLagueMatchFixture />
        </div>
        <div className="w-full md:w-[35%]">
          <PremierLeaguePointTable />
        </div>
      </div>
    </div>
  );
};

export default PremierLeague;
