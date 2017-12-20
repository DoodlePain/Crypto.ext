import React, {Component} from 'react';

class getTotalValue extends Component {
  render() {
    return (<div>
      <p>Your total account value is {this.props.total}
        $</p>
    </div>)
  }
}

export default getTotalValue;
