const config = require('../config');

/**
 * Message Store - In-memory storage for messages
 * In a real application, this would be replaced with a database
 */
class MessageStore {
  constructor() {
    this.messages = [];

    // Set up message expiry if enabled
    if (config.message.expiryMinutes > 0) {
      // Check for expired messages every minute
      setInterval(() => this.cleanupExpiredMessages(), 60 * 1000);
    }
  }

  /**
   * Add a message to the store
   * @param {Object} message - The message object to add
   */
  addMessage(message) {
    // Calculate expiry time if enabled
    if (config.message.expiryMinutes > 0) {
      message.expiresAt = new Date(
        message.createdAt.getTime() + config.message.expiryMinutes * 60 * 1000
      );
    }

    this.messages.push(message);
  }

  /**
   * Get all messages for a specific user
   * @param {string} userId - The user ID to filter by
   * @returns {Array} Array of messages for the user
   */
  getMessagesByUserId(userId) {
    return this.messages.filter(
      (message) =>
        message.userId === userId &&
        // Filter out expired messages
        (!message.expiresAt || message.expiresAt > new Date())
    );
  }

  /**
   * Remove expired messages from the store
   * @private
   */
  cleanupExpiredMessages() {
    const now = new Date();
    const initialCount = this.messages.length;

    // Filter out expired messages
    this.messages = this.messages.filter(
      (message) => !message.expiresAt || message.expiresAt > now
    );

    const removedCount = initialCount - this.messages.length;
    if (removedCount > 0) {
      console.log(`Removed ${removedCount} expired messages`);
    }
  }
}

module.exports = new MessageStore();
