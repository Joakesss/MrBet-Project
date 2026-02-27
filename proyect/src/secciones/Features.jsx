import "./Features.css"
import megafono from "../assets/megafono.png"
import estrella from "../assets/estrella.png"
import cohete from "../assets/cohete.png"

function FeatureCard({icono, titulo, descripcion, link}){
    return(
        <div className = "feature-card">
            <img src={icono} alt = "" className = "feature-icono" />

            <div className = "texto-content">

                <h3 className = "feature-titulo">{titulo} </h3>
                <p className = "feature-descripcion">
                    {descripcion}
                </p>
            </div>

            <a href = "#" className = "feature-link" >
                <span className = "link-text" > {link} </span>
                <span className = "link-arrow" >→</span>
            </a>

        </div>
    )
}


function Features(){
    return(

        <section className = "features">

            <div className = "container">

                <h2 className = "features-titulo">
                    ¿Qué podés hacer<br />en Mr. Bet?
                </h2>

                <div className = "features-grid">
                    <FeatureCard
                        icono = {cohete}
                        titulo = "Mejores bonos"
                        descripcion = "Te llevamos al link de cada casino según tu provincia para que disfrutes de mejores bonos"
                        link = "Quiero mi bono"
                    />
                    <FeatureCard
                        icono = {estrella}
                        titulo = "Acceder a beneficios"
                        descripcion = "Desde descuentos en Burger King hasta un show gratuito de Luck Ra. Todo por registrarte desde acá."
                        link = "Descubrir beneficios"
                    />
                    <FeatureCard
                        icono={megafono}
                        titulo="Jugar informado"
                        descripcion="Trabajamos únicamente con plataformas legales y autorizadas"
                        link="Ver plataformas disponibles"
                    />
                </div>
            </div>
        </section>

    )
}

export default Features;