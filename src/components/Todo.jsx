import { useState } from "react"
import ListItem from "./ListItem";

export default function Todo() {
    const [todo,setTodo] = useState("");
    const [todoList, setTodoList] = useState([])
    const handleChange = (event) => {
        setTodo(event.target.value)
        console.log(todo)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let tempList = todoList;
        tempList.push(todo);
        setTodoList(tempList)
        console.log(todoList)
        setTodo("")
    }

    return (<div>Todo
        <form onSubmit={handleSubmit}>
            <input 
            value={todo}
            onChange={handleChange}
            ></input>
            <button type="submit">Add</button>
        </form>
        {/* <div>
            {todoList.map((item,index)=><h3 key={index}>{item}</h3>)}
        </div> */}
        {todoList.map((item,index)=>(
            <ListItem key={index} name={item}></ListItem>
        ))}
    </div>)
}