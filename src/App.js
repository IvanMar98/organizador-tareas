import "./App.css";
import Tareas from "./components/Tareas";
import TareaFormulario from "./components/TareaFormulario";
import { useState } from "react";

function App() {

  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    };
  };

  const completarTarea = id =>{
    const tareasCompletadas = tareas.map(tarea =>{
      if(tarea.id === id){
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasCompletadas);
  };

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter( tarea => tarea.id !==id); 
    setTareas(tareasActualizadas);
  }

  return (
    <div className="App">
      <div className="contenedor-title">
        <h1 className="title">Organizador de Tareas</h1>
      </div>
      <div className="contenedor-lista-tareas">
        <h1 className="tareas-title">Mis tareas</h1>
        <TareaFormulario onSubmit = {agregarTarea} />
        <div className="contenedor-lista-tareas">
          {
            tareas.map((tarea) => 
            <Tareas 
              key = {tarea.id}
              id = {tarea.id}
              texto = {tarea.texto}
              completada = {tarea.completada} 
              completarTarea = {completarTarea}
              eliminarTarea = {eliminarTarea}
              />)
          }
        </div>
      </div>
    </div>
  );
}

export default App;

