const fs = require('fs');
// const talker = require('../talker.json');

const getTalker = () => {
  const file = fs.readFileSync('./talker.json');
  const data = JSON.parse(file);
  return data;
};

module.exports = ({
  getTalker,
});

// fs.readFile(nomeDoArquivo, 'utf8')
//   .then((data) => {
//     console.log(`Conteúdo do arquivo: ${data}`);
//   })
//   .catch((err) => {
//     console.error(`Não foi possível ler o arquivo ${nomeDoArquivo}\n Erro: ${err}`);
//     process.exit(1); // Encerra a execução do script e informa ao sistema operacional que houve um erro com código
//   });
