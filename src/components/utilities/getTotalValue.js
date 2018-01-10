import React, {Component} from 'react';

class getTotalValue extends Component {
  render() {
    let total = this.props.total
    return (<div>
      <p>Your total account value is {total}$</p>
    </div>)
  }
}

export default getTotalValue;
