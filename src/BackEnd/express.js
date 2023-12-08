const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000; // Use an available port or specify a custom one

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
