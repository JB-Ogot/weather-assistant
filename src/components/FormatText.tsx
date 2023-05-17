import { FC } from "react";

interface FormatTextProps {
  label: string;
  className: string;
}

export const FormatText: FC<FormatTextProps> = ({ label, className }) => {
  return <span className={className}>{label}</span>;
};
