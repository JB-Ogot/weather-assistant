import React, { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
}

export const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button
      className="text-sm text-gray-900 font-medium bg-gray-200 p-2 rounded-md"
      onClick={onClick}
    >
      {label}
    </button>
  );
};
