import React from "react";
import TopGoalScorer from "./TopGoalScorer";
import MostAssist from "./MostAssist";
import MostValueablePlayers from "./MostValueablePlayers";

type Props = {};

const TopScore = (props: Props) => {
  return (
    <div className="shadow-lg p-2 my-3">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="flex-1">
          <TopGoalScorer />
        </div>
        <div className="flex-1">
          <MostAssist />
        </div>
        <div className="flex-1">
          <MostValueablePlayers />
        </div>
      </div>
    </div>
  );
};

export default TopScore;
