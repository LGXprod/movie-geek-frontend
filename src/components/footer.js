import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div className="resources">
          <img alt="github icon" src={require("../images/github-icon.png")} />
          <img alt="figma icon" src={require("../images/figma-icon.png")} />
          <img
            alt="google-drive icon"
            src={require("../images/google-drive-icon.png")}
          />
        </div>

        <p>Terms of Use | Support | Privacy Policy</p>

        <p>© 2022 MovieGeek</p>
      </div>
    </div>
  );
};

export default Footer;
