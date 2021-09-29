import React, { Component } from 'react'
import "./Pokemon.css"

class Card extends Component {

    state = {
        flip: false,
    };

   
    flipIt = () => {
        this.setState({ flip: !this.state.flip});
    }
    
    render() {
        const { name, hp, sprites } = this.props.data;
        const { flip } = this.state
        
        return (
            <div className={"cards"}>
                
                <h1 className={"name"}>{name}</h1>
                <img className={"image"} src={flip ? sprites.back : sprites.front}/>
                <h3>HP: {hp}</h3>
                <button onClick={this.flipIt} className={"button"}>Flip</button>
            </div>
        )
    }
}

export default Card;