import { useState } from "react";
import Counter from './Counter'


export default function ConditionalComponent () {
    const [display,setDisplay] = useState(false);
    let count = 0;
    if(count>0){
        setDisplay(true)
    }

    return display ? (<div>
        <h3>Nothing to see here</h3>
        <h3>This is a condtional component</h3>
    </div>)
    :
    (<div>
        <h3>Nothing to see here</h3>
        <Counter/>
    </div>)

//     let output;
//     if(display){
//         output = <h3>This is a conditional component</h3>
//     } else {
//         output = 
//         <div>
//             <h3>Nothing to see here</h3>
//             <Counter/>
//          </div>
//     }
//     return output
//     OR -> return <div>{output}</div>
}