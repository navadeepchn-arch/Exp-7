# Experiment 7

## Title  
Real-Time Chat Application using Socket.IO, Node.js, Express.js, HTML, CSS, and JavaScript

## Description  
This project implements a real-time chat application using Node.js, Express.js, and Socket.IO with a frontend built using HTML, CSS, and vanilla JavaScript. The system allows multiple users to join a chat room, send and receive messages instantly, view online users, and see typing indicators in real time.

The application demonstrates real-time bidirectional communication using WebSockets (Socket.IO), along with event-driven architecture for features like user join/leave notifications, message broadcasting, and live presence tracking.

## Learning Outcomes  
- Understand real-time communication using Socket.IO and WebSockets  
- Build a full-stack application using Node.js and Express.js  
- Implement event-driven architecture for live chat systems  
- Handle multiple users using socket connections and socket IDs  
- Implement online user tracking and typing indicators  
- Design and build a responsive chat UI using HTML and CSS  
- Manage real-time client-server communication using custom events  

## Tech Stack  
- Node.js 18+  
- Express.js  
- Socket.IO  
- HTML5  
- CSS3  
- JavaScript (Vanilla)

## Features  
- Real-time messaging between multiple users  
- User join and leave notifications  
- Online users list  
- Typing indicator system  
- Modern responsive UI  
- Auto-scrolling chat window  

## Demo URL
[https://25bcc80001-experiment7.netlify.app/]


## How to Run Locally  

### Step 1: Install dependencies  
```bash
npm install express socket.io
Step 2: Start the server
node app.js
Step 3: Open in browser
http://localhost:3000
Step 4: Test the application
Open multiple tabs in browser
Enter different usernames
Send messages and test real-time updates
Project Structure
Experiment 7/
│
├── index.html     # Frontend UI
├── style.css      # Styling
├── app.js         # Backend server (Node.js + Socket.IO)
GitHub Repository

(https://github.com/navadeepchn-arch/Exp-7)

Note

Socket.IO enables real-time communication using event-based messaging. Each user is identified using a unique socket ID, and messages are broadcast to all connected clients using server-side events.