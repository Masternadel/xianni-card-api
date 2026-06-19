// src/index.js
// Local testing server for the serverless function

const express = require('express');
const { handler } = require('./api/card');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(require('path').join(__dirname, '../index.html'));
});

app.get('/api/card', async (req, res) => {
    // Mock the Netlify/Serverless event object
    const event = {
        queryStringParameters: req.query
    };

    try {
        const response = await handler(event);
        
        // Apply headers
        if (response.headers) {
            for (const [key, value] of Object.entries(response.headers)) {
                res.setHeader(key, value);
            }
        }
        
        res.status(response.statusCode);
        
        if (response.isBase64Encoded) {
            const buffer = Buffer.from(response.body, 'base64');
            res.send(buffer);
        } else {
            res.send(response.body);
        }
        
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`🚀 Local dev server running at http://localhost:${port}`);
    console.log(`Test endpoint: http://localhost:${port}/api/card?name=Wang+Lin&rarity=Legendary&atk=100&def=80&hp=500&emoji=👑`);
});
