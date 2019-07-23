const express = require('express');
const router = express.Router();
const departamentosController = require('../controllers/departamentosControllers');

router.get('/', departamentosController.list );
router.post('/add', departamentosController.save );
router.get('/delete/:id', departamentosController.delete);
router.get('/update/:id', departamentosController.edit);
router.post('/update/:id', departamentosController.update);
module.exports = router;