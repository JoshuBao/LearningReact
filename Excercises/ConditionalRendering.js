import React from "react"

let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
//my answer
  {badgeText && <div className="card--badge">{badgeText}</div>}
//if badText has a value, then display the cardBadge div with the correct badgeText

//original
  {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
//if open spots is 0 , then display this badge with the text SOLD OUT
  (three equal signs means strict equality testing for Type and Value)
