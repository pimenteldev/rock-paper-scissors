import React from "react";
import './index.css'

function index(props){
    const {score} = props
    return(
        <section className="header">
            <article>
                <img src="./logo.svg" alt="logo" className="logo"/>
            </article>
            <article className="score">
                <h3>SCORE</h3>
                <h4>{score}</h4>
            </article>
        </section>
    )
}

export default index