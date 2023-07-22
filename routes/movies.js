const routerMovies = require('express').Router();
const moviesController = require('../controllers/movies');
const { validateCreateMovie, validateGetMovieById } = require('../middlewares/validate');

routerMovies.get('/', moviesController.getMovies);
routerMovies.post('/', validateCreateMovie, moviesController.createMovie);
routerMovies.delete('/:_id', validateGetMovieById, moviesController.deleteMovie);

module.exports = routerMovies;
