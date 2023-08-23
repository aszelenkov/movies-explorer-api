const { celebrate, Joi } = require('celebrate');

const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
const urlRegex = /^(https?:\/\/)?([A-Za-z0-9.-]+)(:[0-9]+)?(\/[^/]+)*\/?#?$/;

const validateSignUp = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().regex(emailRegex),
    password: Joi.string().required().min(8),
    name: Joi.string().required().min(2).max(30),
  }),
});

const validateSignIn = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().regex(emailRegex),
    password: Joi.string().required().min(8),
  }),
});

const validateGetMovieById = celebrate({
  params: Joi.object().keys({
    movieId: Joi.string().length(24).hex().required(),
  }),
});

const validateUpdateProfile = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email().regex(emailRegex),
  }),
});

const validateCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().length(4).required(),
    description: Joi.string().required(),
    image: Joi.string().required().regex(urlRegex),
    trailerLink: Joi.string().required().regex(urlRegex),
    thumbnail: Joi.string().required().regex(urlRegex),
    movieId: Joi.number().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports = {
  validateSignUp,
  validateSignIn,
  validateGetMovieById,
  validateUpdateProfile,
  validateCreateMovie,
};
