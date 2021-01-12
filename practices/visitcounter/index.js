const express = require('express');
const redis = require('redis');

const app = express ();
//customizing redis server connection to server.
const client = redis.createClient({
	host: 'redis-server', //name of container running redis server
	port: 6379 //default port number in redis
});
client.set('visits', 0); //setting variable to 0

// route handler
app.get('/', (req, res) => {
	client.get('visits', (err, visits) => {
		res.send('Number of visits is ' + visits);
		// updating #times receive visits
		client.set('visits', parseInt(visits) + 1);
	});
});

// tell the app in what port to listen
app.listen(8081, () => {
	console.log('Listening on port 4001');
});