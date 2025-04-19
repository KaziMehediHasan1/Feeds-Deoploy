import React from "react";
import Heading from "../shared/Heading";
import NewsList from "./NewsList";
import PopularNewsList from "./PopularNewsList";

type Props = {};

const NewsSection = (props: Props) => {
  return (
    <div className="shadow-lg p-2 my-3">
      <Heading heading="Latest News" />
      <div className="flex flex-col md:flex-row gap-3">
        <div className="w-full md:w-[65%]">
          <NewsList />
        </div>
        <div className="w-full md:w-[35%]">
          <PopularNewsList />
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
