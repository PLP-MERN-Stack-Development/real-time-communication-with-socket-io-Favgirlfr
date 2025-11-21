 ChatRoom - Real-Time Chat Application

A modern, production-ready real-time chat application built with the MERN stack (MongoDB, Express.js, React, Node.js) and Tailwind CSS.

## ✨ Features Implemented

### Core Chat Functionality
- ✅ **Real-time messaging** - Instant message delivery and display
- ✅ **User authentication** - Simple username-based authentication
- ✅ **Live typing indicators** - See when others are typing
- ✅ **User presence tracking** - Online/offline status display
- ✅ **Message timestamps** - Relative time display (e.g., "2 minutes ago")
- ✅ **Beautiful UI** - Modern, responsive design with smooth animations

### User Experience
- ✅ **Responsive design** - Works on desktop, tablet, and mobile
- ✅ **User list sidebar** - See all online users at a glance
- ✅ **Message bubbles** - Distinct styling for your messages vs others
- ✅ **Smooth scrolling** - Auto-scroll to latest messages
- ✅ **Avatar initials** - Automatic avatar generation from names

## 🏗️ Architecture

### Technology Stack
- **Frontend Framework**: React 18 with JavaScript
- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Real-time Communication**: Socket.io
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: shadcn/ui
- **State Management**: React hooks
- **Date Utilities**: date-fns
- **Notifications**: Sonner (toast notifications)

### Design System
Custom color tokens for consistent theming:
- `--chat-bubble-user` - Your message bubbles
- `--chat-bubble-other` - Other users' message bubbles
- `--online-status` - Online indicator color
- `--typing-indicator` - Typing animation color

## 📁 Project Structure

```
client/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   └── AuthForm.jsx       # Login/authentication UI
│   │   ├── chat/
│   │   │   ├── ChatMessage.jsx    # Individual message component
│   │   │   ├── ChatInput.jsx      # Message input with send button
│   │   │   ├── TypingIndicator.jsx # Animated typing indicator
│   │   │   └── UserList.jsx       # Online users sidebar
│   │   └── ui/                    # shadcn/ui components
│   ├── hooks/
│   │   └── use-toast.js          # Toast notification hook
│   ├── pages/
│   │   ├── Index.jsx              # Main app entry with auth flow
│   │   └── Chat.jsx               # Chat room interface
│   ├── index.css                  # Design system & CSS variables
│   └── main.jsx                   # App entry point
├── package.json
└── vite.config.js

server/
├── server.js                      # Express server with Socket.io
└── package.json
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Development

```bash
# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install

# Start the server (from server directory)
cd ../server
npm start

# Start the client (from client directory, in a new terminal)
cd ../client
npm run dev
```



### Real-time Features
The backend uses Socket.io for real-time communication:
- Live messaging
- User presence tracking
- Typing indicators
- Room-based chat

## 🎨 Customization

### Colors
Edit `src/index.css` to customize the color scheme:
```css
:root {
  --primary: 221 83% 53%;           /* Main brand color */
  --chat-bubble-user: 221 83% 53%;  /* Your messages */
  --online-status: 142 76% 36%;      /* Online indicator */
}
```


## 📚 MERN Stack Architecture

This application follows the traditional MERN stack architecture:

| Component | Technology |
|-----------|------------|
| **Database** | MongoDB |
| **Backend** | Node.js + Express.js |
| **Real-time** | Socket.io |
| **Frontend** | React 18 |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS |

**Features:**
- ✅ Full-stack JavaScript development
- ✅ Real-time communication with WebSockets
- ✅ RESTful API design
- ✅ Modern React with hooks
- ✅ Responsive UI with Tailwind CSS
- ✅ Modular component architecture


