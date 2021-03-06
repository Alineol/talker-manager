function loginCheck(req, res, next) {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  const isValid = regex.test(email);
  if (!isValid) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  if (!password) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (password.length < 6) { 
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  return next();
}

function validateToken(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  if (authorization.length !== 16) {
    return res.status(401).json({ message: 'Token inválido' });
  }
  return next();
}

 const validateName = (req, res, next) => {
  const { name } = req.body;
  if (!name || name.length === 0) {
    return res.status(400).json({ message: 'O campo "name" é obrigatório' });
  }
  if (name.length < 3) {
    return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
  }
  next();
};

const validateAge = (req, res, next) => {
  const { age } = req.body;
  if (!age || age.length === 0) {
    return res.status(400).json({ message: 'O campo "age" é obrigatório' });
  }
  if (age < 18) {
    return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
  }
  next();
};

const validateTalkDateRate = (req, res, next) => {
  const { talk } = req.body;
  const regex = /^([0-3][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
    const { watchedAt, rate } = talk;
    const dateTest = regex.test(watchedAt);
      if (!dateTest) {
        return res.status(400).json({ message: 
          'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
      } 
      if (!Number.isInteger(rate) || rate < 1 || rate > 5) {
        console.log(rate);
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
      }
      return next(); 
    };

  function validateTalk(req, res, next) {
      const { talk } = req.body; 
      if (!talk || talk.rate === undefined || talk.watchedAt === undefined) {
        return res.status(400).json({ message: 
          'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
      }
      return next();
    }

module.exports = {
  loginCheck,
  validateToken,
  validateAge,
  validateName,
  validateTalkDateRate,
  validateTalk,
};