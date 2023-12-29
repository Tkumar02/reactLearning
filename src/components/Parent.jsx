import Child from "./Child"
import { useState } from "react"

export default function Parent () {
    const [parent,setParent]=useState(0)
    const [child, setChild] = useState(0)
    const changeParent = () => {
        setParent(parent + 1)
    }
    const changeChild = () => {
        setChild(child+1)
    }
    return(
        <div>
            This is a parent component
            <h1>Parent count is: {parent}</h1>
            <Child child={child}></Child>
            <button onClick={changeParent}>Increment parent count</button>
            <button onClick={changeChild}>Increment child count</button>
        </div>
    )
}