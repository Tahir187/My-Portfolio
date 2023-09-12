import React from "react";
import "../Home/home.css";
import avater from "../../assets/avater.jpeg";
import gmail from "../../assets/gmail.png";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

const Home = () => {
  return (
    <>
      <div className="app__container" id="home">
        <div className="home__sub-container">
          <div className="bio__container">
            <div className="bio">
              <p className="sub__text">Hi, I am</p>
              <h1 className="main__heading-container">
                Muhammad <span className="heading__container">Tahir</span>
              </h1>
              <p className="sub__text-two">a Web Developer</p>
            </div>
            <div className="bio__links">
              <p className="bio__links-text">Get in touch </p>
              <div className="bio__images">
                <a
                  href="https://mail.google.com/mail/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={gmail} alt="gmail-icon" />
                </a>
                <a
                  href="https://www.facebook.com/muhammadtahir.bharchoond"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={facebook} alt="facebook-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-tahir-109b80234/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={linkedin} alt="linkedin-icon" />
                </a>
                <a
                  href="https://www.instagram.com/muhammad__tahir__17/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={instagram} alt="instagram-icon" />
                </a>
              </div>
            </div>
          </div>
          <div className="profile__container">
            <img src={avater} alt="profile picture" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
