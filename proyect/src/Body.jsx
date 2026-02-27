import "./Body.css";
import fondo from "./assets/fondo.png";
import Beneficios from "./secciones/Beneficios";
import Mrbet from "./secciones/Mrbet"; 
import Sorteo from "./secciones/sorteo"
import CardsSection from "./secciones/CardsSection";
import Socios from "./secciones/Socios";
import Features from "./secciones/Features";

function Body(){
    return(
        <>
            <body className="body">
                
                <Beneficios/>

                <Mrbet/>

                <Features/>

                <Sorteo />

                <CardsSection />

                <Socios />

            </body>
        </>
    );
}
export default Body