var express = require('express');
var router = express.Router();

const UsersController = require('../controllers/UsersController');
const upload = require("../lib/upload");

/* GET home page. */
router.get('/users', UsersController.list);
router.get('/users/create', UsersController.create);
router.post('/users', upload.single("img"), UsersController.store);
router.get('/user/:id/edit', UsersController.edit);
router.put('/user/:id/update', upload.single("img"), UsersController.alterar);
router.delete('/user/:id/delete', UsersController.delete);


module.exports = router;