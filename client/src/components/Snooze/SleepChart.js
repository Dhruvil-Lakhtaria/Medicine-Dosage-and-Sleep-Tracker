import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
const SleepChart = ({ sleepData }) => {
  return (
    <div className="chartSection">
      {sleepData.length === 0 ? (
        "NO DATA ENTERED"
      ) : (
        <div className="line-chart">
            <LineChart height={500} width={800} data={sleepData.slice(-5)}>
              <Line type="monotone" dataKey="time" stroke="#8844d8" />
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="dataKey" />
              <YAxis />
              <Tooltip />
            </LineChart>
        </div>
      )}
    </div>
  );
};

export default SleepChart;
