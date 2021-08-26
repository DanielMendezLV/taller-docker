import { Link } from "react-router-dom";
const BlogList = ({ vacunados, title }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {vacunados.map((vacunado) => (
        <div className="blog-preview" key={vacunado.id}>
          <Link to={`/blogs/${vacunado.id}`}>
            <h2>{vacunado.name}</h2>
            <p> Pais: {vacunado.location}</p>
            <p> Genero: {vacunado.gender}</p>
            <p> Edad: {vacunado.age}</p>
            <p> Tipo de vacuna: {vacunado.vaccine_type}</p>
            <p> Camino: {vacunado.way}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
