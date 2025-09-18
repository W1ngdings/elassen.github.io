import { NavLink } from "react-router-dom";
import style from '../components/Header.module.css';

export default function Header() {
  return (
    
    <header className={style.header}>
      <img src="/images/glorp.webp" alt="" className={style.icon} />
      <nav className={style.nav}>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}


