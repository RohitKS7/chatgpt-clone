import React from "react";

import bot from "../assets/bot.svg";
import send from "../assets/send.svg";
import user from "../assets/user.svg";

const ChatMessage = ({ isAi, setIsAi, message }) => {
  return (
    <div
      className="chat-message"
      style={{ background: isAi ? "#49455a" : "#444654" }}
    >
      <div
        className="avatar"
        style={{ background: isAi ? "#0da37f" : "#71059b" }}
      >
        <img src={isAi ? bot : user} alt={isAi ? "bot" : "user"} />
      </div>
      <div className="message">{message} </div>
    </div>
  );
};

export default ChatMessage;
