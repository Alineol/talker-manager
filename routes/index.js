const express = require('express');
const { getTalker, generateToken, deleteTalker, addTalker, 
  editTalker } = require('../helpers/index');
const { loginCheck, validateToken, validateAge, validateName, 
  validateTalk, validateTalkDateRate } = require('../middlewares/index');

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

routes.post('/talker', validateToken, validateAge, validateName, 
validateTalk, validateTalkDateRate, async (req, res) => {
  const talker = await addTalker(req.body);
  return res.status(201).json(talker);
});

routes.put('/talker/:id', validateToken, validateAge, validateName, 
validateTalk, validateTalkDateRate, async (req, res) => {
  const { id } = req.params;
  const talker = await editTalker(id, req.body);
  return res.status(200).json(talker);
});

routes.delete('/talker/:id', validateToken, async (req, res) => {
  const { id } = req.params;
  deleteTalker(id);
  return res.status(204).json({ message: '' });
});

module.exports = routes;
