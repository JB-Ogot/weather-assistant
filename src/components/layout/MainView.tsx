import { ReactNode, FC } from "react";
import { Dashboard } from "../Dashboard";

interface Props {
  children?: ReactNode;
}

export const MainView: FC<Props> = ({ children }) => {
  return (
    <div className="flex-1 w-64 pl-10">
      <Dashboard />
    </div>
  );
};
