"use client";

import { BookOpen } from "lucide-react";
import SubHeading from "../home/shared/SubHeading";

const staticOdds = [
  {
    fixture_id: 101,
    bookmaker: { id: 1, name: "Bet365" },
    market_name: "1x2",
    odds: [
      { label: "1", value: "1.85" },
      { label: "X", value: "3.20" },
      { label: "2", value: "4.10" },
    ],
  },
  {
    fixture_id: 102,
    bookmaker: { id: 2, name: "William Hill" },
    market_name: "1x2",
    odds: [
      { label: "1", value: "2.00" },
      { label: "X", value: "3.50" },
      { label: "2", value: "3.80" },
    ],
  },
];

const PreMatch = () => {
  return (
    <section className="max-w-7xl mx-auto mt-2 bg-white  mb-2">
      <div className="mb-8">
        <SubHeading subHeading="Pre-Match Odds" />
      </div>

      <div className="grid md:grid-cols-2 gap-6 ">
        {staticOdds.map((item) => (
          <div
            key={item.fixture_id}
            className="border border-gray-200  p-5  hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-2 bg-black text-[#f2e015] p-1">
              <h2 className="text-xl font-semibold">{item.bookmaker.name}</h2>
              <span className="text-sm border px-2 py-1 rounded-full text-[#f2e015]">
                Market: {item.market_name}
              </span>
            </div>
            <div className="w-full h-px bg-gray-200 mb-4" />
            <ul className="space-y-2">
              {item.odds.map((odd, idx) => (
                <li
                  key={idx}
                  className="flex justify-between text-gray-800 text-md px-3 py-2 rounded-md 
                 even:bg-gray-100 odd:bg-gray-200 transition-colors"
                >
                  <span className="font-medium">{odd.label}</span>
                  <span className="text-sm">{odd.value}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PreMatch;

/* "use client";

import { useEffect, useState } from "react";

type Bookmaker = {
  id: number;
  name: string;
};

type OddData = {
  fixture_id: number;
  bookmaker: Bookmaker;
  market_name: string;
  odds: {
    label: string;
    value: string;
  }[];
};

const PreMatch = () => {
  const [odds, setOdds] = useState<OddData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchPreMatchOdds = async () => {
    try {
      const res = await fetch(
        `https://api.sportmonks.com/v3/football/odds/pre-match?api_token=${process.env.NEXT_PUBLIC_SPORTMONKS_API_KEY}&include=bookmaker&markets=1x2`
      );
      const json = await res.json();
      setOdds(json.data);
    } catch (error) {
      console.error("Failed to fetch pre-match odds", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPreMatchOdds();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Pre-Match Odds</h1>
      {loading ? (
        <p>Loading odds...</p>
      ) : (
        <div className="grid gap-6">
          {odds.map((item, index) => (
            <div key={index} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">
                Bookmaker: {item.bookmaker.name}
              </h2>
              <p className="text-sm text-gray-500 mb-1">
                Market: {item.market_name}
              </p>
              <ul className="space-y-1">
                {item.odds.map((odd, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span>{odd.label}</span>
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

export default PreMatch;
 */
