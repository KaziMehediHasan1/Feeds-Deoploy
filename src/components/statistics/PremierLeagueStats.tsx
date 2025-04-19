import React from "react";
import Heading from "../home/shared/Heading";
import { generateRandomId } from "@/lib/utils";
import StatsList from "./shared/StatsList";

type Props = {};

const PremierLeagueStats = (props: Props) => {
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
    {
      id: generateRandomId(),
      label: "Most Clean Sheets",
      href: "/stats/most-clean-sheets",
    },
    {
      id: generateRandomId(),
      label: "Record Goal Scorers",
      href: "/stats/record-goal-scorers",
    },
    {
      id: generateRandomId(),
      label: "Foreigners",
      href: "/stats/foreigners",
    },
    {
      id: generateRandomId(),
      label: "Most Penalties Awarded",
      href: "/stats/most-penalties-awarded",
    },
    {
      id: generateRandomId(),
      label: "Form Tables",
      href: "/stats/form-tables",
    },
    {
      id: generateRandomId(),
      label: "All League Champions",
      href: "/stats/all-league-champions",
    },
    {
      id: generateRandomId(),
      label: "Attendance Rankings",
      href: "/stats/attendance-rankings",
    },
  ];
  return (
    <div className="bg-white">
      <Heading heading="Premier League Stats" className="text-center" />
      <StatsList list={linkList} />
    </div>
  );
};

export default PremierLeagueStats;
