var api = {
  getInfo(url) {
    url = 'https://min-api.cryptocompare.com/data/histohour?fsym=' + url + '&tsym=USD&limit=24'
    return fetch(url, {method: 'GET'}).then((res) => {
      return res.json()
    });
  }
};

export default api;
