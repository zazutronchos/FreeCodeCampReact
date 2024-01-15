import React from "react";
import '../hojas-de-estilo/Boton.css';

function Boton({texto, esBotonDeclic, manejarClick}) {
    return (
        <button
            className={ esBotonDeclic ? "boton-clic" : "boton-reiniciar" }
            onClick={ manejarClick}>
            {texto}
        </button>
    );
}

export default Boton;