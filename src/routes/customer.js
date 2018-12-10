const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

/*router.get('/', (req, res) => {
  res.send('Hola mundo');
});*/

//obtener ruta
router.get('/', customerController.list);
router.post('/add/', customerController.save);
router.get('/delete/:id', customerController.delete);
//Editar un dato
router.get('/update/:id', customerController.edit);
router.post('/update/:id', customerController.update);



//exportar funciòn
module.exports = router;
