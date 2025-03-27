const messageService = require('../services/messageService');

class MessageController {
  /**
   * Stores a message for a user
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  async storeMessage(req, res) {
    try {
      const { userId, content } = req.body;

      // Validate request body
      if (!userId || !content) {
        return res
          .status(400)
          .json({ error: 'userId and content are required' });
      }

      // Store the message
      const message = messageService.storeMessage(userId, content);

      res.status(201).json({
        id: message.id,
        userId: message.userId,
        createdAt: message.createdAt
      });
    } catch (error) {
      console.error('Error storing message:', error);
      res.status(500).json({ error: 'Failed to store message' });
    }
  }

  /**
   * Retrieves all messages for a user
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  async getMessages(req, res) {
    try {
      const { userId } = req.params;

      // Get messages for the user
      const messages = messageService.getMessagesForUser(userId);

      res.status(200).json({ messages });
    } catch (error) {
      console.error('Error retrieving messages:', error);
      res.status(500).json({ error: 'Failed to retrieve messages' });
    }
  }
}

module.exports = new MessageController();
