import Heading from "@/components/home/shared/Heading";
import Buttons from "@/components/shared/all-transfer/Buttons";
import Filtering from "@/components/shared/all-transfer/filtering";
import Tables from "@/components/shared/all-transfer/Tables";
import CommonWrapper from "@/components/shared/CommonWrapper";
import React from "react";

const TopGoalScorers = () => {
  const data = "data";

  return (
    <div>
      <CommonWrapper>
        <div className="py-3 flex item-center gap-x-4">
          <div className="w-[65%] bg-white">
            <Heading
              heading="Latest Transfers"
              className="text-yellow-400 bg-black"
            />
            <Filtering
              Data={[
                {
                  label: ["Choose Country"],
                  labelFor: "country",
                  option: [
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                    "England",
                    "Spain",
                    "Germany",
                  ],
                  DefaultValue: "Select a country",
                  selectionName: "country",
                  selectionID: "country",
                },
                {
                  label: ["Choose League"],
                  labelFor: "league",
                  option: ["Premier League", "La Liga", "Bundesliga"],
                  DefaultValue: "Select a league",
                  selectionName: "league",
                  selectionID: "league",
                },
                {
                  label: ["Choose League"],
                  labelFor: "league",
                  option: ["Premier League", "La Liga", "Bundesliga"],
                  DefaultValue: "Select a league",
                  selectionName: "league",
                  selectionID: "league",
                },
              ]}
            />
            <Buttons buttonOne="Compact" buttonTwo="Details" />
            <Tables
              ThName={["Player", "Age", "Nat.", "Left", "Joined", "Fee"]}
              TData={[
                [
                  {
                    Image: "https://i.pravatar.cc/40?img=1",
                    name: "Kazi",
                    position: "Keeper",
                  },
                  "25",
                  "USA",
                  "BD",
                  "May",
                  "500000",
                ],
                [
                  {
                    Image: "https://i.pravatar.cc/40?img=2",
                    name: "John",
                    position: "Defender",
                  },
                  "30",
                  "Canada",
                  "BD",
                  "May",
                  "500000",
                ],
                [
                  {
                    Image: "https://i.pravatar.cc/40?img=3",
                    name: "Ali",
                    position: "Striker",
                  },
                ],
                [
                  {
                    Image: "https://i.pravatar.cc/40?img=2",
                    name: "John",
                    position: "Defender",
                  },
                  "30",
                  "Canada",
                  "BD",
                  "May",
                  "500000",
                ],
              ]}
            />
          </div>

          <div className="w-[35%]">
            <Heading
              heading="Latest Transfers"
              className="text-yellow-400 bg-black"
            />
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default TopGoalScorers;
