import Header from "./components/Header";
import { Input } from "./components/Input";
import { useState } from "react";
import { Task } from "./components/Task";
function App() {
  const [todo, setTodo] = useState('')
  const [tasks, setTasks] = useState([])
  const [done, setDone] = useState('')


  let copiTask = tasks

  const addTask = () => {
      const taskTodo ={
        id: Math.random(),
        value: todo,
        status: false,
      }
      let newTask = [taskTodo, ...tasks]
      setTasks(newTask)
      setTodo("")
  }
  const deleteTask = (id) => {
      let del = tasks.filter(e => e.id !== id)
      setTasks(del) 
  }
  const toggleTask = (id) => {
    let toggle = tasks.map(e => e.id === id ? {...e,  status : !e.status } : {...e})
    setTasks(toggle)
  }

  switch(done){
    case "All":
      copiTask = tasks
      break;
    case "Activ":
      copiTask = tasks.filter(e=> e.status === false)
      break;
    case "Completes":
      copiTask = tasks.filter(e=> e.status === true)
      break;
      default:
        break;
  }

  const taskTodoList = copiTask.map(e => <Task id = {e.id} value={e.value} status={e.status}
                                        deleteTask = {deleteTask}
                                        toggleTask= {toggleTask}/> )
  return (
    <div className="App">
      <Header/>
      <Input addTask={addTask} todo = {todo} setTodo = {setTodo}/>
      <div className="button">
        <button onClick={()=> setDone("All")}>Все</button>
        <button onClick={()=> setDone("Activ")}>Активные</button>
        <button onClick={()=> setDone("Completes")}>Выполненые</button>
      </div>
      
      {taskTodoList}
    </div>
  );
}

export default App;
