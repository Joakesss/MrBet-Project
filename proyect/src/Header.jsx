import "./Header.css";
import logo from "./assets/logoCompleto.svg"
import { useEffect, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll && window.scrollY > 100) {
        setHidden(true); // baja → ocultar
      } else {
        setHidden(false); // sube → mostrar
      }
      setLastScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

    return(
    <header className={`header ${hidden ? "header--hidden" : ""}`}>
      <div className="header-container">

        
        <a href="home" className = "logo">
          <img src={logo} alt="Logo completo" className="logo-completo" />
        </a>

        
        <nav className="nav">
          <a href="#registrarse">Registrarse</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#como-funciona">Como Funciona</a>
        </nav>

      </div>
    </header>
    );
}