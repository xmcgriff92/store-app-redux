import React, { Component } from 'react'
import "./Pokemon.css"

class Card extends Component {
    render() {
        const { id, name, hp, sprites } = this.props.data;
        return (
            <div className={"cards"}>
                <h1>Cards</h1>
                <p>{id}</p>
                <img src={sprites.front}/>
                <p>{name}</p>
                <p>{hp}</p>
                <button>Flip</button>
            </div>
        )
    }
}

export default Card;