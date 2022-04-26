import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-light bg-white p-3 d-flex justify-content-center border-bottom align-items-center">
      <a class="navbar-brand" href="/">
        <img
          src={require("../assets/logov2.svg").default}
          width="150"
          alt="brand"
        />
      </a>
    </nav>
  );
};

export default Navbar;
