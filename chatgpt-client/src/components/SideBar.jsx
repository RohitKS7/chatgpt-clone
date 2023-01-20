import React from "react";

const SideBar = ({ setChatLog }) => {
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
};

export default SideBar;
