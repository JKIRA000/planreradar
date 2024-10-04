const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

// In-memory user storage (for demonstration purposes)
let users = [];

// Serve static files
app.use(express.static('public'));

// Registration route
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
    }
    users.push({ username, password });
    res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        req.session.user = user;
        return res.status(200).json({ message: 'Login successful' });
    }
    res.status(401).json({ error: 'Invalid credentials' });
});

// Flight search route
app.post('/api/flight-search', async (req, res) => {
    const { flightNumber, arrival, departure } = req.body;
    
    try {
        let url = `https://aviationstack.com/v1/flights?access_key=YOUR_ACCESS_KEY`;
        
        if (flightNumber) {
            url += `&flight_iata=${flightNumber}`;
        } else if (arrival) {
            url += `&arrival_iata=${arrival}`;
        } else if (departure) {
            url += `&departure_iata=${departure}`;
        }

        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch flight data' });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT} );
});