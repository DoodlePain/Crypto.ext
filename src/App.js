import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import api from './components/utilities/api';
import Convert from './components/utilities/convert';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import database from './components/utilities/firebase';
import * as firebase from 'firebase';
import Widget from './components/widget/Widget';
import options from './components/utilities/cryptocurrency';
import {Button, Title, SubTitle} from 'reactbulma';

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
      modify: false
    };
  }

  logChange = (val) => {
    let trend;
    if (val !== undefined) {
      if (val !== null) {
        api.getInfo(val.id).then((res) => {
          // console.log('[App.js] Result ' ,res.Data[24]);
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
          // console.log("Selected: " ,this.state.api);
          this.getTrend(val.id)
        })
      }
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] nextState :', nextState.ammount, ' this.state ', this.state.ammount);
    if (nextState.api.trend !== this.state.api.trend) {
      console.log('[App.js] shouldComponentUpdate() api.trend update');
      return true
    }
    if (nextState.value !== this.state.value) {
      return true
    }
    if (nextState.total !== this.state.total) {
      return true
    }
    if (nextState.ammount !== this.state.ammount) {
      return true
    }
    if (nextState.ammount === this.state.ammount) {
      if (nextState.modify !== this.state.modify) {
        console.log('isopi')
        return true
      }
      return false
    }
    return true
  }

  addToDBHandler = () => {
    const rootRef = firebase.database().ref('users/' + this.state.api.symbol).set({
      // const rootRef = firebase.database().ref('users/BTC').set({
      currency: this.state.api.symbol,
      value: this.state.value
    });
    this.setState({modify: false})
    // console.log("[App.js] Line 37: this.state.api.symbol : ",this.state.api.symbol);

  }

  getTrend = (curr) => {
    // console.log('[App.js] getTrend() state.api.symbol content', this.state.api.symbol);
    var user = '';
    if (curr !== null) {
      user = 'users/' + curr
    }
    if (curr === null) {
      user = 'users/' + this.state.api.symbol
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

  componentWillMount() {
    this.firebaseToThis()
    api.getInfo('BTC').then((res) => {
      const result = {
        symbol: 'BTC',
        price_usd: res.Data[24].close,
        oldprice_usd: res.Data[0].close
      }
      this.setState({api: result})
      // console.log('[App.js] state content', this.state.api);
    })
    this.logChange()
  }

  firebaseToThis = () => {
    let string;
    options.map((curr) => {

      let db = firebase.database().ref('users/' + curr.id);
      db.once('value').then((snapshot) => {

        const snapRes = (snapshot.val() && snapshot.val().value);
        let fire = this.state.firebase.slice();
        string = {
          name: curr.id,
          value: snapRes
        };
        fire.push(string);
        this.setState({firebase: fire});

        // console.log('[App.js] string result: ', string);
        api.getInfo(curr.id).then((res) => {
          if (!isNaN(snapRes)) {
            let total = this.state.total + snapRes * res.Data[0].close;
            this.setState({total: total});
            // console.log('[App.js] Total of : ', fixedTotal);
          }
        })
      })
    })
  }

  componentDidMount() {
    // this.getTotal()
    // console.log('[App.js] getTotal() result ',this.state.ammount);
  }

  changeCurrency = (currency) => {
    this.setState({actualCurrency: currency})
  }

  handleChange = (event) => {
    console.log('[App.js] handleChange() : event.target.value', event.target.value);
    this.setState({value: event.target.value});
    console.log('[App.js] handleChange() : this.state.value after select change', this.state.value)
  }

  getTotal = () => {
    let price;
    let db;
    let i = 0;
    while (this.state.firebase === null) {
      console.log('Waiting for firebase', this.state.firebase)
    }
    // console.log('FIREBASE' , this.state.firebase)

    options.map((curr) => {
      // console.log('[App.js] Checking ' , curr.id , ' total');
      db = firebase.database().ref('users/' + curr.id);
      api.getInfo(curr.id).then((res) => {
        // console.log('[App.js] getTotal() db result ',res ,' of ', curr.id);
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

  render() {

    let widget = null;
    let total = null;
    let add;
    var data = this.state.api;

    if (this.state.available) {
      widget = <Widget actual={this.state.api.symbol} data={this.state.api} ammount={this.state.ammount} getTrend={this.getTrend}/>
    } else {
      widget = (<h1>Select the ammount and the Currency</h1>)
    }
    if (this.state.ammount === 0) {
      add = (<p className="App-intro">
        <Convert from={data.symbol} actual={data.price_usd} add={this.addToDBHandler} changeCurrency={this.changeCurrency} handleChange={this.handleChange} value={this.state.value}/>
      </p>)
    } else if (this.state.modify === false) {
      add = (<p>
        <Button medium="medium" onClick={this.activateModify}>Modify</Button>
      </p>)
    }
    if (this.state.modify === true) {
      add = (<p className="App-intro">
        <Convert from={data.symbol} actual={data.price_usd} add={this.addToDBHandler} changeCurrency={this.changeCurrency} handleChange={this.handleChange} value={this.state.value}/>
      </p>)
    }
    // console.log('[App.js] data content : ',data);
    return (<div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Title is="2" spaced="spaced">CryptoWitdget</Title>
        <SubTitle is="4">Your account value :</SubTitle>
        <Title is="4">{this.state.total.toFixed(2)}$</Title>
      </div>
      <div className="center">
        <Select name="form-field-name" value={this.state.api.symbol} options={options} onChange={this.logChange} placeholder={this.state.api.symbol}/> {widget}
        {add}
      </div>
    </div>);
  }
}

export default App;
