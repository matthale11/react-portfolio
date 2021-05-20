import React from "react";
import { faInbox, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer class="fixed-bottom text-left pl-5 pt-3 pb-3">
      <h3 style={{ color: "white" }}>Contact Info</h3>
      <h4>
        <a href="mailto:mhale@factharbor.com" style={{ color: "#eda528" }}>
          <FontAwesomeIcon icon={faInbox} /> mhale@factharbor.com
        </a>
      </h4>
      <h4>
        <a href="tel:+14123528747" style={{ color: "#eda528" }}>
          <FontAwesomeIcon icon={faPhone} /> +1.412.352.8747
        </a>
      </h4>
    </footer>
  );
}

export default Footer;
