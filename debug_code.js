const crypto = require('crypto');

/**
 * BROKEN DECRYPT FUNCTION
 * This function has issues that need to be fixed
 */
function broken_decrypt(encryptedData, key) {
  try {
    // Extract IV and encrypted data
    const parts = encryptedData.split(':');
    const ivString = parts[0];
    const encryptedText = parts[1];

    // Convert IV from base64 to Buffer
    const iv = Buffer.from(ivString, 'base64');

    // Create key buffer from the provided key
    // BUG: Using wrong encoding for the key
    const keyBuffer = Buffer.from(key, 'utf8'); // Wrong! Should be 'hex' for a hex key

    // Create decipher using the key and IV
    const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, iv);

    // Decrypt the message
    // BUG: Using wrong encoding for the encrypted text
    let decrypted = decipher.update(encryptedText, 'hex', 'utf8'); // Wrong! Should be 'base64'
    decrypted += decipher.final('utf8');

    return decrypted;
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
}

/**
 * FIXED DECRYPT FUNCTION
 * This function fixes the issues in the broken_decrypt function
 */
function fixed_decrypt(encryptedData, key) {
  try {
    // Extract IV and encrypted data
    const [ivString, encryptedText] = encryptedData.split(':');

    if (!ivString || !encryptedText) {
      throw new Error('Invalid encrypted data format');
    }

    // Convert IV from base64 to Buffer
    const iv = Buffer.from(ivString, 'base64');

    // Create key buffer from the provided key
    // FIX: Use 'hex' encoding for the key
    const keyBuffer = Buffer.from(key, 'hex');

    // Create decipher using the key and IV
    const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, iv);

    // Decrypt the message
    // FIX: Use 'base64' encoding for the encrypted text
    let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
    decrypted += decipher.final('utf8');

    return decrypted;
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
}

/**
 * Test case to demonstrate the bug and fix
 */
function testDecryption() {
  // Generate a test key (32 bytes = 256 bits for AES-256)
  const testKey = crypto.randomBytes(32).toString('hex');

  // Test message
  const testMessage = 'Hello, secure world!';

  // Encrypt the message
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

  console.log('Original message:', testMessage);
  console.log('Encrypted data:', encryptedData);

  try {
    // Try to decrypt with the broken function
    const brokenResult = broken_decrypt(encryptedData, testKey);
    console.log('Broken decrypt result:', brokenResult);
  } catch (error) {
    console.log('Broken decrypt error:', error.message);
  }

  try {
    // Try to decrypt with the fixed function
    const fixedResult = fixed_decrypt(encryptedData, testKey);
    console.log('Fixed decrypt result:', fixedResult);
    console.log('Decryption successful:', fixedResult === testMessage);
  } catch (error) {
    console.log('Fixed decrypt error:', error.message);
  }
}

// Uncomment to run the test
// testDecryption();

module.exports = {
  broken_decrypt,
  fixed_decrypt,
  testDecryption
};
