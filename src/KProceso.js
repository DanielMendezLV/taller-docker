//make a value reacive and provides a way to change that value
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const KProceso = () => {
  const {
    data: vacunados,
    isPending,
    error,
  } = useFetch("http://34.133.28.136:3200/kproc");
  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div> Loading ...</div>}
      {vacunados && (
        <textarea id="w3review" name="w3review" rows="50" cols="100">
          {vacunados}
        </textarea>
      )}
    </div>
  );
};

export default KProceso;
