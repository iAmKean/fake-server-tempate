/** 
 * step 1: npm install
 * step 2: input the details in the app then save
 * (optional) to run `node index.js`
*/
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

const port = 7002; // port should be inputted correctly on the app
const url = `http://127.0.0.1:${port}/` // url should be inputted correctly on the app

app.listen(port, () => {
	console.log(`Server running at ${url}`);
});
