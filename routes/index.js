const express = require('express');
const { getTalker, generateToken, deleteTalker } = require('../helpers/index');
const { loginCheck, validateToken } = require('../middlewares/index');
// const data = require('../talker.json');

// const middlerwares = require('../middlewares');

const routes = express.Router();

routes.get('/talker', async (req, res) => {
    const data = await getTalker();
  if ((data).length === 0) {
    return res.status(200).json([]);
  }
   return res.status(200).json(data);
});

routes.get('/talker/:id', async (req, res) => {
  const data = await getTalker();
  const { id } = req.params;
  const result = data.find((talker) => talker.id === Number(id));
if (!result) {
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
}
return res.status(200).json(result);
});

routes.post('/login', loginCheck, (req, res) => {
  const token = generateToken(16);
  return res.status(200).json({ token });
});

routes.delete('/talker/:id', validateToken, async (req, res) => {
  const { id } = req.params;
  deleteTalker(id);
  return res.status(204).json({ message: '' });
});

module.exports = routes;
