const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

/*router.get('/', (req, res) => {
  res.send('Hola mundo');
});*/

//obtener ruta
router.get('/', customerController.list);
router.post('/add', customerController.save);



//exportar funciòn
module.exports = router;
