const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

const PORT = process.env.PORT || 3000;

// Log all requests
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Serve static files from root
app.use(express.static(path.join(__dirname)));

// Explicit route for download debugging
app.get('/downloads/:filename', (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, 'downloads', filename);

    console.log(`Attempting to serve: ${filePath}`);

    if (fs.existsSync(filePath)) {
        console.log('File exists, starting download...');
        res.download(filePath, filename, (err) => {
            if (err) {
                console.error('Download error:', err);
                if (!res.headersSent) {
                    res.status(500).send('Server Error during download');
                }
            }
        });
    } else {
        console.error('File NOT found!');
        res.status(404).send('File not found on server');
    }
});

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 AI Browser Website running on port ${PORT}`);
    console.log(`📂 Serving downloads from: ${path.join(__dirname, 'downloads')}`);
    console.log(`🌐 Visit: http://localhost:${PORT}`);
});
