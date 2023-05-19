import React from "react";

export const Loader = () => {
  return (
    <div className="flex animate-pulse flex-row items-center mt-1">
      <div className="flex flex-col space-y-2">
        <div className="bg-gray-300 rounded-md w-24 h-4"></div>
      </div>
    </div>
  );
};
