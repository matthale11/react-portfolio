import React from "react";
import { faCode, faUsers, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header class="pb-5">
      <nav class="navbar fixed-top d-flex flex-row justify-content-start pl-5">
        <h1 class="pr-2">
          <a href="/" style={{ color: "white" }}>
            Matt Hale
          </a>
        </h1>
        <h4 class="p-2">
          <a href="/bio" style={{ color: "#eda528" }}>
            Bio
          </a>
        </h4>
        <h4 class="p-2">
          <a
            href="https://github.com/matthale11"
            target="_blank"
            style={{ color: "#eda528" }}
          >
            <FontAwesomeIcon icon={faCode} /> GitHub
          </a>
        </h4>
        <h4 class="p-2">
          <a
            href="https://www.linkedin.com/in/matthewshale/"
            target="_blank"
            style={{ color: "#eda528" }}
          >
            <FontAwesomeIcon icon={faUsers} /> LinkedIn
          </a>
        </h4>
        <h4 class="p-2">
          <a
            href="matt-hale-resume.pdf"
            target="_blank"
            style={{ color: "#eda528" }}
          >
            <FontAwesomeIcon icon={faFile} /> Resume
          </a>
        </h4>
      </nav>
    </header>
  );
}

export default Header;
