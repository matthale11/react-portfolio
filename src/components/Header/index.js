import React from "react";

function Header() {
  return (
    <header class="p-3">
      <h2>Matt Hale</h2>
      <nav class="navbar fixed-top d-flex flex-row justify-content-center p-2">
        <h4 class="p-2">
          <a href="https://github.com/matthale11" target="_blank">
            <i class="fab fa-github"></i> GitHub
          </a>
        </h4>
        <h4 class="p-2">
          <a href="https://www.linkedin.com/in/matthewshale/" target="_blank">
            <i class="fab fa-linkedin"></i> LinkedIn
          </a>
        </h4>
        <h4 class="p-2">
          <a href="matt-hale-resume.pdf" target="_blank">
            <i class="fas fa-file"></i> Resume
          </a>
        </h4>
      </nav>
    </header>
  );
}

export default Header;
