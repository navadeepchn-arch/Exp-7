const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: '*' }
});

// Serve static files (index.html, style.css) from same folder
app.use(express.static(path.join(__dirname)));

// Track online users: socket.id -> username
const onlineUsers = {};

io.on('connection', (socket) => {
  console.log(`New connection: ${socket.id}`);

  // ── User joins chat ──────────────────────────────────────────
  socket.on('user_join', (username) => {
    onlineUsers[socket.id] = username;

    // Notify everyone
    io.emit('system_message', {
      text: `${username} joined the chat`,
      timestamp: new Date().toISOString()
    });

    // Send updated user list to everyone
    io.emit('online_users', Object.values(onlineUsers));

    console.log(`${username} joined. Online: ${Object.values(onlineUsers)}`);
  });

  // ── Incoming chat message ────────────────────────────────────
  socket.on('send_message', (data) => {
    const username = onlineUsers[socket.id] || 'Unknown';
    io.emit('receive_message', {
      username,
      text: data.text,
      timestamp: new Date().toISOString()
    });
  });

  // ── Typing indicator ─────────────────────────────────────────
  socket.on('typing', (isTyping) => {
    const username = onlineUsers[socket.id];
    if (username) {
      socket.broadcast.emit('user_typing', { username, isTyping });
    }
  });

  // ── Disconnect ───────────────────────────────────────────────
  socket.on('disconnect', () => {
    const username = onlineUsers[socket.id];
    if (username) {
      delete onlineUsers[socket.id];
      io.emit('system_message', {
        text: `${username} left the chat`,
        timestamp: new Date().toISOString()
      });
      io.emit('online_users', Object.values(onlineUsers));
      console.log(`${username} disconnected.`);
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});