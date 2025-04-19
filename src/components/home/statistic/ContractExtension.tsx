"use client";

import React from "react";
import SubHeading from "../shared/SubHeading";
import { contractExtensionData } from "./data";
import RowClickableTable from "@/components/shared/RowClickableTable";
import NavBtn from "../shared/NavBtn";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

const ContractExtension = (props: Props) => {
  const headers = [
    {
      key: "player",
      value: "Player/Position",
    },
    {
      key: "club",
      value: "Club",
    },
    {
      key: "extend",
      value: "Extended Until",
    },
  ];

  const filteredData =
    contractExtensionData?.length > 1
      ? contractExtensionData?.map((item: any) => {
          return {
            player: (
              <div>
                <p className="text-sm font-bold text-[#3F8FD5]">
                  {item?.playerName}
                </p>
                <p className="text-sm font-bold capitalize">{item?.position}</p>
              </div>
            ),
            club: <p className="text-sm font-bold">{item?.club}</p>,
            extend: (
              <p className="text-sm font-bold">{item?.extendedDate || "N/A"}</p>
            ),
          };
        })
      : [];

  const onRowClick = (row: any) => {
    console.log(row);
  };
  return (
    <div>
      <SubHeading subHeading="Latest Contract Extension" />
      <RowClickableTable
        headers={headers}
        data={filteredData}
        isClickable={true}
        onRowClick={onRowClick}
      />
      <div className="flex justify-end">
        <NavBtn
          href="/top-player"
          text="Complete Ranking"
          Icon={IoIosArrowForward}
        />
      </div>
    </div>
  );
};

export default ContractExtension;
