const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public'))); // Para servir os arquivos estáticos (HTML)

app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: true,
}));

// Simples armazenamento de usuários para registro e login
const users = {};

// Rota de registro
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.status(400).send('Usuário já existe');
    }
    users[username] = { username, password };
    res.status(200).send('Registro bem-sucedido');
});

// Rota de login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users[username];
    if (user && user.password === password) {
        req.session.user = { username };
        res.status(200).send('Login bem-sucedido');
    } else {
        res.status(401).send('Credenciais inválidas');
    }
});

// Middleware de autenticação
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.status(401).send('Você precisa estar logado para acessar esta página');
    }
}

app.use('/users', isAuthenticated, userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
