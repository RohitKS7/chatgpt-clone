import React, { useState } from "react";

import ChatMessage from "./ChatMessage";

const ChatBox = () => {
  const { isAi, setIsAi } = useState(false);
  const { input, setInput } = useState("");
  const { chatLog, setChatLog } = useState([]);

  const handleSubmit = async (e) => {
    e.preventDeafult();

    setChatLog([...chatLog, { user: "me", message: `${input}` }]);
    setInput("");
  };

  return (
    <>
      <div className="chat-log">
        <ChatMessage isAi={isAi} setIsAi={setIsAi} message="Hello" />
      </div>
      <div className="chat-input-holder">
        <form onSubmit={handleSubmit}>
          <input
            value={input}
            onChange={() => setInput(e.target.value)}
            className="chat-input-textarea"
            placeholder="Ask Helpai Anthing..."
          ></input>
        </form>
      </div>
    </>
  );
};

export default ChatBox;
