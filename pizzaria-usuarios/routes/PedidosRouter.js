var express = require('express');
var router = express.Router();

const PedidosController = require('../controllers/PedidosController');

router.post('/pedidos/add', PedidosController.add);


module.exports = router;