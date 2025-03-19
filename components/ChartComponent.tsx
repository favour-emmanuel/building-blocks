"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { ApexOptions } from "apexcharts";

// Lazy-load ApexCharts to avoid SSR issues
const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });

type ChartType =
  | "line"
  | "area"
  | "bar"
  | "pie"
  | "donut"
  | "radialBar"
  | "scatter"
  | "bubble"
  | "heatmap"
  | "candlestick"
  | "boxPlot"
  | "radar"
  | "polarArea"
  | "rangeBar"
  | "rangeArea"
  | "treemap";

interface ChartComponentProps {
  title: string;
  height?: number | string;
  type?: ChartType;
  shadow?: boolean;
  showDataLabel?: boolean;
  series: any[];
  xAxis: any;
  yAxis?: any;
  colors?: string[];
}

const ChartComponent: React.FC<ChartComponentProps> = ({
  title,
  height = 350,
  type = "line",
  shadow = false,
  showDataLabel = false,
  series,
  xAxis,
  yAxis,
  colors,
}) => {
  const [chartOptions, setChartOptions] = useState<ApexOptions>({
    chart: {
      id: "apexchart-example",
      dropShadow: {
        enabled: shadow,
        color: "#000",
        top: 18,
        left: 7,
        blur: 10,
        opacity: 0.2,
      },
      toolbar: { show: false },
    },
    colors: colors,
    dataLabels: { enabled: showDataLabel },
    title: { text: title, align: "left" },
    grid: {
      borderColor: "#e7e7e7",
      row: { colors: ["#f3f3f3", "transparent"], opacity: 0.5 },
    },
    markers: { size: 4 },
    stroke: { width: 3 },
    xaxis: xAxis,
    yaxis: yAxis,
  });

  useEffect(() => {
    setChartOptions((prevOptions) => ({
      ...prevOptions,
      chart: {
        ...prevOptions.chart,
        dropShadow: {
          enabled: shadow,
          color: "#000",
          top: 18,
          left: 7,
          blur: 10,
          opacity: 0.2,
        },
      },
      colors: colors,
      dataLabels: { enabled: showDataLabel },
      title: { text: title, align: "left" },
      xaxis: xAxis,
      yaxis: yAxis,
    }));
  }, [title, shadow, showDataLabel, xAxis, yAxis, colors]);

  return (
    <ApexCharts
      options={chartOptions}
      series={series}
      type={type}
      height={height}
    />
  );
};

export default ChartComponent;
