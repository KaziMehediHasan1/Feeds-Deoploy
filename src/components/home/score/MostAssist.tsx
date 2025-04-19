"use client";

import React from "react";
import SubHeading from "../shared/SubHeading";

import RowClickableTable from "@/components/shared/RowClickableTable";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import NavBtn from "../shared/NavBtn";

type Props = {};

const MostAssist = (props: Props) => {
  const [topAssistsList, setTopAssistsList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchTransfer = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/transfers/official`
        );
        const response = await res.json();
        if (Array.isArray(response)) {
          setTopAssistsList(response);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchTransfer();
  }, []);

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
      key: "assists",
      value: "Assists",
    },
  ];

  const filteredData =
    topAssistsList?.length > 1
      ? topAssistsList?.slice(0, 5)?.map((item: any) => {
          return {
            player: (
              <div>
                <p className="text-sm font-bold text-[#3F8FD5]">
                  {item?.player?.name}
                </p>
                <p className="text-sm font-bold capitalize">
                  {item?.player?.position}
                </p>
              </div>
            ),
            club: <p className="text-sm font-bold">{item?.to_team?.name}</p>,
            assists: (
              <p className="text-sm font-bold">{item?.fee?.amount || "N/A"}</p>
            ),
          };
        })
      : [];

  const onRowClick = (row: any) => {
    console.log(row);
  };

  return (
    <div>
      <SubHeading subHeading="Most Assist" />
      <RowClickableTable
        headers={headers}
        data={filteredData}
        isClickable={true}
        onRowClick={onRowClick}
        isLoading={isLoading}
      />
      <div className="flex justify-end">
        <NavBtn
          href="/top-assist"
          text="Complete list of assists"
          Icon={IoIosArrowForward}
        />
      </div>
    </div>
  );
};

export default MostAssist;
