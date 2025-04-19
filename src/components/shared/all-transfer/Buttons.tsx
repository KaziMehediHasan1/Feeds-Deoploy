import React from "react";
import CommonWrapper from "../CommonWrapper";

type TButton = {
  buttonOne?: string;
  buttonTwo?: string;
  buttonThree?: string;
  class?: string;
};
const Buttons = (props: TButton) => {
  return (
    <div className="pt-2">
      <CommonWrapper>
        <div className="flex item-center ">
          {props.buttonOne && (
            <button
              className={`px-4 text-sm py-2 text-[var(--color-primary)] bg-black cursor-pointer ${props.class}`}
            >
              {props.buttonOne}
            </button>
          )}
          {props.buttonTwo && (
            <button
              className={`px-4 text-sm py-2 text-[var(--color-primary)] bg-black border-l-1 border-gray-500 cursor-pointer ${props.class}`}
            >
              {props.buttonTwo}
            </button>
          )}
          {props.buttonThree && (
            <button
              className={`px-4 text-sm py-2 bg-black text-[var(--color-primary)] cursor-pointer ${props.class}`}
            >
              {props.buttonThree}
            </button>
          )}
        </div>
      </CommonWrapper>
    </div>
  );
};

export default Buttons;
