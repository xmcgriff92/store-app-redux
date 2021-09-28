import React, { Component } from 'react'
import './Style.css';

export default class CarCards extends Component {

 state = {

    make: "Bugatti",
    model: "La voiture noire",
    engine: "v16",
    horsepower: "1500",
    price: "19000000",
    image: [
      {
        primary: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg",

        secondary: "https://assets.newatlas.com/dims4/default/f863a29/2147483647/strip/true/crop/1920x1029+0+0/resize/1440x772!/quality/90/?url=http%3A%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Fbugatti-la-voiture-noire-21.jpeg",
      },
    ],
    transmission: "7 speed dual clutch",
    topSpeed: [{ US: "261", Metric: "420" }],
    
    img : true,
    blah: "https://uncrate.com/p/2021/06/bugatti-la-voiture-noire-1.jpg"
  };

  changePicture = () => {
      let newPicture = this.state.img ? this.state.image[0].primary: this.state.image[0].secondary;
      this.setState({blah : newPicture, img: !this.state.img})
      console.log(newPicture)
      
  }


    render() {
        return (
        <div className={"div-one"}>
            <div className={"div-two"}>
                <h1>{this.state.make}</h1>
                <img className={"image"} src = {this.state.blah}></img>
                <h5>{this.state.model}</h5>
                <h3>{this.state.engine}</h3>
                <h1>{this.state.price}</h1>
                <button className={"button"} onClick= {this.changePicture}>Change Picture</button>
            </div>
        </div>
        )
    }
}
