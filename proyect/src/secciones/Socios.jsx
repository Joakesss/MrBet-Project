import "./Socios.css";

import chacarita from "../assets/chacarita.png"
import cat from "../assets/cat.png"
import huracan from "../assets/huracan.png"
import cab from "../assets/cab.png"
import argentinosJrs from "../assets/argentinosJrs.png"
import quinta from "../assets/5ta.png"
import pasion from "../assets/pasion.png"
import elipse from "../assets/elipse.png"

function Socios(){
    const socios = [
    { name: "Chacarita", logo: chacarita},
    { name: "Atlanta", logo: cat},
    { name: "Huracán", logo: huracan},
    { name: "Brown", logo: cab},
    { name: "Argentinos Juniors", logo: argentinosJrs},
    { name: "5ta a Fondo", logo: quinta},
    { name: "Pasión", logo: pasion},
    ]

    return (

        <section className = "socios-seccion">

            <div className= "socios-fondo"
                style={{ backgroundImage: `url(${elipse})` }}
            />

            <div className = "socios-container">
            
                <h2 className = "socios-titulo">
                    Nuestros Amigos
                </h2>

                <div className = "socios-grilla">

                    {socios.map((socio) => (
                        <div key = {socio.name} className = "socios-carta">
                            <img
                                src={socio.logo}
                                alt={socio.name}
                                className = "socio-logo"
                            />
                        
                        </div>

                    ))}

                </div>
            </div>
        </section>

    )
}

export default Socios