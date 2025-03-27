require('dotenv').config();

/**
 * Application configuration loaded from environment variables
 * with sensible defaults for local development
 */
const config = {
  // Server settings
  port: process.env.PORT || 3000,

  // Encryption settings
  encryption: {
    key:
      process.env.ENCRYPTION_KEY ||
      'secure-messaging-secret-key-for-development-only',
    salt: process.env.ENCRYPTION_SALT || 'secure-salt-value',
    algorithm: process.env.ENCRYPTION_ALGORITHM || 'aes-256-cbc'
  },

  // Message settings
  message: {
    expiryMinutes: parseInt(process.env.MESSAGE_EXPIRY_MINUTES || '10', 10)
  },

  // Environment
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production'
};

// Validate required configuration
function validateConfig() {
  const requiredVars = [
    { key: config.encryption.key, name: 'ENCRYPTION_KEY' },
    { key: config.encryption.salt, name: 'ENCRYPTION_SALT' },
    { key: config.encryption.algorithm, name: 'ENCRYPTION_ALGORITHM' }
  ];

  const missingVars = requiredVars.filter((item) => !item.key);

  if (missingVars.length > 0) {
    const missingVarNames = missingVars.map((item) => item.name).join(', ');
    console.error(`Missing required environment variables: ${missingVarNames}`);
    process.exit(1);
  }
}

// Validate config in production
if (config.isProduction) {
  validateConfig();
}

module.exports = config;
