import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    /**
     * Challenge:
     * - Only display the punchline paragraph if `isShown` is true
     */
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>Show Punchline</button>
            <hr />
        </div>
    )
}
//Excercise 2
import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return (
        <div>
            {
                messages.length > 0 && 
                <h1>You have {messages.length} unread messages!</h1>
            }
        </div>
    )
}
