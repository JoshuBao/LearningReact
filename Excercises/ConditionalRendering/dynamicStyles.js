import React from "react"
import boxes from "./boxes"

export default function App(props) {
    const [squares, setSquares] = React.useState(boxes)
    
    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    }
    
    const squareElements = squares.map(square => (
        <div style={styles} className="box" key={square.id}></div>
    ))
    return (
        <main>
            {squareElements}
        </main>
    )
}


export default [
    {
        id: 1,
        on: true
    },   
    {
        id: 2,
        on: false
    },   
    {
        id: 3,
        on: true
    },   
    {
        id: 4,
        on: true
    },   
    {
        id: 5,
        on: false
    },   
    {
        id: 6,
        on: false
    },   
]
//css
* {
    box-sizing: border-box;
}

.box {
    height: 100px;
    width: 100px;
    border: 1px solid black;
    display: inline-block;
    margin-right: 4px;
    border-radius: 5px;
}
