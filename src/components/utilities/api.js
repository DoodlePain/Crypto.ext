var api = {
	getInfo(url){
		url='https://min-api.cryptocompare.com/data/histohour?fsym='+url +'&tsym=USD&limit=24'
		// url = 'https://api.coinmarketcap.com/v1/ticker/'+url +'/?convert=EUR'
		return fetch(url, {
		  method: 'GET'
		}).then((res) => {
			return res.json()
		});
	}
};

export default api; 