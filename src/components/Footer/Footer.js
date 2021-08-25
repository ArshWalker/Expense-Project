import React from "react";
import "./Footer.css";
function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <footer>
      <div className="cont">
        <p className="pos">
          {" "}
          | Made with ❤️ by{" "}
          <a href="https://github.com/ArshWalker">Arshdeep.</a> | ©{" "}
          {currentyear}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
