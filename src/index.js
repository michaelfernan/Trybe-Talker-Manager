const express = require('express');
const fs = require('fs').promises;
const crypto = require('crypto'); 

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const HTTP_BAD_REQUEST_STATUS = 400;
const PORT = process.env.PORT || '3001';

async function readTalkerFile() {
  try {
    const data = await fs.readFile('src/talker.json', 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Erro ao ler o arquivo:', error.message);
    return [];
  }
}

app.get('/talker', async (_request, response) => {
  const talkers = await readTalkerFile();
  response.status(HTTP_OK_STATUS).json(talkers);
});

app.get('/talker/:id', async (request, response) => {
  const { id } = request.params;
  const talkers = await readTalkerFile();

  const talker = talkers.find((t) => t.id === parseInt(id, 10));

  if (!talker) {
    return response.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }

  response.status(HTTP_OK_STATUS).json(talker);
});

function validateEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!email) {
    return 'O campo "email" é obrigatório';
  }
  if (!emailRegex.test(email)) {
    return 'O "email" deve ter o formato "email@email.com"';
  }
  return null;
}

function validatePassword(password) {
  if (!password) {
    return 'O campo "password" é obrigatório';
  }
  if (password.length < 6) {
    return 'O "password" deve ter pelo menos 6 caracteres';
  }
  return null;
}

app.post('/login', (request, response) => {
  const { email, password } = request.body;
  
  const emailError = validateEmail(email);
  if (emailError) {
    return response.status(HTTP_BAD_REQUEST_STATUS).json({ message: emailError });
  }

  const passwordError = validatePassword(password);
  if (passwordError) {
    return response.status(HTTP_BAD_REQUEST_STATUS).json({ message: passwordError });
  }

  const token = crypto.randomBytes(8).toString('hex');
  response.status(HTTP_OK_STATUS).json({ token });
});

// Não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
