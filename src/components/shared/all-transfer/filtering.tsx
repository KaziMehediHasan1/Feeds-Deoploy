"use client";
import CommonWrapper from "@/components/shared/CommonWrapper";
import React from "react";
type FilterItem = {
  labelFor?: string;
  label: string[];
  option: string[];
  DefaultValue: string;
  selectionName?: string;
  selectionID?: string;
};

type optionProps = {
  Data: FilterItem[];
};
const Filtering = (props: optionProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    for (let [key, value] of formData.entries()) {
      console.log(` ${value}`);
    }
  };

  return (
    <div className="py-4 bg-white">
      <CommonWrapper>
        <form onSubmit={handleSubmit} className="w-full space-y-2 p-3">
          {props?.Data?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex item-center justify-between w-full text-xs"
              >
                <div>
                  {item?.label?.map((labels, index) => {
                    return (
                      <label key={index} htmlFor={labels}>
                        {labels}:
                      </label>
                    );
                  })}
                </div>

                <select
                  className="border border-gray-300 w-[75%] h-7 text-xs"
                  name={item?.selectionName}
                  id={item?.selectionID}
                >
                  {item?.option ? (
                    item?.option?.map((options, index) => {
                      return (
                        <option key={index} value={options}>
                          {options}
                        </option>
                      );
                    })
                  ) : (
                    <option value="">{item.DefaultValue}</option>
                  )}
                </select>
              </div>
            );
          })}
          <button type="submit" className="bg-blue-500 text-white px-3 py-1 text-xs cursor-pointer">
            Show
          </button>
        </form>
      </CommonWrapper>
    </div>
  );
};

export default Filtering;
