const express = require('express');
const editCtrl = require('../controllers/EditCtrl')
const router = express.Router();

router.get('/:id', editCtrl.index);
router.post('/update/:id', editCtrl.updateUser);

module.exports = router;