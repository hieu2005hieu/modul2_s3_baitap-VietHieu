import React, { Component } from 'react'

export default class Baitap1 extends Component {
    constructor() {
        super()
        this.state = {
            text:"ngggggggggggggggg"
        }
    }
    chentext = ()=>{
        this.setState({
            text:"hhhhhhhhhhhhh"
        })
    }
  render() {
    return (
      <>
            <p>{this.state.text}</p>
            <button onClick={this.chentext}>click</button>
      </>
    )
  }
}
