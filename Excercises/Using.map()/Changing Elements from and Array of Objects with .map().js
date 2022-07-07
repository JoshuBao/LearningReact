
//Dice is state, setDice is its function
//taking the prevDice and maping through it, for each die, if the id matches the given one, return the die properties and change isheld, otherwise return die
function holdDice(id){
    return(
      setDice(prevDice => prevDice.map(die => {
        return die.id === id ? {...die, isHeld: !die.isHeld} : die
      }))
    )
  }



//Using setDice to change the prevDice, then map through the prevDice, for each
//die in prevDice, if isHeld is true, return die, else return a new die
function rollDice()
  {
    setDice(prevDice => prevDice.map(die => {
        return(
          die.isHeld ?  
          die :
          {
            value:Math.ceil(Math.random() * 6),
            isHeld:false,
            id: nanoid()
          }
        )
    }))
  }
