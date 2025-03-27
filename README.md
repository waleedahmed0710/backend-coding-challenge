# Secure Messaging API

A secure messaging backend API built with Express (Node.js) that provides encrypted message storage and retrieval using AES encryption.

## Features

- Store encrypted messages per user using AES-256-CBC encryption
- Retrieve and decrypt messages for specific users
- Message expiry (auto-delete after configurable minutes)
- Fixed decryption debugging endpoint
- Environment-based configuration
- In-memory message storage (with database abstraction for future extensions)

## Prerequisites

- Node.js 14.x or higher
- npm 6.x or higher

## Installation

1. Clone the repository

```bash
git clone https://github.com/LMapundu/secure-messaging-api.git
cd secure-messaging-api
```

2. Install dependencies

```bash
npm install
```

3. Configure environment variables

```bash
cp .env.example .env
# Edit .env file to set your environment-specific values
```

4. Start the server

```bash
npm start
```

For development with automatic restarts:

```bash
npm run dev
```

## API Endpoints

### 1. Store a Message

Stores an encrypted message for a user.

**Endpoint:** `POST /messages`

**Request Body:**

```json
{
  "userId": "user123",
  "content": "This is a secret message"
}
```

**Response:**

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "userId": "user123",
  "createdAt": "2025-03-27T10:00:00.000Z"
}
```

### 2. Retrieve Messages

Retrieves all decrypted messages for a specific user.

**Endpoint:** `GET /messages/:userId`

**Response:**

```json
{
  "messages": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "content": "This is a secret message",
      "createdAt": "2025-03-27T10:00:00.000Z"
    }
  ]
}
```

### 3. Debug Decrypt

Debugging endpoint to test the fixed decryption function.

**Endpoint:** `POST /debug/decrypt`

**Request Body:**

```json
{
  "encryptedData": "base64IV:base64EncryptedText",
  "key": "hexEncodedKey"
}
```

**Response:**

```json
{
  "decrypted": "Original plaintext message"
}
```

## Environment Configuration

The application uses environment variables for configuration. Copy `.env.example` to `.env` and adjust the values:

```
# Server Configuration
PORT=3000

# Encryption Settings
ENCRYPTION_KEY=secure-messaging-secret-key-for-development-only
ENCRYPTION_SALT=secure-salt-value
ENCRYPTION_ALGORITHM=aes-256-cbc

# Message Settings
MESSAGE_EXPIRY_MINUTES=10

# Node Environment
NODE_ENV=development
```

## Design Decisions & Security Considerations

### 1. Encryption Method and Mode

This application uses **AES-256-CBC** (Advanced Encryption Standard with 256-bit key length in Cipher Block Chaining mode) for the following reasons:

- **Strong Security**: AES-256 is widely considered secure against brute force attacks and is approved for government classified information.
- **Industry Standard**: AES is a well-established encryption standard that has undergone extensive cryptanalysis.
- **CBC Mode**: Cipher Block Chaining ensures identical plaintext blocks encrypt to different ciphertext blocks, providing better security than ECB mode.
- **Built-in Support**: Node.js's crypto module provides native support for AES-CBC.
- **Balance**: Good balance between security and performance.

### 2. User Message Access Control

The system ensures only the original user can access their messages through:

- **User-based Filtering**: Messages are filtered by userId before being returned.
- **Server-side Key Management**: Encryption keys are managed server-side and never exposed to clients.

In a production system, this would be enhanced with:

- **Authentication**: JWT or similar token-based authentication to verify identity.
- **Authorization**: Middleware to ensure users can only access their own messages.
- **HTTPS**: All API communication would be over HTTPS to prevent man-in-the-middle attacks.

### 3. IV Storage and Extraction

For each encrypted message, the system:

1. Generates a cryptographically secure random IV (Initialization Vector)
2. Stores the IV alongside the encrypted data in the format: `base64(IV):base64(encryptedData)`
3. Extracts the IV during decryption by splitting the string at the colon

This approach ensures:

- Each message has a unique IV (essential for CBC mode security)
- The IV is always available for decryption
- Simple storage and retrieval without additional database fields

### 4. Prevention of User ID Spoofing

To prevent user ID spoofing (not fully implemented in this challenge), a production system would:

1. **Implement JWT Authentication**: Verify user identity through secure tokens
2. **Add Authorization Middleware**: Compare the authenticated user ID with the requested user ID
3. **Apply Rate Limiting**: Prevent brute force attempts
4. **Use HTTPS**: Encrypt all API traffic
5. **Implement CSRF Protection**: Prevent cross-site request forgery

## Debug Task Explanation

The broken decryption function in `debug_code.js` had two main issues:

1. **Incorrect Key Encoding**: It was using 'utf8' encoding for the key buffer when it should have used 'hex':

   ```javascript
   // Broken
   const keyBuffer = Buffer.from(key, 'utf8');

   // Fixed
   const keyBuffer = Buffer.from(key, 'hex');
   ```

2. **Incorrect Encrypted Text Encoding**: It was using 'hex' encoding for the encrypted text when it should have used 'base64':

   ```javascript
   // Broken
   let decrypted = decipher.update(encryptedText, 'hex', 'utf8');

   // Fixed
   let decrypted = decipher.update(encryptedText, 'base64', 'utf8');
   ```

These issues would cause an "Invalid key length" error or a "Bad decrypt" error because the decipher couldn't properly interpret the encrypted data.

## Running Tests

Run the test suite with:

```bash
npm test
```

This will execute:

- Encryption service tests
- Debug function tests

## Assumptions Made

1. **In-memory Storage**: For this challenge, messages are stored in memory. In a production environment, a proper database would be used.

2. **No Authentication**: The API doesn't implement authentication. In a real-world scenario, proper authentication would be essential.

3. **Key Management**: The encryption key is stored in environment variables. A production system would use a dedicated key management service.

4. **Message Format**: The API assumes messages are text. Binary data would require additional handling.

5. **User IDs**: The system assumes user IDs are provided by a trusted source. In production, these would come from an authentication system.

6. **Error Handling**: Basic error handling is implemented. A production system would need more comprehensive error handling and logging.

7. **Validation**: Limited input validation is implemented. Production would require more thorough validation.

8. **Single Server**: The implementation assumes a single server. A distributed system would require additional considerations for key distribution.

9. **Key Rotation**: No key rotation mechanism is implemented. Production systems should rotate encryption keys periodically.

10. **Transport Security**: The API should be served over HTTPS in production, which isn't addressed in this implementation.
