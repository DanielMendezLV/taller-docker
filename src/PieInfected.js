import React from "react";
import CanvasJSReact from "./canvasjs.react";
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const PieInfected = ({ datos }) => {
  const options = {
    exportEnabled: true,
    animationEnabled: true,
    title: {
      text: "% de vacunados por genero",
    },
    data: [
      {
        type: "pie",
        startAngle: 75,
        toolTipContent: "<b>{label}</b>: {y}%",
        showInLegend: "true",
        legendText: "{label}",
        indexLabelFontSize: 16,
        indexLabel: "{label} - {y}%",
        dataPoints: datos,
      },
    ],
  };

  return <CanvasJSChart options={options} />;
};

export default PieInfected;
