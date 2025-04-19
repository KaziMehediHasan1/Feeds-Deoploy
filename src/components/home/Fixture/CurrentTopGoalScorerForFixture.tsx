"use client";

import React from "react";
import { generateRandomId } from "@/lib/utils";
import ColumnClickableTable from "@/components/shared/ColumnClickableTable";
import SubHeading from "../shared/SubHeading";
import NavBtn from "../shared/NavBtn";

type Props = {};

const CurrentTopGoalScorerForFixture = (props: Props) => {
  const headers = [
    { value: "Player", key: "player", id: generateRandomId() },
    {
      value: "Club",
      key: "club",
      id: generateRandomId(),
      onClick: (value: any) => alert(`Name clicked: ${value}`),
    },
    {
      value: "Matches",
      key: "matches",
      id: generateRandomId(),
    },
    { value: "Goal", key: "goal", id: generateRandomId() },
  ];

  const data = [
    {
      id: generateRandomId(),
      clubName: "Arsenal",
      matches: 1,
      gradualPoints: 3,
      points: 3,
      player: "Bukayo Saka",
      match: 1,
      goal: 1,
    },
    {
      id: generateRandomId(),
      clubName: "Liverpool",
      matches: 1,
      gradualPoints: 3,
      points: 3,
      player: "Mohamed Salah",
      match: 1,
      goal: 2,
    },
    {
      id: generateRandomId(),
      clubName: "Manchester City",
      matches: 1,
      gradualPoints: 3,
      points: 3,
      player: "Erling Haaland",
      match: 1,
      goal: 3,
    },
    {
      id: generateRandomId(),
      clubName: "Leicester City",
      matches: 1,
      gradualPoints: 3,
      points: 3,
      player: "James Maddison",
      match: 1,
      goal: 1,
    },
    {
      id: generateRandomId(),
      clubName: "West Ham",
      matches: 1,
      gradualPoints: 3,
      points: 3,
      player: "Jarrod Bowen",
      match: 1,
      goal: 2,
    },
  ];

  const formattedData =
    data.map((item, index) => {
      return {
        player: (
          <p className="text-[#1d75a3] text-sm font-semibold">{item.player}</p>
        ),
        club: (
          <p className="text-[#1d75a3] text-sm hover:text-[#5ca6ff] font-semibold">
            {item.clubName}
          </p>
        ),
        matches: (
          <p className="text-sm font-semibold text-center">{item.matches}</p>
        ),
        goal: <p className="text-sm font-semibold text-center">{item.goal}</p>,
        id: item.id,
      };
    }) || [];
  return (
    <div className="w-full">
      <SubHeading subHeading="Current Top Goal Scorer" />
      <ColumnClickableTable headers={headers} data={formattedData} />
      <div className="flex justify-end mt-3">
        <NavBtn href="/pointtable" text="Top goal scorer of the season" />
      </div>
    </div>
  );
};

export default CurrentTopGoalScorerForFixture;
