import React, {Component} from 'react';
import classes from './Widget.css';
import * as firebase from 'firebase';
import emoji from 'node-emoji'

class Widget extends React.Component {
  render() {
    let trend = this.props.data.trend;
    let trendClass = '';
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    console.log('[Widget.js] this.props.data.trend content : ', this.props.data.trend);
    if (this.props.data.trend > 0) {
      trendClass = 'green'
    }
    if (this.props.data.trend < 0) {
      trendClass = 'red'
    }

    let up = emoji.get(':chart_with_upwards_trend:')
    let down = emoji.get(':chart_with_downwards_trend:')

    if (trend > 0) {
      trend = '+' + trend + '$ ' + up;
    }
    if (trend < 0) {
      if (isChrome) {
        trend = trend + '$ ' + up;
      } else {
        trend = trend + '$ ' + down;
      }
    }
    return (<div>
      <h2>Current price: {this.props.data.price_usd}
        USD</h2>
      <h2>Your ammount: {this.props.ammount}
      </h2>
      <h2>Your cut: {this.props.cut}</h2>
      <h2 className={trendClass}>Daily trend: {trend}
      </h2>
    </div>)
  }
}

export default Widget;
