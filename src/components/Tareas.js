import React from "react";
import '../css/Tareas.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tareas({id, texto, completada, completarTarea, eliminarTarea }) {

    return(
        <div className = { completada ? 'contenedor-tareas completada': 'contenedor-tareas'}>
            <div 
            onClick={() => completarTarea(id)}
            className="tarea-texto">
                {texto}
            </div>
            <div 
            onClick={() => eliminarTarea(id)}
            className="contenedor-iconos">
                <AiOutlineCloseCircle className="icono-eliminar" />
            </div>
        </div>
    );
};

export default Tareas;