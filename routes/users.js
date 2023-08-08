const routerUsers = require('express').Router();
const usersController = require('../controllers/users');
const { validateUpdateProfile } = require('../middlewares/validate');

routerUsers.get('/me', usersController.getUser);
routerUsers.patch('/me', validateUpdateProfile, usersController.updateProfile);

module.exports = routerUsers;
