import React from "react";
import { RiTelegram2Line } from "@remixicon/react";
import { RiGithubFill } from "@remixicon/react";

const Contact = () => {
  return (
    <div className="pageWrapper">
      <header className="header">Contact Page</header>

      <div className="contacts">
        <div className="contact">
          <div className="iconWrapper">
            <RiGithubFill size={50} color="#fff"></RiGithubFill>
          </div>
          <div className="infos">
            <p className="infoUsername">Yusuf-AI2011</p>
            <a target="blanket" href="https://github.com/Yusuf-AI2011" className="infoMore">Learn More</a>
          </div>
        </div>

        <div className="contact">
          <div className="iconWrapper-telegram">
            <RiTelegram2Line size={40} color="#2323a1ff"></RiTelegram2Line>
          </div>
          <div className="infos">
            <p className="infoUsername">@FrontEnd_Developer_2011</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
