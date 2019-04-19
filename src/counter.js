import React, { Component } from 'react'

import ButtonComp from "./buttonComp";
class Counter extends Component {
    state = {
        count:0
      
      }
      
      onHandle = () => {
        this.setState(prevState => ({
          count:prevState.count+1
        }))
      }
      
  render() {
    return (
      <div>
         <ButtonComp countNo= {this.onHandle} countText = {this.state.count}  />
      </div>
    )
  }
}

export default Counter
