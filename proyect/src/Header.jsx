import "./Header.css";
import logo from "./assets/logoCompleto.svg";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const scroller = document.scrollingElement;

    const handleScroll = () => {
      const currentScroll = scroller.scrollTop;

      if (currentScroll > lastScroll.current && currentScroll > 100) {
        setHidden(true);  // bajando
      } else {
        setHidden(false); // subiendo
      }

      lastScroll.current = currentScroll;
    };

    scroller.addEventListener("scroll", handleScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${hidden ? "header--hidden" : ""}`}>
      <div className="header-container">
        <a href="#home" className="logo">
          <img src={logo} alt="Logo completo" className="logo-completo" />
        </a>

        <nav className="nav">
          <a href="https://mrbetarg.com">Registrarse</a>
          <a href="#beneficios">Beneficios</a>
          <a href="#como-funciona">Como Funciona</a>
        </nav>
      </div>
    </header>
  );
}