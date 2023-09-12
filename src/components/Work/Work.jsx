import React from "react";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import exercise from "../../assets/exercise.png";
import "./work.css";

const Work = () => {
  const projects = [
    {
      name: "Exercise Tracker",
      image: exercise,
      githubLink: "https://github.com/Tahir187/Exercise-Tracker-Frontend",
      linkedinLink:
        "https://www.linkedin.com/in/muhammad-tahir-109b80234/",
      deployedLink:
        "https://github.com/Tahir187/Exercise-Tracker-Frontend",
      alt: "exercise tracker image",
      githubImage: github,
      linkedinImage: linkedin,
    },
    {
      name: "Exercise Tracker",
      image: exercise,
      githubLink: "https://github.com/Tahir187/Exercise-Tracker-Frontend",
      linkedinLink:
        "https://www.linkedin.com/in/muhammad-tahir-109b80234/",
      deployedLink:
        "https://github.com/Tahir187/Exercise-Tracker-Frontend",
      alt: "exercise tracker image",
      githubImage: github,
      linkedinImage: linkedin,
    },
    {
      name: "Exercise Tracker",
      image: exercise,
      githubLink: "https://github.com/Tahir187/Exercise-Tracker-Frontend",
      linkedinLink:
        "https://www.linkedin.com/in/muhammad-tahir-109b80234/",
      deployedLink:
        "https://github.com/Tahir187/Exercise-Tracker-Frontend",
      alt: "exercise tracker image",
      githubImage: github,
      linkedinImage: linkedin,
    },
  ];
  return (
    <>
      <div className="work__container" id="work">
        <h2 className="work__heading">Work</h2>
        <div className="work__sub-container">
          <div className="work__items-container">
            {projects.map((item, i) => (
              <div className="work__item" key={i}>
                <div className="deployed__link">
                  <a
                    href={item.deployedLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h4 className="work__title">{item.name}</h4>
                  </a>
                </div>
                <div className="project__image-container">
                  <img src={item.image} alt={item.alt} />
                </div>
                {/* links container */}
                <div className="links__container">
                  <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.githubImage} alt="github image" />
                  </a>
                  <a
                    href={item.linkedinLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={item.linkedinImage} alt="linkeding image" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
