"use client";

import React from "react";
import SubHeading from "../home/shared/SubHeading";

type ClosingOdd = {
  fixture_id: number;
  bookmaker: {
    id: number;
    name: string;
  };
  market_name: string;
  odds: {
    label: string;
    value: string;
  }[];
};

const mockClosingOdds: ClosingOdd[] = [
  {
    fixture_id: 10123,
    bookmaker: {
      id: 1,
      name: "Bet365",
    },
    market_name: "1X2",
    odds: [
      { label: "Home", value: "1.85" },
      { label: "Draw", value: "3.20" },
      { label: "Away", value: "4.10" },
    ],
  },
  {
    fixture_id: 10124,
    bookmaker: {
      id: 2,
      name: "William Hill",
    },
    market_name: "1X2",
    odds: [
      { label: "Home", value: "2.05" },
      { label: "Draw", value: "3.10" },
      { label: "Away", value: "3.70" },
    ],
  },
];

const ClosingMatch = () => {
  return (
    <section className="max-w-6xl mx-auto py-2 text-black">
      <SubHeading subHeading="Closing Odds" />

      <div className="grid gap-8 sm:grid-cols-2 mt-2">
        {mockClosingOdds.map((item) => (
          <article
            key={item.fixture_id}
            className="bg-white border border-gray-200  p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2 bg-black text-yellow-300 p-1">
              Fixture ID: {item.fixture_id}
            </h2>
            <p className="text-sm text-gray-500">
              <strong>Bookmaker:</strong> {item.bookmaker.name}
            </p>
            <p className="text-sm text-gray-500 mb-4">
              <strong>Market:</strong> {item.market_name}
            </p>

            <ul className="divide-y divide-gray-100">
              {item.odds.map((odd, index) => (
                <li key={index} className="flex justify-between py-1 text-sm">
                  <span className="text-gray-700">{odd.label}</span>
                  <span className="font-medium text-gray-900">{odd.value}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ClosingMatch;

/* "use client";

import { useEffect, useState } from "react";

type ClosingOdd = {
  fixture_id: number;
  bookmaker: {
    id: number;
    name: string;
  };
  market_name: string;
  odds: {
    label: string;
    value: string;
  }[];
};

const ClosingMatch = () => {
  const [closingOdds, setClosingOdds] = useState<ClosingOdd[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchClosingOdds = async () => {
    try {
      const res = await fetch(
        `https://api.sportmonks.com/v3/football/odds/closing?api_token=${process.env.NEXT_PUBLIC_SPORTMONKS_API_KEY}&markets=1x2&include=bookmaker`
      );
      const json = await res.json();
      setClosingOdds(json.data);
    } catch (err) {
      console.error("Error fetching closing odds:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClosingOdds();
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">
        Closing Odds - Historical Matches
      </h1>
      {loading ? (
        <p>Loading closing odds...</p>
      ) : (
        <div className="grid gap-6">
          {closingOdds.map((item, idx) => (
            <div key={idx} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold">
                Fixture ID: {item.fixture_id}
              </h2>
              <p className="text-sm text-gray-600 mb-2">
                Bookmaker: {item.bookmaker.name}
              </p>
              <p className="text-sm text-gray-600 mb-2">
                Market: {item.market_name}
              </p>
              <ul className="space-y-1">
                {item.odds.map((odd, oddIdx) => (
                  <li key={oddIdx} className="flex justify-between">
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

export default ClosingMatch; */
