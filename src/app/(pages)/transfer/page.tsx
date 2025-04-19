import AdditionalStatsLinkList from "@/components/transfers/AdditionalStatsLinkList";
import TopTrsansferStatsLinksList from "@/components/transfers/TopTrsansferStatsLinksList";
import TransferHeader from "@/components/transfers/TransferHeader";
import TransferPerLeagueLinkList from "@/components/transfers/TransferPerLeagueLinkList";
import TransferRumorStatsLinksList from "@/components/transfers/TransferRumorStatsLinksList";
import React from "react";

type Props = {};

const Transfer = (props: Props) => {
  return (
    <div>
      <TransferHeader />
      <div className="py-5 bg-white">
        <div className="py-3">
          <TopTrsansferStatsLinksList />
        </div>
        <div className="py-5">
          <TransferPerLeagueLinkList />
        </div>
        <div className="py-3">
          <TransferRumorStatsLinksList />
        </div>
        <div className="py-3">
          <AdditionalStatsLinkList />
        </div>
      </div>
    </div>
  );
};

export default Transfer;
