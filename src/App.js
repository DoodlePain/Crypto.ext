import React from 'react';
import logo from './icon.png';
import './App.css';
import Convert from './components/utilities/convert';
import Select from 'react-select';
import Widget from './components/widget/Widget';
import options from './components/utilities/cryptocurrency';
import getTotalValue from './components/utilities/getTotalValue';
import {Button, Title, SubTitle} from 'reactbulma';
import api from './components/utilities/api';
import * as firebase from 'firebase';
 
export default class App extends React.Component {

//Lifecycle functions

	constructor(props) {
	    super(props);
	    this.logChange = this.logChange.bind(this);
	    this.handleChange = this.handleChange.bind(this);
	    this.state = {
		api:{
	        symbol:'BTC',
	        price_usd: 0,
	        oldprice_usd: 0,
	        trend:-1
	      },
	      actualCurrency: '',
	      ammount:0,
	      value:0,
	      available:null,
	      total:0,
	      firebase:[],
	      modify:false
	    };
	}

	componentWillMount(){
	    this.firebaseToThis();
	    api.getInfo('BTC').then((res) => {
	      const result = {symbol:'BTC',price_usd:res.Data[24].close,oldprice_usd:res.Data[0].close}
	      this.setState({api:result});
	    })
	    this.logChange();
  	}

	shouldComponentUpdate(nextProps,nextState){
	    if(nextState.api.trend!==this.state.api.trend)	{return true}
	    if(nextState.value!==this.state.value)			{return true}
	    if(nextState.total!==this.state.total)			{return true}
	    if(nextState.ammount!==this.state.ammount)		{return true}
	    if(nextState.ammount===this.state.ammount){
	      if(nextState.modify!==this.state.modify){
	        return true
	      }
	      return false
	    }
	    return true
	}




//Handmade functions 

	logChange = (val) => {
		let trend;
		let fixedTrend;
		let api;
		if(val!==undefined){
			if(val!==null){
				api.getInfo(val.id).then((res) =>{
					trend = (res.Data[24].close-res.Data[0].close);
					fixedTrend = trend.toFixed(3);
					api = {symbol:val.id,price_usd: res.Data[24].close,oldprice_usd: res.Data[0].close,trend: fixedTrend}
					this.setState({api:api});
					this.getTrend(val.id);
				})
			}
		}
	}

	changeCurrency = (currency) => {
		this.setState({actualCurrency:currency})
	}


	handleChange = (event) => {
		this.setState({value: event.target.value})
	}

	getTotal = () => {
		let price;
		let db ;
		while(this.state.firebase === null){ console.log('Waiting for firebase',this.state.firebase)}
		options.map((curr)=> {
			db = firebase.database().ref('users/'+curr.id);
			api.getInfo(curr.id).then((res) => {
				if(res){
		      		price = res.Data[0].close;
			    }
			})
		})
	}

	activateModify = () => {
		this.setState({modify:!this.state.modify})
	}

	firebaseToThis = () => {
		let string;
		let total;
		let fire;
		let snapRes;
		let db;

		options.map((curr)=> {
			db = firebase.database().ref('users/'+curr.id);
			db.once('value').then((snapshot) => {
			    snapRes = (snapshot.val() && snapshot.val().value);
			    fire = this.state.firebase.slice();
			    string = {name:curr.id ,value: snapRes};
			    fire.push(string);
			    this.setState({firebase:fire});
			    api.getInfo(curr.id).then((res) => {
			      	if(!isNaN(snapRes)){
			       		total = this.state.total + snapRes*res.Data[0].close;
			        	this.setState({total:total});
		      		}
		    	})
		  	})
		})
	}


  render() {
  
    return (
    	<div className="App">
  			<div className="App-header">
  				<img src={logo} className="App-logo" alt="logo"/>
	            <Title is="2" spaced>CryptoWitdget</Title>
	            <SubTitle is="4">Your account value :</SubTitle>
	            <Title is="4">{this.state.total}$</Title>
  			</div>
  			<div className="center">
  				<Select
	              name="form-field-name"
	              value={this.state.api.symbol}
	              options={options}
	              onChange={this.logChange}
	              placeholder={this.state.api.symbol}
	            />
  			</div>
		</div>
    );
  }
}; 
