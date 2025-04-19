"use client";

import React from "react";
import SubHeading from "../shared/SubHeading";
import { transferMarketData } from "./data";
import RowClickableTable from "@/components/shared/RowClickableTable";
import NavBtn from "../shared/NavBtn";
import { IoIosArrowForward } from "react-icons/io";

type Props = {};

const TransferMarket = (props: Props) => {
  const headers = [
    {
      key: "data",
      value: "Data",
    },
    {
      key: "amount",
      value: "Amount",
    },
  ];

  const filteredData =
    transferMarketData?.length > 1
      ? transferMarketData?.map((item: any) => {
          return {
            data: (
              <p className="text-sm font-bold text-[#3F8FD5]">
                {item?.category}
              </p>
            ),
            amount: <p className="text-sm font-bold">{item?.value}</p>,
          };
        })
      : [];

  const onRowClick = (row: any) => {
    console.log(row);
  };
  return (
    <div>
      <SubHeading subHeading="Transfer Market Data Variety" />
      <RowClickableTable
        headers={headers}
        data={filteredData}
        isClickable={true}
        onRowClick={onRowClick}
      />
      <div className="flex justify-end">
        <NavBtn
          href="/top-player"
          text="Advanced player search"
          Icon={IoIosArrowForward}
        />
      </div>
    </div>
  );
};

export default TransferMarket;
