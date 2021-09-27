import React, { Component } from 'react'

export default class MyProfile extends Component {

    state = {
        firstName: "Xavier",
        lastName: "McGriff",
        city: "Houston",
        profilePic:""
    }

    render() {
        return (
            <div>
                <p>{this.state.firstName}</p>
                <p>{this.state.lastName}</p>
                <p>{this.state.city}</p>
            </div>
        )
    }
}
