const { v4: uuidv4 } = require('uuid');
const messageStore = require('../models/messageModel');
const encryptionService = require('./encryptionService');

class MessageService {
  /**
   * Stores an encrypted message for a user
   * @param {string} userId - The ID of the user
   * @param {string} content - The plaintext message content
   * @returns {Object} The created message object (with encrypted content)
   */
  storeMessage(userId, content) {
    // Encrypt the message content
    const encryptedContent = encryptionService.encrypt(content);

    // Create a new message object
    const message = {
      id: uuidv4(),
      userId,
      encryptedContent,
      createdAt: new Date()
    };

    // Store the message
    messageStore.addMessage(message);

    return message;
  }

  /**
   * Retrieves and decrypts all messages for a user
   * @param {string} userId - The ID of the user
   * @returns {Array} Array of decrypted messages
   */
  getMessagesForUser(userId) {
    // Get all encrypted messages for the user
    const messages = messageStore.getMessagesByUserId(userId);

    // Decrypt each message
    return messages.map((message) => ({
      id: message.id,
      content: encryptionService.decrypt(message.encryptedContent),
      createdAt: message.createdAt
    }));
  }
}

module.exports = new MessageService();
