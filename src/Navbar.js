import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>App de vacunación</h1>
      <div className="links">
        {/*Link prevent request to the server */}
        <Link to="/">Inicio</Link>
        <Link
          to="/ram"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          RAM
        </Link>
        <Link
          to="/proceso"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          Procesos
        </Link>
        <Link to="/ppais">Graficas por pais</Link>
      </div>
    </nav>
  );
};

export default Navbar;
