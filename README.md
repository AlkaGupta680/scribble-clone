 #  Scribble Clone

A real-time multiplayer drawing and guessing game inspired by [skribbl.io](https://skribbl.io/).

Scribble Clone is a multiplayer web application where players can create or join game rooms, take turns drawing selected words, and guess what other players are drawing. Players earn points for correct guesses, and the player with the highest score wins.

##  Live Demo

**Live Application:** https://scribble-clone-86de.onrender.com

##  Features

- **Create Room:** Create a multiplayer game room with configurable settings.
- **Join Room:** Join an existing room using a room code.
- **Multiplayer Gameplay:** Play with multiple players simultaneously.
- **Interactive Drawing Canvas:** Draw using different colors and brush sizes.
- **Turn-Based Gameplay:** Players take turns selecting words and drawing.
- **Real-Time Drawing Synchronization:** Drawing strokes are synchronized across all connected players.
- **Word Selection:** Drawer selects a word from the available options.
- **Guessing System:** Players submit their guesses through chat.
- **Scoring System:** Earn points for guessing the correct word.
- **Leaderboard:** Track player scores throughout the game.
- **Game Timer:** Time-based drawing rounds.
- **Room Management:** Manage players and game sessions.

##  Technologies & Concepts Used

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- HTML5 Canvas API

### Backend
- Node.js
- Express.js

### Real-Time Communication
- Socket.IO
- WebSockets
- Event-based communication
- Real-time data synchronization

### Object-Oriented Programming (OOP)
- Classes and Objects
- Encapsulation
- Modular Code Structure
- Separation of Responsibilities
- Reusable and maintainable code

### Core Computer Science Concepts
- Client-Server Architecture
- Event-Driven Programming
- Asynchronous Programming
- Room and Game State Management
- Turn-Based Game Logic
- Real-Time Communication

### Development Tools & Deployment
- Git
- GitHub
- npm
- VS Code
- Render

##  Project Structure

```text
scribble-clone/
│
├── backend/
│   ├── package.json
│   └── ...
│
├── frontend/
│   ├── package.json
│   ├── src/
│   └── ...
│
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

##  Application Architecture

The application follows a client-server architecture.

### Frontend (React.js)
- Provides the user interface.
- Handles the drawing canvas and player interactions.
- Displays game rooms, chat, scores, and leaderboard.

### Backend (Node.js & Express.js)
- Handles room creation and joining.
- Manages game flow, player turns, and scoring.
- Processes guesses and game events.

### Real-Time Communication (Socket.IO)
- Synchronizes drawing strokes between players.
- Handles real-time chat and guessing.
- Broadcasts game state and player updates.
- Maintains communication between connected clients and the server.

## 🎮 Game Flow

1. A player creates a game room.
2. Other players join using the room code.
3. The host starts the game.
4. The drawer receives word options and selects a word.
5. The drawer draws on the canvas.
6. Other players see the drawing in real time.
7. Players submit their guesses through chat.
8. Correct guesses earn points.
9. Rounds continue with different players taking turns.
10. The final leaderboard displays the winner.

## ⚙️ Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/AlkaGupta680/scribble-clone.git
```

### 2. Navigate to the Project

```bash
cd scribble-clone
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
```

### 4. Install Frontend Dependencies

Open another terminal:

```bash
cd frontend
npm install
```

### 5. Configure Environment Variables

Create a `.env` file with the required environment variables.

Example:

```env
PORT=4000
FRONTEND_ORIGIN=http://localhost:4000
ROOM_IDLE_TIMEOUT_MS=1800000
```

Configure the values according to your local development environment.

### 6. Run the Application

Start the backend:

```bash
cd backend
npm run dev
```

Start the frontend in another terminal:

```bash
cd frontend
npm run dev
```

**Note:** Use the scripts configured in the respective `package.json` files.

##  Deployment

The application is deployed using **Render**.

- **Platform:** Render
- **Repository:** [GitHub Repository](https://github.com/AlkaGupta680/scribble-clone)
- **Live Application:** Add your Render URL here.

##  Author

**Alka Gupta**

- GitHub: [AlkaGupta680](https://github.com/AlkaGupta680)

---

 If you like this project, consider giving the repository a star!
