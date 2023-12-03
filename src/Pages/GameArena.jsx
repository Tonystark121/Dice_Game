import React, { useState } from "react";
import TotalScore from "./TotalScore";
import RollDice from "./RollDice";

const GameArena = () => {
  const [value, selectedValue] = useState();
  const [currDice, setCurrDice] = useState(1);
  const [score, setScore] = useState(25);
  const [isRolled, setIsRolled] = useState(false)
  const [showRules, setShowRules] = useState(false)

  const toggleRule = () => {
    setShowRules (prev => !prev)
  }

  const rollDice = () => {
    setIsRolled(true)
    if(!value) {
        return
    }else{
        updateScore()
    }
  };

  const updateScore = () => {
    if(score < 5) {
        resetScore()
        alert('you lose :) Try again')
        return
    }
     setCurrDice(prev => Math.floor(Math.random()*6) + 1)
     if(value === currDice) {
        setScore (prev => prev + 10)
     }else{
        setScore (prev => prev - 5)
     }

  }
  console.log(value, currDice)

  const resetScore = () => {
    setScore(25)
    setCurrDice(1)
    setIsRolled(false)
    selectedValue()
  }



  return (
    <main>
      <TotalScore
        value={value}
        selectedValue={selectedValue}
        score={score}
        rollDice={rollDice}
        isRolled={isRolled}
      />
      <RollDice resetScore={resetScore} value={value} currDice={currDice} rollDice={rollDice} toggleRule={toggleRule} showRules={showRules}/>
    </main>
  );
};

export default GameArena;
