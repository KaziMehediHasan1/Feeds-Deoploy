import React from "react";
import Heading from "../shared/Heading";
import ContractExtension from "./ContractExtension";
import Ranking from "./Ranking";
import TransferMarket from "./TransferMarket";

type Props = {};

const StatisticSections = (props: Props) => {
  return (
    <div className="shadow-lg p-2 my-3">
      <Heading heading="Statistics" />
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <ContractExtension />
        </div>
        <div className="flex-1">
          <Ranking />
        </div>
        <div className="flex-1">
          <TransferMarket />
        </div>
      </div>
    </div>
  );
};

export default StatisticSections;
