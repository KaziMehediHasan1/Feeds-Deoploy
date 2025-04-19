import React from "react";

type Props = {
  children: React.ReactNode; // Define children prop to accept any type of content
};

const CommonWrapper = ({ children }: Props) => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      {children} {/* The children will be rendered inside the wrapper */}
    </div>
  );
};

export default CommonWrapper;
