"use client";

import React from "react";
import SubHeading from "../../shared/SubHeading";
import { generateRandomId } from "@/lib/utils";
import ColumnClickableTable from "@/components/shared/ColumnClickableTable";
import NavBtn from "../../shared/NavBtn";

type Props = {};

const PremireLagueMatchFixture = (props: Props) => {
  const headers = [
    { value: "Date", key: "date", id: generateRandomId() },
    {
      value: "Home Team",
      key: "home",
      id: generateRandomId(),
      onClick: (value: any) => alert(`Name clicked: ${value}`),
    },
    { value: "Time", key: "time", id: generateRandomId() },
    { value: "Guest Team", key: "guest", id: generateRandomId() },
  ];

  const data = [
    {
      date: "2021-08-14",
      home: "Arsenal",
      time: "12:30",
      guest: "Chelsea",
      id: generateRandomId(),
    },
    {
      date: "2021-08-14",
      home: "Liverpool",
      time: "12:30",
      guest: "Manchester United",
      id: generateRandomId(),
    },
    {
      date: "2021-08-14",
      home: "Manchester City",
      time: "12:30",
      guest: "Tottenham",
      id: generateRandomId(),
    },
    {
      date: "2021-08-14",
      home: "Leicester City",
      time: "12:30",
      guest: "Everton",
      id: generateRandomId(),
    },
    {
      date: "2021-08-14",
      home: "West Ham",
      time: "12:30",
      guest: "Aston Villa",
      id: generateRandomId(),
    },
  ];

  const formattedData =
    data.map((item) => {
      const date = new Date(item.date);
      const dayOfWeek = date.toLocaleString("en-us", { weekday: "long" });

      const [hour, minute] = item.time.split(":");
      const formattedTime = new Date(0, 0, 0, parseInt(hour), parseInt(minute));
      const timeWithAMPM = formattedTime.toLocaleString("en-us", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });

      return {
        date: (
          <p className="text-[#1d75a3] text-sm hover:text-[#5ca6ff] font-semibold">
            {dayOfWeek} {item.date}
          </p>
        ),
        home: (
          <p className="text-[#1d75a3] text-sm hover:text-[#5ca6ff] font-semibold">
            {item.home}
          </p>
        ),
        time: (
          <p className="bg-gray-200 text-center hover:bg-[#5ca6ff] text-sm font-semibold">
            {timeWithAMPM}
          </p>
        ),
        guest: (
          <p className="text-[#1d75a3] text-sm hover:text-[#5ca6ff] font-semibold">
            {item.guest}
          </p>
        ),
        id: item.id,
      };
    }) || [];
  return (
    <div className="w-full">
      <SubHeading subHeading="Matches Schedule" />
      <ColumnClickableTable headers={headers} data={formattedData} />
      <div className="flex justify-end mt-3">
        <NavBtn href="/pointtable" text="To the complete match schedule" />
      </div>
    </div>
  );
};

export default PremireLagueMatchFixture;
