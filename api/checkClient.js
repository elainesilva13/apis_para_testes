export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { idClient } = req.query;

        if (!idClient) {
            return res.status(400).json({ error: 'idClient obrigatório' });
        }

        const discount = (Math.random() * (6.99 - 1) + 1).toFixed(2);

        return res.status(200).json({ discount: discount });
    } else {
        return res.status(405).json({ error: 'Method not allowed' });
    }
}
