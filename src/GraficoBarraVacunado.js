import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Legend,
} from "recharts";

export default function GraficoBarraVacunado() {
  const { id } = useParams();

  useEffect(() => {
    const timeOut = setInterval(() => {
      getMsg();
    }, 3000);

    return () => {
      clearInterval(timeOut);
    };
  }, []);

  const getMsg = () => {
    axios.get("http://34.133.28.136:3200/dpaisvacu?pais=" + id).then((data) => {
      const newMessages = [];
      var conta1 = 0;
      var conta2 = 0;
      var conta3 = 0;
      var conta4 = 0;
      var conta5 = 0;
      var conta6 = 0;
      var conta7 = 0;
      var conta8 = 0;
      var conta9 = 0;
      var conta10 = 0;
      var conta11 = 0;

      data.data.forEach((Item) => {
        console.log(parseInt(Item.age) >= 0 && parseInt(Item.age) <= 9);
        if (parseInt(Item.age) >= 0 && parseInt(Item.age) <= 9) {
          conta1++;
        } else if (parseInt(Item.age) >= 10 && parseInt(Item.age) <= 19) {
          conta2++;
        } else if (parseInt(Item.age) >= 20 && parseInt(Item.age) <= 29) {
          conta3++;
        } else if (parseInt(Item.age) >= 30 && parseInt(Item.age) <= 39) {
          conta4++;
        } else if (parseInt(Item.age) >= 40 && parseInt(Item.age) <= 49) {
          conta5++;
        } else if (parseInt(Item.age) >= 50 && parseInt(Item.age) <= 59) {
          conta6++;
        } else if (parseInt(Item.age) >= 60 && parseInt(Item.age) <= 69) {
          conta7++;
        } else if (parseInt(Item.age) >= 70 && parseInt(Item.age) <= 79) {
          conta8++;
        } else if (parseInt(Item.age) >= 80 && parseInt(Item.age) <= 89) {
          conta9++;
        } else if (parseInt(Item.age) >= 90 && parseInt(Item.age) <= 99) {
          conta10++;
        } else if (parseInt(Item.age) >= 100 && parseInt(Item.age) <= 109) {
          conta11++;
        }
      });

      newMessages.push({
        name: "0-9",
        infectados: conta1,
      });
      newMessages.push({
        name: "10-19",
        infectados: conta2,
      });
      newMessages.push({
        name: "20-29",
        infectados: conta3,
      });
      newMessages.push({
        name: "30-39",
        infectados: conta4,
      });

      newMessages.push({
        name: "40-49",
        infectados: conta5,
      });

      newMessages.push({
        name: "50-59",
        infectados: conta6,
      });

      newMessages.push({
        name: "60-69",
        infectados: conta7,
      });
      newMessages.push({
        name: "70-79",
        infectados: conta8,
      });
      newMessages.push({
        name: "80-89",
        infectados: conta9,
      });
      newMessages.push({
        name: "90-99",
        infectados: conta10,
      });
      newMessages.push({
        name: "100-109",
        infectados: conta11,
      });

      setMsg(newMessages);
      console.table(newMessages);
    });
  };

  const [msg, setMsg] = useState([]);

  const data = JSON.stringify(msg);

  return (
    <div
      style={{
        backgroundSize: "100% auto",
        height: 600,
        width: "100%",
      }}
    >
      <h1></h1>
      <h2>Vacunados por edad</h2>

      {console.log("recibiendo1: " + data)}

      <BarChart width={600} height={400} data={msg}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />

        <Bar dataKey="infectados" fill="RGBA(102,199,255,0.5)" />
      </BarChart>
    </div>
  );
}
