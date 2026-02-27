import "./Footer.css";
import logoCompleto from "./assets/logoCompleto.svg"
import maskBet from "./assets/maskMrbet.png"
/*import loteria from "./assets/loteria.png"*/
import dieciocho from "./assets/+18.png"

const footerLinks = [
    {
        title: "Registrarse",
        links: [
            { label: "Sportsbet", href: "#sportsbet"},
            { label: "Bettson", href:"bettson"},
            { label: "Bplay", href: "#bplay"},
        ],
    },
    {
        title: "Beneficios",
        links: [
            { label: "Ver Beneficios", href: "#beneficios"},
            { label: "Marcas adheridas", href: "marcas"},
            { label: "Sorteos y experiencias", href:"#sorteos"},
        ],
    },
    {
        title: "Ayuda",
        links: [
            { label: "Juego responsable", href: "#responsable" },
            { label: "Autoexclusión", href: "#autoexclusion" },
            { label: "Preguntas frecuentes", href: "#faq" },
            { label: "Contacto", href: "#contacto" },
        ],
    },
    {
        title: "Legal",
        links: [
        { label: "Términos y condiciones", href: "#terminos" },
        { label: "Política de privacidad", href: "#privacidad" },
        { label: "Cookies", href: "#cookies" },
        ],
  },
];

function Footer(){
    return(
        <footer className = "footer">
            <div className = "footer-top">
                <div className="logo-container">
                    <div className ="logo">
                        <img src = {logoCompleto} alt = "Mr Bet" className = "logo-completo" />                        
                    </div>
                    <p className = "disclaimer"> 
                        Mr. Bet no es un casino online <br />
                        +18. Jugá responsablemente
                        </p>
                    <a href = "#plataformas"className = "provincia-link">
                        Ver plataformas habilitadas por <br />
                        provincia
                    </a>
                </div>

                <div className = "empezarCard">
                    <h3>Empezar</h3>
                    <p>Elegí tu provincia para ver opciones disponibles</p>
                    <span className ="arrow">→</span>
                </div>

                <nav className = "footer-nav">
                    {footerLinks.map((section)=>(
                        <div key={section.title} className="footer-column">
                            <h4>{section.title}</h4>
                            {section.links.map((link)=>(
                                <a key={link.label} href={link.href}>
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    ))}
                </nav>
                <img src = {maskBet} alt = "Mask bet" className = "mask-bet" />      
            </div>
              
            <div className="footer-bottom">
                <p>
                    Mr. Bet Copyright {new Date().getFullYear()}&copy; Todos los derechos reservados
                </p>
                <p>Jugar compulsivamente es perjudicial para la salud <img className="dieciocho-logo" src={dieciocho} alt="Logo 18" /></p>                    
            </div>                                
                
                        
        </footer>
    );
}

export default Footer;