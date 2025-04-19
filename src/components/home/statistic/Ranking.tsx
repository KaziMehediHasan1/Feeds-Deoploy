"use client";

import React from "react";
import SubHeading from "../shared/SubHeading";
import { countryPointData } from "./data";
import RowClickableTable from "@/components/shared/RowClickableTable";
import NavBtn from "../shared/NavBtn";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

const Ranking = (props: Props) => {
  const headers = [
    {
      key: "country",
      value: "Country",
    },
    {
      key: "point",
      value: "Points",
    },
  ];

  const filteredData =
    countryPointData?.length > 1
      ? countryPointData?.map((item: any) => {
          return {
            country: (
              <p className="text-sm font-bold text-[#3F8FD5]">
                {item?.country}
              </p>
            ),
            point: <p className="text-sm font-bold">{item?.points}</p>,
          };
        })
      : [];

  const onRowClick = (row: any) => {
    console.log(row);
  };
  return (
    <div>
      <SubHeading subHeading="UEFA 5-year rankings" />
      <RowClickableTable
        headers={headers}
        data={filteredData}
        isClickable={true}
        onRowClick={onRowClick}
      />
      <div className="flex justify-end">
        <NavBtn
          href="/top-player"
          text="All Contract Extension"
          Icon={IoIosArrowForward}
        />
      </div>
    </div>
  );
};

export default Ranking;
