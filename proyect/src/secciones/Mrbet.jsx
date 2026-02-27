import "./Mrbet.css"
import quienSomos from "../assets/quienesSomos.png"
import background from "../assets/fondoMrBet.png"
function Mrbet(){
    return(
        <section className="quienesomos">
                <div className="quienesomos-overlay">
                    <div className="quienesomos-text">
                    <h2>¿Qué es Mr.Bet?</h2>
                    <p className="segundoTitulo"><b>Mr.Bet no es un casino.</b></p>
                    <p className="parrafo">Es una plataforma que conecta a los usuarios de casinos legales con beneficios exclusivos.<br></br><br />
                        Desde acá podés registrarte según tu provincia y acceder a descuentos, promociones y experiencias pensadas para nuestra comunidad.
                    </p>
                    <ul className="lista">
                        <li>Mejores bonos</li>
                        <li>Descuentos en marcas</li>
                        <li>Experiencias exclusivas</li>
                    </ul>
                    </div>
                    <div className="imagen">
                        <img src={quienSomos} alt="Imagen de quienes somos" />
                    </div>
                    <div className="background">
                        <img src={background} alt="background" />
                    </div>
                </div>
        </section>
    )
}

export default Mrbet;