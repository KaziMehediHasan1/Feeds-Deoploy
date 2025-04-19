"use client";

import React from "react";
import SubHeading from "../shared/SubHeading";

import RowClickableTable from "@/components/shared/RowClickableTable";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import NavBtn from "../shared/NavBtn";
import { tr } from "framer-motion/client";

type Props = {};

const TopGoalScorer = (props: Props) => {
  const [topGoalScorerList, setTopGoalScorerList] = useState<any[]>([]);
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
          setTopGoalScorerList(response);
        }
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };
    fetchTransfer();
  }, []);

  console.log(topGoalScorerList, "topGoalScorerList");

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
      key: "goals",
      value: "Goals",
    },
  ];

  const filteredData =
    topGoalScorerList?.length > 1
      ? topGoalScorerList?.slice(0, 5)?.map((item: any) => {
          return {
            player: (
              <div>
                <a href="/player/id">
                  <p className="text-sm font-bold text-[#3F8FD5]">
                    {item?.player?.name}
                  </p>
                </a>
                <p className="text-sm font-bold capitalize">
                  {item?.player?.position}
                </p>
              </div>
            ),
            club: <p className="text-sm font-bold">{item?.to_team?.name}</p>,
            goals: (
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
      <SubHeading subHeading="Top Goal Scorer" />
      <RowClickableTable
        headers={headers}
        data={filteredData}
        isClickable={true}
        onRowClick={onRowClick}
        isLoading={isLoading}
      />
      <div className="flex justify-end">
        <NavBtn
          href="/top-scorer"
          text="View Full List"
          Icon={IoIosArrowForward}
        />
      </div>
    </div>
  );
};

export default TopGoalScorer;
