import "./Beneficios.css"
import { ArrowRight } from "lucide-react";

function Beneficios(){
    return(
        <section className="beneficios">
                <div className="beneficios-overlay">
                    <h1 className="beneficios-header">
                        <span className="line">Si vas a jugar, </span>
                        <span className="line">
                            hacelo con <span className="accent">beneficios.</span>
                        </span>
                    </h1>
                    <p className="parrafoBeneficios">El club de beneficios para usuarios de casinos legales</p>
                    <div className="beneficios-cta">
                        <a href="https://mrbetarg.com">
                        <button className="botonBeneficios">
                            <span>Quiero registrarme</span>
                            <span className="arrow">↘</span>
                        </button>
                        </a>
                    </div>
                    <p className="beneficios-legal">+18 · JUGÁ RESPONSABLEMENTE</p>
                </div>
        </section>
    )
}

export default Beneficios;