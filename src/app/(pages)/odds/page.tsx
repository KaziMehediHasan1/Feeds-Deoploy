import ClosingMatch from "@/components/odd-match/ClosingMatch";
import PreMatch from "@/components/odd-match/PreMatch";
import StaticWinningMatchPage from "@/components/odd-match/WiningMatch";

const Odds = () => {
  return (
    <div>
      <div>
        <PreMatch />
      </div>
      <div>
        <ClosingMatch />
      </div>
      <div>
        <StaticWinningMatchPage />
      </div>
    </div>
  );
};

export default Odds;
