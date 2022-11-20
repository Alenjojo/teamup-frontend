import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
function LineChart({ chartData }) {
  const state = {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    datasets: [
      {
        label: "Last Week",
        backgroundColor: "rgb(176, 0, 185, 1)",
        borderColor: "rgba(176, 0, 185, 2)",
        borderWidth: 2,
        fill: false,
        data: [65, 59, 80, 81, 56, 70, 68],
      },
      {
        label: "Current Week",
        backgroundColor: "rgb(255, 184, 77, 1)",
        borderColor: "rgba(255, 184, 77, 2)",
        borderWidth: 2,
        fill: false,
        data: [23, 9, 75, 41, 10, 5, 15],
      },
    ],
  };
  return (
    <div className="">
      <h2 className="text-left">Tasks Analytics</h2>
      <Line
        data={state}
        height={400}
        width={800}
        options={{
          tension: 0.4,
          responsive: true,
          maintainAspectRatio: true,
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
          // elements: {
          //   point: {
          //     radius: 0,
          //   },
          // },
        }}
      />
    </div>
  );
}
export default LineChart;
