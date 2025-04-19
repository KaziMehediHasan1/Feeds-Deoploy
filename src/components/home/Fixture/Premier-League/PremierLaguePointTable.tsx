"use client";

import React from "react";
import SubHeading from "../../shared/SubHeading";
import { generateRandomId } from "@/lib/utils";
import ColumnClickableTable from "@/components/shared/ColumnClickableTable";
import NavBtn from "../../shared/NavBtn";

type Props = {};

const PremierLeaguePointTable = (props: Props) => {
  const headers = [
    { value: "#", key: "sl", id: generateRandomId() },
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
    { value: "GD", key: "gd", id: generateRandomId() },
    { value: "Pts", key: "point", id: generateRandomId() },
  ];

  const data = [
    {
      id: generateRandomId(),
      clubName: "Arsenal",
      matches: 1,
      gradualPoints: 3, // Placeholder points
      points: 3, // Placeholder points
    },
    {
      id: generateRandomId(),
      clubName: "Liverpool",
      matches: 1,
      gradualPoints: 3, // Placeholder points
      points: 3, // Placeholder points
    },
    {
      id: generateRandomId(),
      clubName: "Manchester City",
      matches: 1,
      gradualPoints: 3, // Placeholder points
      points: 3, // Placeholder points
    },
    {
      id: generateRandomId(),
      clubName: "Leicester City",
      matches: 1,
      gradualPoints: 3, // Placeholder points
      points: 3, // Placeholder points
    },
    {
      id: generateRandomId(),
      clubName: "West Ham",
      matches: 1,
      gradualPoints: 3, // Placeholder points
      points: 3, // Placeholder points
    },
  ];

  const formattedData =
    data.map((item, index) => {
      return {
        sl: <p className="text-[#1d75a3] text-sm font-semibold">{index + 1}</p>,
        club: (
          <p className="text-[#1d75a3] text-sm hover:text-[#5ca6ff] font-semibold">
            {item.clubName}
          </p>
        ),
        matches: (
          <p className="text-sm font-semibold text-center">{item.matches}</p>
        ),
        gd: (
          <p className="text-sm font-semibold text-center">
            {item.gradualPoints}
          </p>
        ),
        point: (
          <p className="text-sm font-semibold text-center">{item.points}</p>
        ),
        id: item.id,
      };
    }) || [];
  return (
    <div className="w-full">
      <SubHeading subHeading="Table" />
      <ColumnClickableTable headers={headers} data={formattedData} />
      <div className="flex justify-end mt-3">
        <NavBtn href="/pointtable" text="To the complete table" />
      </div>
    </div>
  );
};

export default PremierLeaguePointTable;
