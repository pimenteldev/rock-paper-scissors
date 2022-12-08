import React from 'react';
import './index.css';

function index(props) {
    const {game} = props
    const {winner} = game
    
    return (
        <section className='content_three'>
            <>
                {
                  winner === null
					? <></>
					: winner
                        ? <><span className="text_win_lose">YOU WIN</span><button className="btn_try_again" onClick={()=>props.tryAgain()}>PLAY AGAIN</button></>
                        : <><span className="text_win_lose">YOU LOSE</span><button className="btn_try_again" onClick={()=>props.tryAgain()}>PLAY AGAIN</button></>
                }
                <>
                    
                </>
            </>

        </section>
    );
}

export default index