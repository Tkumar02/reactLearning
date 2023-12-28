function FunctionEvent () {
    function handleClick(){
        console.log('Button CliCKEd')
    }
    return (
        <div>
            Functional Component 
            <div>
            <button onClick={handleClick}>
                Click here!
            </button>
            </div>
        </div>
    )
}

export default FunctionEvent;