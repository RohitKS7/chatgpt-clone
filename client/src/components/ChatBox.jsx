import React, { useState, useEffect, useRef } from "react";

import { ChatMessage } from "./ChatMessage";

export function ChatBox({ chatLog, setChatLog }) {
  const [input, setInput] = useState("");

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatLog]);

  // HandleSubmit Function
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newChatLogData = [...chatLog, { user: "human", message: `${input}` }];

    setInput("");

    setChatLog(newChatLogData);

    // fetch response to the api combining the chat log array of messages and sending it as a message to react localhost as a post
    const messages = newChatLogData
      .map((message) => message.message)
      .join("\n");
    const response = await fetch("https://helpai-chatgpt-clone.onrender.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: messages,
      }),
    });

    const data = await response.json();
    setChatLog([
      ...newChatLogData,
      { user: "gpt", message: `${data.message}` },
    ]);
  };

  return (
    <>
      <div className="chat-log">
        {chatLog.map((item, i) => (
          <ChatMessage key={i} {...item} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="chat-input-holder">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="chat-input-textarea"
            placeholder="Ask Helpai Anthing..."
          ></input>
        </form>
      </div>
    </>
  );
}
