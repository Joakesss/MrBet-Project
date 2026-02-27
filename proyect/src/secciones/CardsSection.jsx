import "./CardsSection.css";

import Cards from "../componentes/Cards";
import beneficiosImagen from "../assets/beneficiosImagen.png"
import registroImagen from "../assets/registroImagen.png"

function CardsSection(){
    return (

        <section className = "carta-seccion">

            {/*Carta izquierda*/}  
            <Cards

                imagen = {beneficiosImagen}
                titulo="¿Buscás beneficios?"
                descripcion="Si ya estás registrado, ingresá directamente."
                arrow="↘"
                textoBoton="Ingresar a beneficios"
                variable="primary"

            />

            {/*Carta derecha*/}

            <Cards

                imagen = {registroImagen}
                titulo = "¿Querés registrarte?"
                descripcion = "Elegí el casino y tu provincia."
                arrow=""
                textoBoton = "Registrarme ahora"
                variable = "secondary"

            />

        </section>
    );
}

export default CardsSection;