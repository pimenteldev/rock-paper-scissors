import React from 'react';
import './index.css';

function index(props) {
  
  const handleButton = (e) => {
    if(e.target.className === 'btn_paper') {
      props.setGame({
        'start': true,
        'step': 'StepTwo',
        'house': '',
        'picked': 'paper',
        'pick': 1,
        'winner': null
      })
    }
    if(e.target.className === 'btn_scissors') { 
      props.setGame({
        'start': true,
        'step': 'StepTwo',
        'house': '',
        'picked': 'scissors',
        'pick': 2,
        'winner': null
      })
    }
    if(e.target.className === 'btn_rock') {
      props.setGame({
        'start': true,
        'step': 'StepTwo',
        'house': '',
        'picked': 'rock',
        'pick': 3,
        'winner': null
      })
    }
  }

  return (
    <section className='content'>
        <button className='btn_paper' onClick={handleButton}><img src='./icon-paper.svg' alt='paper' className='img_paper'/></button>
        <button className='btn_scissors' onClick={handleButton}><img src='./icon-scissors.svg' alt='scissors' className='img_scissors'/></button>
        <button className='btn_rock' onClick={handleButton}><img src='./icon-rock.svg' alt='rock' className='img_rock'/></button>
    </section>
  );
}

export default index