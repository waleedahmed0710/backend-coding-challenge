const crypto = require('crypto');
const config = require('../config');

class EncryptionService {
  constructor() {
    // Use algorithm from config
    this.algorithm = config.encryption.algorithm;

    // Generate key from config
    this.key = crypto.scryptSync(
      config.encryption.key,
      config.encryption.salt,
      32 // 32 bytes = 256 bits for AES-256
    );
  }

  /**
   * Encrypts a message using AES-256-CBC
   * @param {string} message - The plaintext message to encrypt
   * @returns {string} Base64 encoded string containing IV and encrypted data
   */
  encrypt(message) {
    // Generate a random 16-byte IV for each message
    const iv = crypto.randomBytes(16);

    // Create cipher using the key and IV
    const cipher = crypto.createCipheriv(this.algorithm, this.key, iv);

    // Encrypt the message
    let encrypted = cipher.update(message, 'utf8', 'base64');
    encrypted += cipher.final('base64');

    // Combine IV and encrypted data
    // Store IV at the beginning of the result so it can be extracted for decryption
    const ivString = iv.toString('base64');
    return `${ivString}:${encrypted}`;
  }

  /**
   * Decrypts an encrypted message
   * @param {string} encryptedData - Base64 encoded string containing IV and encrypted data
   * @returns {string} Decrypted message
   */
  decrypt(encryptedData) {
    // Extract IV and encrypted data
    const [ivString, encryptedText] = encryptedData.split(':');

    if (!ivString || !encryptedText) {
      throw new Error('Invalid encrypted data format');
    }

    // Convert IV from base64 to Buffer
    const iv = Buffer.from(ivString, 'base64');

    // Create decipher using the key and IV
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);

    // Decrypt the message
    let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  }
}

module.exports = new EncryptionService();
