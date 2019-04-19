import React, { Component } from 'react'


class ButtonComp extends Component {
   

    onChildHandle = () => {
      this.props.countNo(this.props.countText)
    }


  render() {
    return (
      <div>
        <button className="btnIncre" onClick = {this.onChildHandle} >Count: {this.props.countText}</button>
        <p className="para">Count: {this.props.countText}</p>
      </div>
    )
  }
}

export default ButtonComp
