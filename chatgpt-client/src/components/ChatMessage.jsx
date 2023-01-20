import React from "react";
import TypeWriterEffect from "react-typewriter-effect";

import bot from "../assets/bot.svg";
import send from "../assets/send.svg";
import human from "../assets/user.svg";

export default function ChatMessage({ message, user }) {
  return (
    <>
      {user === "gpt"}

      <div
        className="chat-message"
        style={{ background: user === "gpt" ? "#49455a" : "#202123cc" }}
      >
        <div
          className="avatar"
          style={{ background: user === "gpt" ? "#0da37f" : "#71059b" }}
        >
          <img
            src={user === "gpt" ? bot : human}
            alt={user === "gpt" ? "bot" : "human"}
          />
        </div>
        <div className="message">
          {user === "gpt" ? (
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
                fontSize: "16px",
                fontWeight: "400",
                lineHeight: "24px",
                fontSynthesis: "none",
              }}
              startDelay={100}
              cursorColor="black"
              text={message}
              typeSpeed={20}
              eraseSpeed={100}
              hideCursorAfterText="true"
            />
          ) : (
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
                fontSize: "16px",
                fontWeight: "bold",
                fontSynthesis: "none",
              }}
              startDelay={10}
              cursorColor="transparent"
              multiText={[".", ".", ".", "."]}
              multiTextLoop="true"
              typeSpeed={20}
              eraseSpeed={100}
              hideCursorAfterText="true"
            />
          )}
          {<div className="message">{user === "human" && message}</div>}
        </div>
      </div>
    </>
  );
}
