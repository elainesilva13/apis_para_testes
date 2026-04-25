export default async function handler(req, res) {
    // Check if the request method is GET
    if (req.method === 'GET') {
        const { idClient } = req.query;

        // Validate if idClient is provided
        if (!idClient) {
            return res.status(400).json({ error: 'idClient parameter is required' });
        }

        // Generate a random discount value between 1 and 5
        const discount = Math.floor(Math.random() * 5) + 1;

        // Return the discount value
        return res.status(200).json({ discount: discount });
    } else {
        // If the method is not GET, return 405 Method Not Allowed
        return res.status(405).json({ error: 'Method not allowed' });
    }
}