import React from "react";
import '../css/Tareaformulario.css';
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props){

    const [input, setInput] = useState([]);

    const manejarEnvio = e =>{
        e.preventDefault();

        const tareaNueva ={
            id: uuidv4(),
            texto: input,
            completada: false
        };
        props.onSubmit(tareaNueva);
    };

    const manejarCambio = e =>{
        setInput(e.target.value);
    };

    return(
        <form 
        onSubmit={manejarEnvio}
        className='tarea-formulario'>
            <input 
                className="tarea-input"
                placeholder="Agregar una nueva Tarea"
                type='text'
                name="texto"
                onChange={manejarCambio}
            />
            <button className="tarea-boton">
                agregar tarea
            </button>
        </form>
    );
};

export default TareaFormulario;