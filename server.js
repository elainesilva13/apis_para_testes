const express = require('express');
const app = express();
const port = 3000;

app.get('/api/checkClient', (req, res) => {
    const idClient = req.query.idClient;

    // Randomly decide to return success or error
    const success = Math.random() >= 0.5;

    if (success) {
        // Generate a random decimal value between 1 and 5% with 2 decimal places
        const randomValue = (Math.random() * (0.05 - 0.01) + 0.01).toFixed(2);
        return res.status(200).json({ value: randomValue });
    } else {
        return res.status(400).json({ error: 'Cliente inelegível' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
