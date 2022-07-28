import { useState } from "react";
import "./App.css";

function App() {
  //Ejecutar useState antes de que se renderice nuestro componente
  //useState devuelve un arreglo, la prmera es una variable y la segunda es una funcion que permite llenar la variable
  const [newTaskName, setNewTaskName] = useState();

  const handleSubmit = (e) =>{
    e.preventDefalt();
    localStorage.setItem('tasks', newTaskName)
    setNewTaskName('')
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a new task"
          value= {newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button>Save task</button>
      </form>
    </div>
  );
}

export default App;
