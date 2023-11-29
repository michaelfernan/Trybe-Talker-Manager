const express = require('express');
const fs = require('fs').promises;
const crypto = require('crypto'); // Importando o módulo crypto

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
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

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.post('/login', (_request, response) => {
  const token = generateToken();
  response.status(HTTP_OK_STATUS).json({ token });
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

// Não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
