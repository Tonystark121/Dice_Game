import React, { useState } from 'react'
import StartGame from './Pages/StartGame'
import GameArena from './Pages/GameArena'

function App() {
  const [isGameStarts, setIsGameStarts] = useState(false)

  const toggleBtn = () => {
    setIsGameStarts (prev => !prev)
  }

  return (
    <>
       {isGameStarts ? <GameArena toggleBtn={toggleBtn} /> : <StartGame toggleBtn={toggleBtn} />}
    </>
  )
}

export default App