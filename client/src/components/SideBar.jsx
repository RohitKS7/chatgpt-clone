import React from "react";

import github from "../assets/github.svg";
import twitter from "../assets/twitter.svg";

export function SideBar({ setChatLog }) {
  const clearChat = () => {
    setChatLog([]);
  };

  return (
    <aside className="sidemenu">
      <div className="side-menu-button" onClick={clearChat}>
        <span>+</span>
        New Chat
      </div>
      <div className="project-info">
        <div className="about">
          <h2>About this project -</h2>
          <p>It's a ChatGPT clone.</p>
          <p>
            Since ChatGPT is all over the internet now days, I thought I should
            create a clone of it to learn more about it, how it works and
            obviously to sharpen in development skills.
          </p>
          <p>
            I've set the results to ~50 words (max_tokens) to prevent the abuse.
          </p>
          <p>
            If you like this project, Kindly DM me on twitter and let me know
            your thoughts.
          </p>
        </div>
        <div className="rules">
          <h2>Rules to use -</h2>
          <p>
            Please! Don't abuse the AI by asking too much questions. Since it's
            a sample project, I have limited credits of API. So, Kindly consider
            it and feel free to give a test drive.
          </p>
        </div>
        <div className="creator">
          <h2>Developer</h2>
          <a
            href="https://www.twitter.com/SumanRohitK7"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="link-icon">
              <img src={twitter} alt="twitter" />
            </div>
            <span>@SumanRohitK7</span>
          </a>
          <a
            href="https://www.github.com/RohitKS7"
            target="_blank"
            rel="noreferrer noopener"
          >
            <div className="link-icon">
              <img src={github} alt="github" />
            </div>
            <span>RohitKS7</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
