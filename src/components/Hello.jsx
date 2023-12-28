// function Hello(){
//     return <h1>Hello World!</h1>
// }
const name = 'Ashutosh'

const displayMessage = () => {
    return 'I need help'
}

const addThings = (x,y) => {
    return x+y
}


const Hello = () => <div>
                        <h1>Hello there {displayMessage()}!</h1> 
                        <h2> Total of 3 and 4 is {addThings(3,4)}</h2>
                    </div>

export default Hello;