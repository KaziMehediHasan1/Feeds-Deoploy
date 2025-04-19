"use client";

import SubHeading from "../home/shared/SubHeading";

type Odd = {
  label: string;
  value: string;
};

type OddsData = {
  fixture_id: number;
  bookmaker: {
    id: number;
    name: string;
  };
  market_name: string;
  odds: Odd[];
};

type Props = {
  odds: OddsData[];
};

const WiningMatch = ({ odds }: Props) => {
  return (
    <div className="mx-auto py-2  ">
      <SubHeading subHeading="Winning Odds" />

      {odds.length === 0 ? (
        <p className="text-gray-600">No data available here.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 mt-2">
          {odds.map((item) => (
            <div
              key={item.fixture_id}
              className="border border-gray-200  hover:shadow-md transition-shadow p-5 bg-white"
            >
              <h2 className="text-lg font-bold mb-2 bg-black text-yellow-300 px-2 py-1 ">
                {item.bookmaker.name}
              </h2>
              <p className="text-gray-700 mb-4">
                Market: <span className="font-medium">{item.market_name}</span>
              </p>
              <ul className="space-y-2">
                {item.odds.map((odd, oddIdx) => (
                  <li
                    key={oddIdx}
                    className="flex justify-between items-center px-3 py-2 rounded-md even:bg-gray-100 odd:bg-gray-50"
                  >
                    <span className="text-gray-800 font-medium">
                      {odd.label === "1"
                        ? "Home Win"
                        : odd.label === "2"
                        ? "Away Win"
                        : "Draw"}
                    </span>
                    <span className="text-sm font-semibold text-gray-700">
                      {odd.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Extended and p
const staticOdds: OddsData[] = [
  {
    fixture_id: 300101,
    bookmaker: { id: 1, name: "Bet365" },
    market_name: "1X2",
    odds: [
      { label: "1", value: "1.90" },
      { label: "X", value: "3.40" },
      { label: "2", value: "4.00" },
    ],
  },
  {
    fixture_id: 300102,
    bookmaker: { id: 2, name: "William Hill" },
    market_name: "1X2",
    odds: [
      { label: "1", value: "2.10" },
      { label: "X", value: "3.20" },
      { label: "2", value: "3.70" },
    ],
  },
  {
    fixture_id: 300103,
    bookmaker: { id: 3, name: "Betway" },
    market_name: "1X2",
    odds: [
      { label: "1", value: "2.00" },
      { label: "X", value: "3.10" },
      { label: "2", value: "3.90" },
    ],
  },
  {
    fixture_id: 300104,
    bookmaker: { id: 4, name: "Unibet" },
    market_name: "1X2",
    odds: [
      { label: "1", value: "1.95" },
      { label: "X", value: "3.35" },
      { label: "2", value: "4.10" },
    ],
  },
];

const StaticWinningMatchPage = () => {
  return <WiningMatch odds={staticOdds} />;
};

export default StaticWinningMatchPage;

/* "use client";

import { useEffect, useState } from "react";

type Odd = {
  label: string;
  value: string;
};

type OddsData = {
  fixture_id: number;
  bookmaker: {
    id: number;
    name: string;
  };
  market_name: string;
  odds: Odd[];
};

const fixtureId = 217721; // Replace this with a real fixture ID

const WiningMatch = () => {
  const [odds, setOdds] = useState<OddsData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchWinningOdds = async () => {
    try {
      const res = await fetch(
        `https://api.sportmonks.com/v3/football/odds/pre-match/fixtures/${fixtureId}?api_token=${process.env.NEXT_PUBLIC_SPORTMONKS_API_KEY}&markets=1x2&include=bookmaker`
      );
      const json = await res.json();
      setOdds(json.data);
    } catch (err) {
      console.error("Failed to fetch winning odds:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWinningOdds();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Winning Odds</h1>
      {loading ? (
        <p>Loading winning odds...</p>
      ) : odds.length === 0 ? (
        <p>No data found for the given fixture.</p>
      ) : (
        <div className="grid gap-6">
          {odds.map((item, idx) => (
            <div key={idx} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">
                Bookmaker: {item.bookmaker.name}
              </h2>
              <p className="text-gray-500 mb-2">Market: {item.market_name}</p>
              <ul className="space-y-1">
                {item.odds.map((odd, oddIdx) => (
                  <li key={oddIdx} className="flex justify-between">
                    <span>
                      {odd.label === "1"
                        ? "Home Win"
                        : odd.label === "2"
                        ? "Away Win"
                        : "Draw"}
                    </span>
                    <span className="font-medium">{odd.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WiningMatch;
 */
