
export const Task = (props) =>{
    return(
        <div key={props.id}  className="Task">
        <input className="custom-checkbox" type="checkbox" onClick={()=> props.toggleTask(props.id)} defaultChecked={props.status}/>
        <p style={props.status ? {textDecoration: 'line-through'} : {textDecoration: 'none'}}>{props.value}</p>
        <button onClick={() => props.deleteTask(props.id)}>✕</button>
        </div>
    )
}