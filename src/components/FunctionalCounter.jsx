import { useState } from "react";

function FunctionalCounter () {
    const [counter,setCounter] = useState(0);
    const increment = () =>{
        setCounter(counter+1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    return <div>
        <div>
        <div>
            <button onClick={increment}>+</button>
        </div>
            Counter Value: {counter}
            <div>
                <button onClick={decrement}>-</button>
            </div>
        </div>
    </div>
}

export default FunctionalCounter;