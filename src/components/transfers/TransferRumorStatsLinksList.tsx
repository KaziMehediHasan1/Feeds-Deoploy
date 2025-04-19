import React from "react";
import { generateRandomId } from "@/lib/utils";
import Heading from "../home/shared/Heading";
import StatsList from "../statistics/shared/StatsList";

type Props = {};

const TransferRumorStatsLinksList = (props: Props) => {
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
    <div>
      <Heading heading="Transfer Rumour Stats" className="text-center" />
      <StatsList list={linkList} />
    </div>
  );
};

export default TransferRumorStatsLinksList;
