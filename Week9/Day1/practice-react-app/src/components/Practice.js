import React, { Component } from 'react'
import './Style.css';

export default class Practice extends Component {

    state = {
        
        make: "Trackhawk",
        model: "Jeep Grand Cherokee",
        engine: "6.2 L V8",
        horsepower: "707 hp",
        price: "$89,780",
        image: [{
                primary: "https://images.unsplash.com/photo-1511527844068-006b95d162c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",

                secondary: "https://images.unsplash.com/photo-1616188672226-54b3e333f94f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80",
              },
            ],
            transmission: "7 speed dual clutch",
            topSpeed: [{ US: "261", Metric: "420" }],

            img: true,
            drip: "https://images.unsplash.com/photo-1511527844068-006b95d162c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"

          };

          changePicture = () => {
              let newPicture = this.state.img ? this.state.image[0].primary : this.state.image[0].secondary;
              this.setState({drip : newPicture, img: !this.state.img})
          }
    

    render() {
        return (
            <div className={"div-one"}>
                <h1>{this.state.make}</h1>
                <img className={"image"} src={this.state.drip}></img>
                <h2>{this.state.model}</h2>
                <h5>{this.state.engine}</h5>
                <h5>{this.state.horsepower}</h5>
                <h1>{this.state.price}</h1>
                <button className={"button"} onClick={this.changePicture}>Change Picture</button>
                
            </div>
        )
    }
}
