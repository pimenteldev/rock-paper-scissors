import React from 'react';
import './index.css';

function index(props) {
    const {game} = props
    const {picked,house,winner} = game
    
    return (
        <section className='content_final'>
            <>
            {
                winner===true
                    ? <div className='btn_winner'></div>
                    : <></>
            }
            
            {
                picked === 'paper' 
                    ? <button className='btn_paper_final'><img src='./icon-paper.svg' alt='paper' className='img_paper'/></button>
                    : picked === 'scissors'
                        ? <button className='btn_scissors_final'><img src='./icon-scissors.svg' alt='scissors' className='img_scissors'/></button>
                        : <button className='btn_rock_final'><img src='./icon-rock.svg' alt='rock' className='img_rock'/></button>
            }
            <span className='you_picked_final'>YOU PICKED</span>
            </>
            <>
            {
                winner===false
                    ? <div className='btn_winner_house'></div>
                    : <></>
            }  
                {
                    house === ''
                        ? <button className='shadow_pick'></button>
                        : house === 'paper'
                            ? <button className='btn_house_paper_final'><img src='./icon-paper.svg' alt='paper' className='img_paper'/></button>
                            : house === 'scissors'
                                ? <button className='btn_house_scissors_final'><img src='./icon-scissors.svg' alt='scissors' className='img_scissors'/></button>
                                : house === 'rock'
                                    ? <button className='btn_house_rock_final'><img src='./icon-rock.svg' alt='rock' className='img_rock'/></button> 
                                    : <>{house}</>
                }   
                
                <span className='house_picked_final'>THE HOUSE PICKED</span>
            </>
        </section>
    );
}

export default index