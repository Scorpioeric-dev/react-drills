import React, { Component } from 'react'

export default class Pokemon extends Component {
    render() {
        return (
            <div>
            <h3>{this.props.pokemon.name}</h3>
            <h3>{this.props.pokemon.id}</h3>
            </div>
        )
    }
}
