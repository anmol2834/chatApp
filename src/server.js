const express = require('express');
const http = require('http');
const cors = require('cors');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);

// CORS middleware setup with additional headers
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
  credentials: true
}));

// Middleware to parse JSON request bodies
app.use(express.json());

// In-memory array to temporarily store messages
let chatHistory = [];

// Endpoint to get chat history
app.get('/api/chatHistory', (req, res) => {
  res.json(chatHistory);
});

// Endpoint to save a new message to the chat history
app.post('/api/saveMessage', (req, res) => {
  const newMessage = req.body;
  chatHistory.push(newMessage);
  res.status(201).send('Message saved');
});

// Initialize Socket.IO without specific CORS configuration
const io = new Server(server);

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('A user connected:', socket.id);

  socket.on('chat message', (msg) => {
    chatHistory.push(msg);
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start the server on port 5000
const PORT = 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
