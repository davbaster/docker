const express = require ('express');

const app = express();
// req = reques, res = response
app.get('/',(req, res) => {
	res.send('Hi there');
});


app.listen(8080, () => {
	console.log('Listening on port 8080');
});