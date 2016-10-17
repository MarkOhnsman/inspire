function QuoteService(){
	var url = 'http://bcw-getter.herokuapp.com/?url=';
	var url2 = 'http://quotesondesign.com/api/3.0/api-3.0.json';
	var apiUrl = url + encodeURIComponent(url2);
	
	this.getQuote =  function(callWhenDone){
		return $.get(apiUrl, function(res){
			var obj = JSON.parse(res)
			var fullQuote= obj.quote + " - " + obj.author
			callWhenDone(fullQuote)
		})
	}
} 