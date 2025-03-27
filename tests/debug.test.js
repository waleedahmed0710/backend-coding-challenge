const crypto = require('crypto');
const { broken_decrypt, fixed_decrypt } = require('../debug_code');

describe('Debug Decryption Functions', () => {
  // Generate a test key and message
  const testKey = crypto.randomBytes(32).toString('hex');
  const testMessage = 'This is a test message for debugging';

  // Encrypt the test message
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(
    'aes-256-cbc',
    Buffer.from(testKey, 'hex'),
    iv
  );
  let encrypted = cipher.update(testMessage, 'utf8', 'base64');
  encrypted += cipher.final('base64');

  // Create the encrypted data string with IV
  const encryptedData = `${iv.toString('base64')}:${encrypted}`;

  test('broken_decrypt should fail to decrypt the message', () => {
    expect(() => {
      broken_decrypt(encryptedData, testKey);
    }).toThrow();
  });

  test('fixed_decrypt should correctly decrypt the message', () => {
    const decrypted = fixed_decrypt(encryptedData, testKey);
    expect(decrypted).toBe(testMessage);
  });
});
