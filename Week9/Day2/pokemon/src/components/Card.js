import React, { Component } from 'react'
import "./Pokemon.css"

class Card extends Component {
    render() {
        const { id, name, hp, sprites } = this.props.data;
        const {flipped} = this.props
        return (
            <div className={"cards"}>
                
                <h1 className={"name"}>{name}</h1>
                <p>{id}</p>
                <img className={"image"} src={flipped ? sprites.back : sprites.front}/>
                <h3>HP: {hp}</h3>
                <button className={"button"}>Flip</button>
            </div>
        )
    }
}

export default Card;