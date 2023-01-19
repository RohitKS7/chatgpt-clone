import { SideBar, ChatBox } from "./components";
import "./index.css";
import "./normal.css";

const App = () => {
  return (
    <div className="App">
      <aside className="sidemenu">
        <SideBar />
      </aside>
      <section className="chatbox">
        <ChatBox />
      </section>
    </div>
  );
};

export default App;
