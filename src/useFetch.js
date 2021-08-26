import { useState, useEffect } from "react";
//Custom Hook needs to start with the letter use
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  //This function runs every render
  //Be carefully this could be a infinite loop if whe change useState
  useEffect(() => {
    //fecth data, authentication service
    const abortCont = new AbortController();
    fetch(url, { signal: abortCont.signal })
      .then((res) => {
        if (!res.ok) {
          // esto se pone por ejemplo si usamos una url no valida : http://localhost:8000/blogss (ej: 404)
          throw Error("could not fetch the data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setError(err.message);
          setIsPending(false);
        }
      });
    //We return a value, when the component that use this useEffect
    //Or this useFetch hook is deleted call this function
    return () => abortCont.abort();
  }, [url]);

  //Ponemos url porque cada vez que cambie la url tiene que traer la nueva data

  return { data, isPending, error };
};

export default useFetch;
