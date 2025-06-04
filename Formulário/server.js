const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Rota de teste
app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;
    res.json({ reply: `Você disse: ${userMessage}` });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
