const crypto = require('crypto');
const { fixed_decrypt } = require('../../debug_code');

class DebugController {
  /**
   * Handles the debug endpoint for decryption
   * @param {Object} req - Express request object
   * @param {Object} res - Express response object
   */
  async debugDecrypt(req, res) {
    try {
      const { encryptedData, key } = req.body;

      // Validate request body
      if (!encryptedData || !key) {
        return res
          .status(400)
          .json({ error: 'encryptedData and key are required' });
      }

      // Decrypt using the fixed function
      const decrypted = fixed_decrypt(encryptedData, key);

      res.status(200).json({ decrypted });
    } catch (error) {
      console.error('Debug decryption error:', error);
      res.status(500).json({ error: 'Failed to decrypt data' });
    }
  }
}

module.exports = new DebugController();
