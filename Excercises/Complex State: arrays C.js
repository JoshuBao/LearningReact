import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
     const [thingsArray, setThingsArray] = React.useState(["Thing1", "Thing2"])
    function addItem() {
        // Build from scratch :)
        setThingsArray(prevThingsArray => [...prevThingsArray,`Things${prevThingsArray.length + 1}`])
       
    }
    
   const elements = thingsArray.map(thisElement => <p key={thisElement}>{thisElement}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {elements}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
