import React, { useState } from "react";
import Header from "../../components/Contact/Header";
import jsonData from "../../aboutMe/dictionary.json";

const Contact = () => {
  return (
    <div className="container-home dark">
      <div className="app-home">
        <Header className="header-contact" />
        <div className="contact">
          <div className="more-me">
            <div className="data-name">
              <span>
                {jsonData.about_me.first_name} {jsonData.about_me.last_name}
              </span>
            </div>
          </div>
          <div>
            Email:
            <div className="data-name">{jsonData.about_me.email}</div>
          </div>
          <div>
            Phone number:
            <div className="data-name">
              {jsonData.about_me.phone_number_code}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
