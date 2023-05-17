import { ReactNode, FC } from "react";
import { Dashboard } from "../../pages";

interface Props {
  children?: ReactNode;
}

export const MainView: FC<Props> = ({ children }) => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};
