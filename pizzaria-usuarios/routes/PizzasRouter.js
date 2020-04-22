var express = require('express');
var router = express.Router();

const PizzasController = require('../controllers/PizzasController');
const upload = require("../lib/upload");

/* GET home page. */
router.get('/', PizzasController.index);
router.get('/pizzas/busca/', PizzasController.search);
router.get('/pizzas/create', PizzasController.create);
router.get('/pizzas',PizzasController.list);
router.post('/pizzas', upload.single("img") ,PizzasController.store);
router.get('/pizzas/:id/edit', PizzasController.edit);
router.get('/pizzas/:id', PizzasController.show);
router.delete('/pizzas/:id',PizzasController.delete);
router.put('/pizzas/:id/update', upload.single("img") , PizzasController.alterar);

module.exports = router;