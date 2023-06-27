import React, { useEffect, useRef, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  const [options, setoptions] = useState({});
  useEffect(() => {
    setoptions({
      aspectRatio: 1.4,
      plugins: {
        legend: {
          display: false,
          onHover: () => {},
        },
        layout: {
          padding: {
            top: 100,
            bottom: 20,
            left: 20,
            right: 20,
          },
          radius: "50%",
        },
        hover: {
          mode: null, // Disable hover mode
        },
        hoverBackgroundColor: "red",
        hoverOffset: 0,
      },
    });
  }, []);
  return (
    <Doughnut
      data={data}
      options={options}
      style={{
        width: "100px !important",
        height: "100px !important",
      }}
    />
  );
};

export default PieChart;
