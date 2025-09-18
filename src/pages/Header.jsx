import { NavLink } from "react-router-dom";
import style from "../components/Header.module.css";

export default function Header({ darkMode, setDarkMode }) {
  return (
    <header className={style.header}>
      <NavLink to="/" end>
        <img src="/images/glorp.webp" alt="" className={style.icon} />
      </NavLink>
      <nav className={style.nav}>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <button className={style.toggle} onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "🌙" : "🌅"}
        </button>
      </nav>
    </header>
  );
}
