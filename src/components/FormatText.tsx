import { FC } from "react";
import { WiCelsius } from "react-icons/wi";
import { Loader } from "./Loader";

interface FormatTextProps {
  label?: string;
  className: string;
  loading?: boolean;
}

export const FormatTemp: FC<{
  loading: boolean;
  temperature: string;
}> = ({ loading, temperature }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-row">
          <FormatText label={temperature} className="jwa-bold-text" />
          <WiCelsius size="30" />
        </div>
      )}
    </>
  );
};

export const FormatText: FC<FormatTextProps> = ({
  label,
  className,
  loading,
}) => {
  return (
    <>{loading ? <Loader /> : <span className={className}>{label}</span>}</>
  );
};
