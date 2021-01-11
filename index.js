const express = require ('express');

const app = express();
// req = reques, res = response
app.get('/',(req, res) => {
	res.send('Hello world, Iam David');
});


app.listen(8080, () => {
	console.log('Listening on port 8080');
});