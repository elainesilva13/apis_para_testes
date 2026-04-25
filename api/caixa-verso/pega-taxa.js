export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }
    const taxa = parseFloat((Math.random() * (6.99 - 1.00) + 1.00).toFixed(2));    
    if (taxa>=6){
        return res.status(405).json({ error: 'Cliente Inelegível' });
    }
    
    return res.status(200).json({ taxaJuros: taxa });
}
