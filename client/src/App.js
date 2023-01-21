import React, { useState } from "react";

import SideBar from "./components/SideBar";
import ChatBox from "./components/ChatBox";
import "./index.css";
import "./normal.css";

const App = () => {
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
};

export default App;
