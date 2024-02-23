
export const Input = (props) => {
    return(
        <div className="Input">
        <input value={props.todo} 
        onChange={(e)=> props.setTodo(e.target.value)}/>
        <button onClick={() => props.addTask()}>Добавить</button>
        </div>
    )
}