export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { idClient } = req.query;

        if (!idClient) {
            return res.status(400).json({ error: 'Cliente inelegível' });
        }

        // Generate a random decimal value between 1.00 and 5.99 with 2 decimal places
        const randomValue = (Math.random() * (5.99 - 1.00) + 1.00).toFixed(2);
        
        return res.status(200).json({ discount: parseFloat(randomValue) });
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}