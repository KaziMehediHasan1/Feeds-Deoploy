import React from "react";

type Props = {};

const NewsList = (props: Props) => {
  return (
    <a href="/authlet-club/id">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {Array(12)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="bg-white p-1 border-[1px] border-gray-300"
            >
              <div className="flex flex-col md:flex-row gap-2">
                <div>
                  <img
                    src="https://tmssl.akamaized.net//images/logo/normal/fac.png?lm=1666031556"
                    alt="News Image"
                    className="max-w-[68px] h-auto object-cover border-[1px] border-gray-300"
                  />
                </div>
                <div className="w-full">
                  <p className="bg-gray-300 text-sm w-full pl-1">
                    {" "}
                    28.03.2025 - 16:12
                  </p>
                  <p className="text-[#00aded] text-sm py-1 cursor-pointer">
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
    </a>
  );
};

export default NewsList;
