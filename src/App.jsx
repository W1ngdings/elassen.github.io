import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header /> {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}




<nav>
  <NavLink to="/" end>
    Home
  </NavLink>
  <NavLink to="/project">Project</NavLink>
  <NavLink to="/about">About</NavLink>
  <NavLink to="/contact">Contact</NavLink>
</nav>;
export default App;

