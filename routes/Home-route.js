const express = require('express');
const homeCtrl = require('../controllers/HomeCtrl');

const router = express.Router();

router.get('/', homeCtrl.index);

router.get('/delete/:id', homeCtrl.deleteUser);

router.get('/change/:id/:status', homeCtrl.changeStatus);

router.post('/create', homeCtrl.createUser);

module.exports = router;