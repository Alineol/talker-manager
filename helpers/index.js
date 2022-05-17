const fs = require('fs');
// const talker = require('../talker.json');

const getTalker = () => {
  const file = fs.readFileSync('./talker.json');
  const data = JSON.parse(file);
  return data;
};
// referência: https://www.webtutorial.com.br/funcao-para-gerar-uma-string-aleatoria-random-com-caracteres-especificos-em-javascript/

const generateToken = (size) => {
  let randomString = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < size; i += 1) {
    randomString += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return randomString;
};

const deleteTalker = async (id) => {
  const data = await getTalker();
  const filtered = data.filter((talker) => talker.id !== Number(id));
  fs.writeFileSync('./talker.json', JSON.stringify(filtered));
};

const addTalker = async (newTalker) => {
  const data = await getTalker();
  const id = Math.max(...data.map((talker) => talker.id)) + 1;
  const { name, age, talk } = newTalker;
  const result = { name, age, id, talk };
    fs.writeFileSync('./talker.json', JSON.stringify([...data, result]));
  return result;
};

const editTalker = async (talkerId, reqBody) => {
  const data = await getTalker();
  const filtered = data.filter((talker) => talker.id !== Number(talkerId));
  const { name, age, talk } = reqBody;
  const result = { name, age, id: talkerId, talk };
  fs.writeFileSync('./talker.json', JSON.stringify([...filtered, result]));
  return result;
};

editTalker(1, {
  name: 'Danielle Santos',
  age: 56,
  talk: {
    watchedAt: '22/10/2019',
    rate: 5,
  },
});

module.exports = ({
  getTalker,
  generateToken,
  deleteTalker,
  addTalker,
});

// fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => {
//     console.log(`Conteúdo do arquivo: ${data}`);
//   })
//   .catch((err) => {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//   });
