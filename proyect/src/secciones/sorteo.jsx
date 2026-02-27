import "./Sorteo.css";
import autoIcon from "../assets/auto.png"

function Sorteo(){
    return(
        <section className ="sorteo">
            
            <div className = "sorteo-container">

                

                {/* contenido de la derecha*/}

                <div className = "sorteo-contenido" >
                    {/* Imagen de la izquierda*/}
                    {
                        <div className = "sorteo-conteiner-auto">
                            <img src ={autoIcon} alt = "Peugeot 208 premio sorteo" className = "sorteo-auto" />
                        </div>
                    }
                    <span className = "sorteo-badge">
                        TODOS LOS MESES
                    </span>

                    <h2 className = "sorteo-titulo">
                        Sorteamos un 0km!
                    </h2>

                    <p className = "sorteo-descripcion">
                        Por registrarte en un casino legal a través de nuestros
                        links, participas instantaneamente por un Peugeot 208
                    </p>

                    <button className="sorteo-boton">
                        <span className="botonTexto">Quiero registrarme</span>
                        <span className="arrow">↘</span>
                    </button>
                </div>
                
            </div>
       
        </section>
    )
}

export default Sorteo;