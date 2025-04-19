import GlobalClubStats from "@/components/statistics/GlobalClubStats";
import GlobalCoachStats from "@/components/statistics/GlobalCoachStats";
import GlobalPlayerStats from "@/components/statistics/GlobalPlayerStats";
import NationalTeamStats from "@/components/statistics/NationalTeamStats";
import PremierLeagueStats from "@/components/statistics/PremierLeagueStats";
import StatisticsHeader from "@/components/statistics/StatisticsHeader";
import React from "react";

const Stats = () => {
  return (
    <div className="bg-white">
      <StatisticsHeader />
      <div className="py-5">
        <PremierLeagueStats />
      </div>
      <div className="py-5">
        <GlobalPlayerStats />
      </div>
      <div className="py-5">
        <GlobalClubStats />
      </div>
      <div className="py-5">
        <GlobalCoachStats />
      </div>
      <div className="py-5">
        <NationalTeamStats />
      </div>
    </div>
  );
};

export default Stats;
