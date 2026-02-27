import "./Cards.css"
import iso from "../assets/isoMrBet.png"

function Cards({ imagen, titulo, descripcion, textoBoton, variable, arrow}) {
    return (

        <div className={`carta ${variable}`}>
                            
            <div className= "carta-fondo"
                style={{ backgroundImage: `url(${iso})` }}
            />
            
            <div className = "carta-contenido">
            
                <img 
                    src ={imagen}
                    alt ={titulo}
                    className = "carta-imagen"
                />
            
                <div className = "carta-texto">

                    <h2 className = "carta-titulo">
                        {titulo}
                    </h2>

                    <p className = "carta-descripcion">
                        {descripcion}
                    </p>

                    <button className = "carta-boton">
                        
                        <span className="texto">{textoBoton}</span>
                        <span className="arrow">{arrow}</span>
                    </button>

                </div>

            </div>

        </div>
    );
}
export default Cards;