import Style from "./Menu.module.scss";
import { Outlet, NavLink } from "react-router-dom";

function Menu() {
  return (
    <header>
      <div className={Style.divHeader}>
        <nav className={Style.navBar}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? Style.estiloLinkAtivo : Style.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/cursos"
            className={({ isActive }) =>
              isActive ? Style.estiloLinkAtivo : Style.link
            }
          >
            Cursos
          </NavLink>
          <NavLink
            to="/eletronicos"
            className={({ isActive }) =>
              isActive ? Style.estiloLinkAtivo : Style.link
            }
          >
            Eletronicos
          </NavLink>
        </nav>
      </div>
      <Outlet />
    </header>
  );
}

export default Menu;
