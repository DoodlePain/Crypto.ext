import React, {Component} from 'react';
import classes from './Widget.css';
import * as firebase from 'firebase';
<<<<<<< HEAD

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

    if (trend > 0) {
      trend = '+' + trend + '$🤑';
=======
import Widget from './components/widget/Widget';
import options from './components/utilities/cryptocurrency';
import Footer from './components/footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.logChange = this.logChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      api: {
        symbol: 'BTC',
        price_usd: 0,
        oldprice_usd: 0,
        trend: -1
      },
      actualCurrency: '',
      ammount: 0,
      value: 0,
      available: null,
      total: 0,
      firebase: [],
      modify: false,
      surprise: false,
      id: '',
      loginChange: false,
      update: true
    };
  }

  logChange = (val) => {
    let trend;
    if (val !== undefined) {
      if (val !== null) {
        api.getInfo(val.id).then((res) => {
          trend = (res.Data[24].close - res.Data[0].close);
          let fixedTrend = trend.toFixed(3);
          this.setState({
            api: {
              symbol: val.id,
              price_usd: res.Data[24].close,
              oldprice_usd: res.Data[0].close,
              trend: fixedTrend
            }
          })
          this.getTrend(val.id)
        })
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // console.log(nextState, '    ' ,this.state);
    if (nextState.loginChange !== this.state.loginChange) {
      // console.log('loginChange');
      return true
    }
    if (nextState.id !== this.state.id) {
      // console.log('id change');

      return true
    }
    if (nextState.surprise !== this.state.surprise) {
      // console.log('surprise change');
      return true
    }
    if (nextState.api.trend !== this.state.api.trend) {
      // console.log('api.trend change');
      return true
    }
    if (nextState.value !== this.state.value) {
      // console.log('value change');
      return true
    }
    if (nextState.total !== this.state.total) {
      // console.log('total change');
      return true
    }
    if (nextState.ammount !== this.state.ammount) {
      // console.log('ammount change');
      return true
    }
    if (nextState.ammount === this.state.ammount) {
      // console.log('ammount === change');
      if (nextState.modify !== this.state.modify) {
        // console.log('modify change');
        return true
      }
      return false
    }
    return true
  }

  addToDBHandler = () => {
    const uid = sessionStorage.getItem('user');
    const rootRef = firebase.database().ref('users/' + uid + this.state.api.symbol).set({currency: this.state.api.symbol, value: this.state.value});
    this.setState({modify: false})
  }

  getTrend = (curr) => {
    var user = '';
    const uid = sessionStorage.getItem('user');
    if (curr !== null) {
      user = 'users/' + uid + curr
    }
    if (curr === null) {
      user = 'users/' + uid + this.state.api.symbol
    }
    const db = firebase.database().ref(user);
    db.once('value').then((snapshot) => {
      var ammount = (snapshot.val() && snapshot.val().value);
      this.setState({ammount: ammount, available: 1});
      if (ammount === null) {
        this.setState({ammount: 0, available: null})
      }
    });
  }

  accountCheck = () => {
    const user = sessionStorage.getItem('user')
    if (user) {
      this.firebaseToThis(user)
    }
  }

  componentWillMount() {
    if(sessionStorage.getItem('user')===undefined || sessionStorage.getItem('user')===null)
    {
      const date = Date.now()
      console.log(date);
      sessionStorage.setItem('user',date);
    }

    this.accountCheck()

    api.getInfo('BTC').then((res) => {
      const result = {
        symbol: 'BTC',
        price_usd: res.Data[24].close,
        oldprice_usd: res.Data[0].close
      }
      this.setState({api: result})
    })
    this.logChange()
  }

  firebaseToThis = (uid) => {
    let string;
    options.map((curr) => {
      console.log("Ciao");
      let db = firebase.database().ref('users/' + uid + curr.id);
      db.once('value').then((snapshot) => {

        const snapRes = (snapshot.val() && snapshot.val().value);
        let fire = this.state.firebase.slice();
        string = {
          name: curr.id,
          value: snapRes
        };
        fire.push(string);
        this.setState({firebase: fire});

        api.getInfo(curr.id).then((res) => {
          if (!isNaN(snapRes)) {
            let total = this.state.total + snapRes * res.Data[0].close;
            this.setState({total: total});
          }
        })
      })
    })

    this.forceUpdate()
  }

  changeCurrency = (currency) => {
    this.setState({actualCurrency: currency})
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  getTotal = () => {
    let price;
    let db;
    let i = 0;
    while (this.state.firebase === null) {
      console.log('Waiting for firebase', this.state.firebase)
    }
    const uid = sessionStorage.getItem('user');
    options.map((curr) => {
      db = firebase.database().ref('users/' + uid + curr.id);
      api.getInfo(curr.id).then((res) => {
        if (res) {
          price = res.Data[0].close;
        }
      })
    })
  }

  activateModify = () => {
    this.setState({
      modify: !this.state.modify
    })
    return null;
  }

  getSurprise = () => {
    this.setState({
      surprise: !this.state.surprise
    })
  }

  handleLogin = (data) => {
    const user = sessionStorage.getItem('user');
    if (sessionStorage.getItem('user') === null) {
      sessionStorage.setItem('user', JSON.stringify(data.profile.id));
      this.firebaseToThis(user)
    } else {
      sessionStorage.removeItem('user');
      this.setState({total:0})
      this.firebaseToThis(user)
    }
    this.setState({
      loginChange: !this.state.loginChange
    })
  }

  render() {

    let widget1 = null;
    let widget2 = null;
    let total = null;
    let add;
    var data = this.state.api;
    let surprise = <u className="surprise" onClick={this.getSurprise}>Click me to receive a surprise</u>;

    if (this.state.surprise) {
      surprise = <Footer/>
    }

    if (this.state.available) {
      widget1 = null;
      widget2 = <Widget actual={this.state.api.symbol} data={this.state.api} ammount={this.state.ammount} getTrend={this.getTrend}/>
    } else {
      widget1 = (<h1>
        <b>Select the Currency</b>
      </h1>)
      widget2 = <Convert from={data.symbol} actual={data.price_usd} add={this.addToDBHandler} changeCurrency={this.changeCurrency} handleChange={this.handleChange} value={this.state.value}/>;
    }


    if (this.state.ammount === 0) {
      add = null
    } else if (this.state.modify === false) {
      add = (<p>
        <button onClick={this.activateModify}>Modify</button>
      </p>)
>>>>>>> 668677b84fb4c130cc87b6e4de00d1758c470ab5
    }
    if (trend < 0) {
      if (isChrome) {
        trend = trend + '$😡';
      } else {
        trend = trend + '$🙁';
      }
    }
<<<<<<< HEAD
    return (<div>
      <h2>Current price: {this.props.data.price_usd}
        USD</h2>
      <h2>Your ammount: {this.props.ammount}
      </h2>
      <h2 className={trendClass}>Daily trend: {trend}
      </h2>
    </div>)
=======
    return (<div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>CryptoWitdget</h2>
        <h3>Your account value :</h3>
        <h4>{this.state.total}$</h4>
      </div>
      <div className="center">
        {widget1}
        <Select name="form-field-name" value={this.state.api.symbol} options={options} onChange={this.logChange} placeholder={this.state.api.symbol}/> {widget2}
        {add}
      </div>
      {surprise}
    </div>);
>>>>>>> 668677b84fb4c130cc87b6e4de00d1758c470ab5
  }
}

export default Widget;
