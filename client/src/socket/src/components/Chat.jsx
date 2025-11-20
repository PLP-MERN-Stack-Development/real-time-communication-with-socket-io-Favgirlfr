import { useEffect, useState } from "react";
import socket from "../socket";

export default function Chat({ username }) {
  const [messages, setMessages] = useState([]);
  const [typingUsers, setTypingUsers] = useState([]);
  const [onlineUsers, setOnlineUsers] = useState([]);

  useEffect(() => {
    socket.emit("user_join", username);

    socket.on("receive_message", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    socket.on("typing_users", (users) => {
      setTypingUsers(users);
    });

    socket.on("user_list", (users) => {
      setOnlineUsers(users);
    });

    return () => socket.off();
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    const text = e.target.message.value;
    if (!text) return;
    socket.emit("send_message", { message: text });
    e.target.reset();
  };

  const handleTyping = () => {
    socket.emit("typing", true);
    setTimeout(() => socket.emit("typing", false), 1000);
  };

  return (
    <div>
      <h3>Online Users: {onlineUsers.map(u => u.username).join(", ")}</h3>

      <div style={{ height: 200, overflowY: "auto", border: "1px solid black" }}>
        {messages.map((msg) => (
          <div key={msg.id}>
            <strong>{msg.sender}:</strong> {msg.message}
          </div>
        ))}
        {typingUsers.length > 0 && <em>{typingUsers.join(", ")} is typing...</em>}
      </div>

      <form onSubmit={sendMessage}>
        <input name="message" placeholder="Type a message" onChange={handleTyping} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
