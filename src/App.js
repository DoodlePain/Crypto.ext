import React from 'react';
import logo from './icon.png';
import './App.css';
import Convert from './components/utilities/convert';
import Select from 'react-select';
import Widget from './components/widget/Widget';
import options from './components/utilities/criptocurrency';
import getTotalValue from './components/utilities/getTotalValue';
import {Button, Title, SubTitle} from 'reactbulma';
 
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

	


  render() {
  
    return (
  		
    );
  }
}; 
