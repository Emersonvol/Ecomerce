import { NavLink } from "react-router-dom";
import "./style.scss";
import Footer from "../../componentes/Footer/Footer"

function NoPage() {
  return (
    <>
    <section className="secao">
      <h2>pagina nao encontrada</h2>
      <NavLink to="/" className="secao-link">Volta para pagina inicial</NavLink>
      <img src="/src/assets/logo/logoPng.png" />
    </section>
    <Footer/>
    </>
  );
}

export default NoPage;
