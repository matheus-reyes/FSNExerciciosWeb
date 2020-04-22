var express = require('express');
var router = express.Router();

const CarrinhoController = require('../controllers/CarrinhoController');

router.post('/carrinho', CarrinhoController.add);
router.get('/carrinho', CarrinhoController.show);

module.exports = router;