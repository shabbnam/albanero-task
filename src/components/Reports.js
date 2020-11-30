import React, { useState, useEffect } from "react";
import { FetchDailyData } from "../Api/index";
import { Line } from "react-chartjs-2";


const Reports = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const FetchAPI = async () => {
      setDailyData(await FetchDailyData());
    };
    FetchAPI();
  }, []);

  const LineChart1 = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "infected",
            borderColor: "#333fff",
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

 
  return (
    <>
      <div>{LineChart1}</div>
    </>
  );
};
export default Reports;
