const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve downloads
app.use('/downloads', express.static(path.join(__dirname, 'downloads')));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).send('Page not found');
});

app.listen(PORT, () => {
    console.log(`🚀 AI Browser Website running on port ${PORT}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
});
