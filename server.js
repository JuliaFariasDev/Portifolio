const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Configuração do CORS para permitir requisições do frontend
app.use(cors());

// Configuração do body-parser para processar JSON no corpo das requisições
app.use(bodyParser.json());

// Testar se o servidor está funcionando corretamente (opcional)
app.get('/', (req, res) => {
    res.send("Servidor funcionando! Use a rota POST /api/chat para interagir com o chatbot.");
});

// Configuração da rota POST /api/chat para o chatbot
app.post('/api/chat', (req, res) => {
    const userMessage = req.body.message;

    // Aqui você pode adicionar a lógica do seu chatbot
    // Exemplo simples de resposta
    let botResponse = "Desculpe, não entendi sua mensagem.";

    if (userMessage.toLowerCase() === "oi") {
        botResponse = "Olá! Como posso ajudar você?";
    }

    // Enviar a resposta para o frontend
    res.json({ reply: botResponse });
});

// Middleware para tratar rotas não encontradas (opcional)
app.use((req, res) => {
    res.status(404).send("Rota não encontrada. Verifique o método e a URL.");
});

// Iniciar o servidor na porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
