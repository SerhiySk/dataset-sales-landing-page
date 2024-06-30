import React from "react";
import ReactCountryFlag from "react-country-flag";
import countries from "world-countries";
interface CustomXAxisTickProps {
  x: number;
  y: number;
  payload: {
    value: string;
  };
}

const getCountryName = code => {
  const country = countries.find(c => c.cca2.toLowerCase() === code);
  return country ? country.name.common : "Others";
};
const CustomXAxisTick = ({ x, y, payload }: CustomXAxisTickProps) => {
  const countryCode = payload.value.toLowerCase(); // Assuming payload.value is the country code
  const countryName = getCountryName(countryCode); // Use your getCountryName function here

  return (
    <g transform={`translate(${x},${y})`}>
      <foreignObject x="-20" y="0" width="150" height="100">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            transform: "rotate(-35deg)",
            width: "150px",
          }}
        >
          <ReactCountryFlag
            countryCode={countryCode}
            svg
            style={{ marginRight: "5px", width: "13px", height: "13px" }}
          />
          <span style={{ fontSize: "10px" }}>{countryName}</span>
        </div>
      </foreignObject>
    </g>
  );
};

export default CustomXAxisTick;
