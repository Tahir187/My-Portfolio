import React from "react";
import "../About/about.css";
import profile from "../../assets/profile.jpg";
const About = () => {
  return (
    <div className="main__container" id="about">
      <div className="about__container">
        <h2 className="about__heading-container">About</h2>
        <div className="about__sub-container">
          <div className="about__profile-container">
            <img src={profile} alt="profile" />
          </div>
          <div className="text__container">
            <p>
              Greetings! I'm Muhammad Tahir, a dedicated MERN stack developer
              ignited by the art of shaping flawless web encounters. Armed with
              a profound understanding of JavaScript, I have honed my expertise
              in orchestrating vibrant applications that breathe with the
              prowess of MongoDB, Express.js, React, and Node.js. My journey
              through code is fueled by a passion for crafting immersive user
              interfaces that speak volumes of elegance. Beyond that, my focus
              extends to weaving formidable backends that form the backbone of
              seamless functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
