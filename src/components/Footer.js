import React from "react";

const Footer = () => {
  return (
    <footer class="d-flex flex-column flex-wrap justify-content-center align-items-center p-3 border-top">
      <a href="/" className="my-2">
        <img alt="" src={require("../assets/logo.svg").default} width="400" />
      </a>
      <p class="text-muted">{`Made with <3 with GDSC Hits!`}</p>
    </footer>
  );
};

export default Footer;
