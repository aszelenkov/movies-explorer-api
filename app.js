require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
const { errors } = require('celebrate');
const { requestLogger, errorLogger } = require('./middlewares/logger');
// const rateLimit = require('./middlewares/limiter');
const router = require('./routes/index');
const handleError = require('./middlewares/handleError');
const { MONGO_URL_DEV } = require('./utils/constants');

const { PORT = 3000, NODE_ENV, MONGO_URL } = process.env;

const app = express();
app.use(cors());
mongoose.connect(NODE_ENV === 'production' ? MONGO_URL : MONGO_URL_DEV)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err));

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(requestLogger);
// app.use(rateLimit);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(handleError);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
