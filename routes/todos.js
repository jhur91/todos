var express = require('express');
var router = express.Router();

const toDosCtrl = require('../controllers/todos');

router.get('/', toDosCtrl.index);

router.post('/', toDosCtrl.create);
router.delete('/:id', toDosCtrl.delete);


module.exports = router;