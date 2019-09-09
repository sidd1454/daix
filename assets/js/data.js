const url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC&convert=USD";
axios.get(`${'https://min-api.cryptocompare.com/data/generateAvg?fsym=${query}&tsym=USD&e=CCCAGG&extraParams=DAIX'}${url}`, { headers: {
  "X-CMC_PRO_API_KEY": "7225fecd-72a3-4470-8e58-37c7608f5a2a",
} })

.then(({ data } = response) => {
  console.log('data -> ', data);
})
.catch(error => {
  console.log('error -> ', error);
});


// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC&convert=USD",
// 	"method": "GET",
// 	"headers": {
// 	"X-CMC_PRO_API_KEY": "7225fecd-72a3-4470-8e58-37c7608f5a2a",
// }

// var express = require("express");
// var data = express();
// var bodyParser = require("body-parser");
// var request = require('request');

// data.use(bodyParser.urlencoded({extended: true}));
// data.set("view engine", "ejs");

// data.get("/", function(req, res){
// 	request('https://min-api.cryptocompare.com/data/generateAvg?fsym=${query}&tsym=USD&e=CCCAGG&extraParams=DAIX', function(error, response, body){
// 		if(!error && response.statusCode == 200){
// 				var data = JSON.parse(body)
// 				res.render("results", {data: data});
// 		}
// 	});
// });


// data.listen(process.env.PORT, process.env.IP, function(){
// 	console.log("Server is listening");
// });