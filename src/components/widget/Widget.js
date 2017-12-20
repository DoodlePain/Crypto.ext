import React, {Component} from 'react';
import classes from './Widget.css';
import * as firebase from 'firebase';

class Widget extends React.Component {
  render() {
    let trend = this.props.data.trend;
    let trendClass = '';
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if (this.props.data.trend > 0) {
      trendClass = 'green'
    }
    if (this.props.data.trend < 0) {
      trendClass = 'red'
    }

    if (trend > 0) {
      trend = '+' + trend + '$🤑';
    }
    if (trend < 0) {
      if (isChrome) {
        trend = trend + '$😡';
      } else {
        trend = trend + '$🙁';
      }
    }
    return (<div>
      <h2>Current price: {this.props.data.price_usd} USD</h2>
      <h2>Your ammount: {this.props.ammount}
      </h2>
      <h2 className={trendClass}>Daily trend: {trend}
      </h2>
    </div>)
  }
}

export default Widget;
