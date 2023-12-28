const header = {
    color: "blue",
    fontSize: "40px",
    backgroundColor: "red",
    textAlign: "left",
}

export default function InLineComponent () {
    return (
        <div>
            <h1 style={header}>This is an inline component</h1>
        </div>
    )
}