import React, {useEffect} from 'react';
import './index.css';

function index(props) {
    const {game} = props
    const {picked,pick} = game
    let house_pick = ""
    let random = null
    const except = [pick]
    const positions = ["paper","scissors","rock"]
    
    function randomNumber () {
        random=0
         do{ 
            random = parseInt(Math.random() * (4 - 1) + 1)
        }while (except.includes(random)){
            return random
        }
    }    
   

    useEffect(()=>{
        house_pick = positions[randomNumber()-1]
        if((picked === 'paper' && house_pick === 'rock' ) || 
        (picked === 'rock' && house_pick === 'scissors' ) || 
        (picked === 'scissors' && house_pick === 'paper' )) {
            setTimeout(() => {
                props.setGame({
                    'start': true,
                    'step': 'StepThree',
                    'house': house_pick,
                    'picked': picked,
                    'pick': pick,
                    'winner': true
                })
                props.winGame()
            }, 2000);
            
        }else{
            setTimeout(() => {
                props.setGame({
                    'start': true,
                    'step': 'StepThree',
                    'house': house_pick,
                    'picked': picked,
                    'pick': pick,
                    'winner': false
                }) 
                props.loseGame()
            }, 2000);
            
        }

    },[])

    return (
        <section className='content_two'>
            <>
            {
                picked === 'paper'
                    ? <button className='btn_paper_two'><img src='./icon-paper.svg' alt='paper' className='img_paper'/></button>
                    : picked === 'scissors'
                        ? <button className='btn_scissors_two'><img src='./icon-scissors.svg' alt='scissors' className='img_scissors'/></button>
                        : <button className='btn_rock_two'><img src='./icon-rock.svg' alt='rock' className='img_rock'/></button>
            }
            <span className='you_picked'>YOU PICKED</span>
            </>
            <>  
                {
                    house_pick === ''
                        ? <button className='shadow_pick'></button>
                        : house_pick === 'paper'
                            ? <button className='btn_house_paper_two'><img src='./icon-paper.svg' alt='paper' className='img_paper'/></button>
                            : house_pick === 'scissors'
                                ? <button className='btn_house_scissors_two'><img src='./icon-scissors.svg' alt='scissors' className='img_scissors'/></button>
                                : <button className='btn_house_rock_two'><img src='./icon-rock.svg' alt='rock' className='img_rock'/></button> 
                }
                
                <span className='house_picked'>THE HOUSE PICKED</span>
            </>
        </section>
    );
}

export default index