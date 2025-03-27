const encryptionService = require('../src/services/encryptionService');

describe('EncryptionService', () => {
  test('should encrypt and decrypt a message correctly', () => {
    const originalMessage = 'This is a secret message!';

    const encrypted = encryptionService.encrypt(originalMessage);
    const decrypted = encryptionService.decrypt(encrypted);

    // The decrypted message should match the original
    expect(decrypted).toBe(originalMessage);
  });

  test('should handle empty messages', () => {
    const originalMessage = '';

    const encrypted = encryptionService.encrypt(originalMessage);
    const decrypted = encryptionService.decrypt(encrypted);

    // The decrypted message should match the original
    expect(decrypted).toBe(originalMessage);
  });

  test('should handle special characters', () => {
    const originalMessage = '!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

    const encrypted = encryptionService.encrypt(originalMessage);
    const decrypted = encryptionService.decrypt(encrypted);

    // The decrypted message should match the original
    expect(decrypted).toBe(originalMessage);
  });

  test('should throw an error when decrypting invalid data', () => {
    // Try to decrypt invalid data
    expect(() => {
      encryptionService.decrypt('invalid-data');
    }).toThrow();
  });
});
