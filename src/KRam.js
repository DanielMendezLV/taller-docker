import useFetch from "./useFetch";

const KRam = () => {
  const {
    data: ram,
    isPending,
    error,
  } = useFetch("http://34.133.28.136:3200/kram");
  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div> Loading ...</div>}
      {<h2>Estado de la RAM:</h2>}
      {<br></br>}
      {ram && <p>En total: {ram.total} MB</p>}
      {ram && <p>En uso: {ram.enuso} MB</p>}
      {ram && <p>Libre: {ram.libre} MB</p>}
    </div>
  );
};

export default KRam;
