import React, { Component } from 'react'
import "./Pokemon.css"

class Card extends Component {
    render() {
        const { id, name, hp, sprites } = this.props.data;
        return (
            <div className={"cards"}>
                
                <h1>{name}</h1>
                <p>{id}</p>
                <img className={"image"} src={sprites.front}/>
                <h3>HP: {hp}</h3>
                <button>Flip</button>
            </div>
        )
    }
}

export default Card;