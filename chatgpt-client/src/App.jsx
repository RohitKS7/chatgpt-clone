import React, { useState } from "react";

import { SideBar, ChatBox } from "./components";
import "./index.css";
import "./normal.css";

export default function App() {
  const [chatLog, setChatLog] = useState([
    {
      user: "gpt",
      message: "Hello User! How can I help you today?",
    },
  ]);

  return (
    <div className="App">
      <SideBar setChatLog={setChatLog} />
      <div className="chatbox">
        <ChatBox chatLog={chatLog} setChatLog={setChatLog} />
      </div>
    </div>
  );
}
