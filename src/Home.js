//make a value reacive and provides a way to change that value
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: vacunados,
    isPending,
    error,
  } = useFetch("http://34.133.28.136:3200/dmongo");
  return (
    <div className="home">
      {error && <div> {error}</div>}
      {isPending && <div> Loading ...</div>}
      {vacunados && (
        <BlogList vacunados={vacunados} title="Todos los vacunados"></BlogList>
      )}
    </div>
  );
};

export default Home;
