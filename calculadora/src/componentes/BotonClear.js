import React from 'react';
import '../hojas-de-estilo/BotonClear.css';

const BotonClear = (props) => (
    <div className='boton-clear' onClick={props.manejarClear}>
        {props.children} 

    </div>
);

export default BotonClear;

/*se podría poner Clear en lugar de  {props.children}, entonces en la App no se pondría etiqueta de cierre al BotonClear*/