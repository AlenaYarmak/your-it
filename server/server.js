const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const PORT = 3000;

// Middleware to parse JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Enable CORS for all routes
app.use(cors()); // Use the cors middleware

app.get('/', (req, res) => {
    res.send(`Server is running on http://localhost:${PORT} hi hi hi`);
})

app.post('/submit', (req, res) => {
    // Assuming the client is sending JSON data in the request body
    const jsonData = req.body;

    // Log the received JSON data to the console
    console.log('Received JSON data:', jsonData);

    // You can perform further processing here

    res.status(200).send('JSON data received successfully'); // Send a response to the client
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
