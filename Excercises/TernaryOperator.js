The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), 
then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition
is falsy. This operator is frequently used as an alternative to an if...else statement.
Examples:

import React from "react"

export default function App() {
    /**
     * Challenge: move our ternary directly inside of the JSX
     * so the "Yes" and "No" are determined inside the <h1>
     * 
     * Hint: you will no longer need the `answer` variable
     */
    const isGoingOut = false
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}


function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}
