import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function PorcentajePais() {
  const history = useHistory();
  const [paises, setPais] = useState([]);
  const [country, setCountry] = useState("");

  const getPais = async () => {
    try {
      const { data } = await axios.get("http://34.133.28.136:3200/paises");
      setPais(data.map((registro) => ({ name: registro._id })));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const timeOut = setInterval(() => {
      getPais();
    }, 5000);
    getPais();
    return () => clearInterval(timeOut);
  }, []);

  const enviarData = () => {
    history.push(`/about/${country}`);
  };

  return (
    <div>
      <h2>
        Información por pais :
        <select onChange={(e) => setCountry(e.target.value)}>
          <option value="0" key="0">
            Seleccione un pais
          </option>
          ;
          {paises.map((pais) => {
            return (
              <option value={pais.name} key={pais.name}>
                {pais.name}
              </option>
            );
          })}
        </select>
        <button onClick={enviarData}> Buscar </button>
      </h2>
    </div>
  );
}
