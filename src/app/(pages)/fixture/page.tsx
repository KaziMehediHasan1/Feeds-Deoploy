"use client";

import CurrentTopGoalScorerForFixture from "@/components/home/Fixture/CurrentTopGoalScorerForFixture";
import PremierleagueTableForFixture from "@/components/home/Fixture/PremierleagueTableForFixture";
import SubHeading from "@/components/home/shared/SubHeading";
import React from "react";
import { IoIosPeople } from "react-icons/io";

const SeasonalFixture = () => {
  return (
    <div className="bg-gray-50">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-[65%]">
          <div className="">
            <SubHeading subHeading="Matchday 31 24/25" />
            <div className="bg-white p-2 flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <label htmlFor="seasonOptions" className="text-sm">
                  Filtered by season:
                </label>
                <select
                  id="seasonOptions"
                  className="border border-gray-300 p-1 text-sm md:min-w-[200px]"
                >
                  <option value="24/25" className="text-[var(--color-accent)]">
                    24/25
                  </option>
                  <option value="23/24" className="text-[var(--color-accent)]">
                    23/24
                  </option>
                  <option value="22/23" className="text-[var(--color-accent)]">
                    22/23
                  </option>
                </select>
              </div>
              <div className="flex justify-between items-center">
                <label htmlFor="seasonOptions" className="text-sm">
                  Select Matchday:
                </label>
                <select
                  id="seasonOptions"
                  className="border border-gray-300 p-1 text-sm md:min-w-[200px]"
                >
                  <option value="24/25" className="text-[var(--color-accent)]">
                    1. Matchday
                  </option>
                  <option value="23/24" className="text-[var(--color-accent)]">
                    2. Matchday
                  </option>
                  <option value="22/23" className="text-[var(--color-accent)]">
                    3. Matchday
                  </option>
                </select>
              </div>
              <div>
                <button className="text-sm px-3 py-1 bg-[var(--color-accent)]">
                  Show
                </button>
              </div>
            </div>
          </div>
          {/* *********mathes list will be render here************* */}
          <div className="bg-white mt-2 px-1">
            <div className="flex flex-col gap-2 py-3">
              {Array(5)
                .fill(null)
                .map((item, index) => {
                  return (
                    <div key={index} className="border-[1px]">
                      <div className="flex justify-center items-center gap-4 text-black font-bold py-1">
                        <p className="">Everton</p>
                        <p className="bg-gray-300  px-3 rounded-sm">1 : 1</p>
                        <p className="">Arsenal</p>
                      </div>
                      <div className="flex flex-col justify-center items-center text-[12px]">
                        <p>
                          Saturday,{" "}
                          <span className="text-[#1d75a3]">Apr 5, 2025</span>-
                          12:30 PM
                        </p>
                        <p>
                          Referee:{" "}
                          <span className="text-[#1d75a3]">Darren England</span>
                        </p>
                        <p className="flex gap-1">
                          <span className="text-[20px]">
                            <IoIosPeople />
                          </span>
                          39.316
                        </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
        {/* ****right section table****** */}
        <div className="w-full md:w-[35%]">
          <div className="flex flex-col gap-3">
            <PremierleagueTableForFixture />
            <CurrentTopGoalScorerForFixture />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeasonalFixture;
