import "./App.css";
import "./normal.css";
import bot from "./assets/bot.svg";
import send from "./assets/send.svg";
import user from "./assets/user.svg";

function App() {
  const isAi = true;

  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
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
            <div className="message">Hello Helpai</div>
          </div>
        </div>
        <div className="chat-input-holder">
          <textarea
            name="prompt"
            className="chat-input-textarea"
            cols="1"
            rows="1"
            placeholder="Ask Helpai Anthing..."
          ></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
