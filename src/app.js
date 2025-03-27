const express = require('express');
const messageRoutes = require('./routes/messageRoutes');
const debugRoutes = require('./routes/debugRoutes');
const errorHandler = require('./middleware/errorHandler');
const config = require('./config');

const app = express();
const port = config.port;

// Middleware
app.use(express.json());

// Routes
app.use('/messages', messageRoutes);
app.use('/debug', debugRoutes);

// Not found middleware
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
