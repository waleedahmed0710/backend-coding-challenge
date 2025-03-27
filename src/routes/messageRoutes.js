const express = require('express');
const messageController = require('../controllers/messageController');

const router = express.Router();

// POST /messages - Store a message
router.post('/', messageController.storeMessage);

// GET /messages/:userId - Retrieve messages for a user
router.get('/:userId', messageController.getMessages);

module.exports = router;
