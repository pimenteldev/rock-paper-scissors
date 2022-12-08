import React, { useEffect, useState } from 'react';
import './styles/app.css';
import Header from "./components/Header/"
import StepOne from "./components/StepOne"
import StepTwo from "./components/StepTwo"
import StepThree from "./components/StepThree"
import FinalStep from "./components/FinalStep"
import Rules from "./components/Rules/"

function App() {
  let storageScore = 0
  storageScore = JSON.parse(localStorage.getItem("score")) || 0
  const [score, setScore] = useState(storageScore)

  const [game, setGame] = useState({
    'start': false,
    'step': '',
    'house': '',
    'picked': '',
    'pick': null,
    'winner': null
    
  })

  const [step, setStep] = useState('')

  useEffect(()=>{
    (!game.start)
      ? setStep('StepOne')
      : (game.start && game.step==='StepTwo')
        ? setStep('StepTwo')
        : (game.start && game.winner !==null)
          ? setStep('StepThree')
          : setStep('FinalStep')
       
  }, [game])

  const winGame = () => {
    setScore(score+1)
    localStorage.setItem("score", score+1)
  }

  const loseGame = () => {
    score <= 0 
      ? setScore(0)
      : setScore(score-1)
      localStorage.setItem("score", score-1)
  }

  const tryAgain = () => {
    setGame({
      'start': false,
      'step': '',
      'house': '',
      'picked': '',
      'pick': null,
      'winner': null
    })
  }

  return (
    <main>
      <Header score={score} />
    
      {
        step === 'StepOne' 
          ? <StepOne setGame={setGame} />
          : step === 'StepTwo'
            ? <StepTwo setGame={setGame} game={game} winGame={winGame} loseGame={loseGame}/>
            : <FinalStep  game={game} setGame={setGame}/>
      }
      {
        game.winner !== null
          ? <StepThree setGame={setGame} game={game} tryAgain={tryAgain}/>
          : <></>
      }
      <Rules />
    </main>
  );
}

export default App