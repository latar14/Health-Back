const { Router } = require('express');
const router = Router();
const { userController } = require('../controllers/user.controller');

router.get('/user', userController.getAllUsers);
router.post('/login', userController.login);
router.post('/user', userController.addUser);

module.exports = router;