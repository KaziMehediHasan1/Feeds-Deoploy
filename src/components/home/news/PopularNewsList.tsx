import React from "react";
import SubHeading from "../shared/SubHeading";

type Props = {};

const PopularNewsList = (props: Props) => {
  return (
    <div className="h-full">
      {/* <div className="flex flex-col justify-end h-full"> */}
      <div className="flex flex-col h-full">
        <div className="flex flex-col gap-1">
          <SubHeading subHeading="Most Popular News" />
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div key={index} className=" p-1  bg-gray-100">
                <div className="flex flex-col md:flex-row gap-2">
                  <div>
                    <img
                      src="https://img.a.transfermarkt.technology/portrait/medium/796297-1687960680.jpg?lm=1"
                      alt="News Image"
                      className="max-w-[40px] h-auto object-cover border-[1px] border-gray-300"
                    />
                  </div>
                  <div className="w-full">
                    <p className="text-[#00aded] text-[13px] py-1 cursor-pointer">
                      Quarter-finals this weekend
                    </p>
                    <p className="text-[#333] hover:text-[#00aded] text-sm cursor-pointer font-semibold">
                      Four teams never won it - How long has it been since each
                      quarter-finalist last won the FA Cup?
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PopularNewsList;
