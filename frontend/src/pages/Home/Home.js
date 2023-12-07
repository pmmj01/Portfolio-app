import React, { useState } from "react";
import Header from "../../components/Home/Header";
import jsonData from "../../aboutMe/dictionary.json";

const Home = () => {
  const [language, setLanguage] = useState("EN");

  const handleLanguageToggle = () => {
    setLanguage((prevLanguage) => (prevLanguage === "EN" ? "PL" : "EN"));
  };

  return (
    <div className="container-home dark">
      <div className="app-home">
        <Header className="header-contact"/>
        <button className="line-toggle learn-more" onClick={handleLanguageToggle}>
          <div className="circle">
            <div className="icon arrow"></div>
          </div>
          <span className="button-text">
            {language === "EN" ? "ENG" : "PL"}
          </span>
        </button>
        <div className="contact">
          <div className="more-me">
            <div className="data-name">
              <div className="data-scroll">
                {language === "EN"
                  ? jsonData.about_me.about_me_eng
                  : jsonData.about_me.about_me_pl}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
