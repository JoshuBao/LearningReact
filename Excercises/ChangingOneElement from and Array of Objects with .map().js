
//Dice is state, setDice is its function
//taking the prevDice and maping through it, for each die, if the id matches the given one, return the die properties and change isheld, otherwise return die
function holdDice(id){
    return(
      setDice(prevDice => prevDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      }))
    )
  }
