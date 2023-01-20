import React from "react";

export default function SideBar({ setChatLog, models, setCurrentModel }) {
  const clearChat = () => {
    setChatLog([]);
  };

  return (
    <aside className="sidemenu">
      <div className="side-menu-button" onClick={clearChat}>
        <span>+</span>
        New Chat
      </div>
    </aside>
  );
}
