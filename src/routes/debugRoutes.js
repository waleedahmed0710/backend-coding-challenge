const express = require('express');
const debugController = require('../controllers/debugController');

const router = express.Router();

// POST /debug/decrypt - Debug endpoint for decryption
router.post('/decrypt', debugController.debugDecrypt);

module.exports = router;
