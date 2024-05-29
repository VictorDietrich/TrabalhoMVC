const express = require('express');
const router = express.Router();
const UserModel = require('../models/userModel');
const UserView = require('../views/userView');
const UserController = require('../controllers/userController');

const userModel = new UserModel();
const userView = new UserView();
const userController = new UserController(userModel, userView);

router.post('/addUser', (req, res) => {
    userController.addUser(req, res);
});

router.get('/getAllUsers', (req, res) => {
    userController.getAllUsers(req, res);
});

module.exports = router;
