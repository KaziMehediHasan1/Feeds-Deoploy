"use client";
import RowClickableTable from "@/components/shared/RowClickableTable";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import NavBtn from "../shared/NavBtn";

const RumourTransfer = () => {
  const [transferList, setTransferList] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    const fetchTransfer = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_URL}/api/proxy/footballfeed?path=/transfers/rumours`
        );
        const response = await res.json();
        if (Array.isArray(response)) {
          setTransferList(response);
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
      value: "Player/Current Club",
    },
    {
      key: "club",
      value: "Interested",
    },
    {
      key: "probability",
      value: "Probability",
    },
  ];

  const filteredData =
    transferList?.length > 1
      ? transferList?.slice(0, 5)?.map((item: any) => {
          return {
            player: (
              <div>
                <p className="text-sm font-bold text-[#3F8FD5]">
                  {item?.player?.name}
                </p>
                <p className="text-sm font-bold capitalize">
                  {item?.from_team?.name}
                </p>
              </div>
            ),
            club: <p className="text-sm font-bold">{item?.to_team?.name}</p>,
            probability: (
              <p className="text-sm font-bold">
                {item?.probability?.name || "N/A"}
              </p>
            ),
          };
        })
      : [];

  const onRowClick = (row: any) => {
    console.log(row);
  };

  return (
    <div>
      <RowClickableTable
        headers={headers}
        data={filteredData}
        isClickable={true}
        onRowClick={onRowClick}
        isLoading={isLoading}
      />
      <div className="flex justify-end">
        <NavBtn
          href="/transfer"
          text="Go to Rumour Mill"
          Icon={IoIosArrowForward}
        />
      </div>
    </div>
  );
};

export default RumourTransfer;
