import React from "react";

const Header = () => (
  <>
    <img
      style={{ width: "80px", height: "80px", objectFit: "cover" }}
      alt="logo"
      src="https://i.pinimg.com/originals/4e/c8/89/4ec889505488448d78c0eb5c3b1f76b6.png"
    />
    <span className="text-5xl text-bold my-3">Acme Corp.</span>
    <h4 className="text-xl">
      Sign in or{" "}
      <a className="mainTheme" href="/">
        Create an account
      </a>
    </h4>
  </>
);

export default Header;
