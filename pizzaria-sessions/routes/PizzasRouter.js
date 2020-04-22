var express = require('express');
var router = express.Router();

const PizzasController = require('../controllers/PizzasController');
const verificaSeEstaLogado = require('../middlewares/verificaSeEstaLogado');

/* GET home page. */
router.get('/', PizzasController.index);
router.get('/busca', PizzasController.search);
router.get('/pizzas/:id/edit', verificaSeEstaLogado, PizzasController.edit);
router.get('/pizzas/create', verificaSeEstaLogado, PizzasController.create);
router.get('/pizzas/:id', PizzasController.show);
router.get('/pizzas', verificaSeEstaLogado, PizzasController.list);
router.post('/pizzas', verificaSeEstaLogado, PizzasController.store);
router.put('/pizzas/:id/update', verificaSeEstaLogado, PizzasController.update);
router.delete('/pizzas/:id', verificaSeEstaLogado, PizzasController.delete);

module.exports = router;
