const express = require('express');
const { getTalker, generateToken } = require('../helpers/index');
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
  console.log(id);
  const result = data.find((talker) => talker.id === Number(id));
if (!result) {
  return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
}
return res.status(200).json(result);
});

routes.post('/login', (req, res) => {
  // const { email, password } = req.body;
  // console.log(email, password);
  // if (!email || password) {
  //   return res.status(400).json({ message: 'lalalala' });
  // }
  const token = generateToken(16);
  console.log(token);
  return res.status(200).json({ token });
});

module.exports = routes;
