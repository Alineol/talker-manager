const express = require('express');
const { getTalker } = require('../helpers/index');
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

module.exports = routes;
