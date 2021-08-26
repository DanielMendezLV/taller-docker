import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PieInfected from "./PieInfected";

const GraficaPieInfected = () => {
  const { id } = useParams();

  useEffect(() => {
    const timeOut = setInterval(() => {
      getMsg();
    }, 3000);

    getMsg();

    return () => {
      clearInterval(timeOut);
    };
  }, []);

  const getMsg = async () => {
    try {
      const { data } = await axios.get(
        "http://34.133.28.136:3200/gpaismongo?pais=" + id
      );
      setPoints(data.map((Dato) => ({ label: Dato._id, y: Dato.porcentaje })));
    } catch (err) {
      console.log(err);
    }
  };

  const [points, setPoints] = useState([]);

  return (
    <div>
      <PieInfected datos={points} />
    </div>
  );
};

export default GraficaPieInfected;
