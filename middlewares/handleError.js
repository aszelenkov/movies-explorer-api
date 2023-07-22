const { INTERNAL_SERVER_ERROR } = require('../utils/constants');

const handleError = (err, _, res, next) => {
  const statusCode = err.statusCode || INTERNAL_SERVER_ERROR;

  const message = statusCode === INTERNAL_SERVER_ERROR ? 'На сервере произошла ошибка' : err.message;
  res.status(statusCode).send({ message });
  next();
};

module.exports = handleError;
