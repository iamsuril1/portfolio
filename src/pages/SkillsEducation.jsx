import React from "react";
import "../styles/SkillsEducation.css";
import "../styles/App.css";

const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React", level: 85 },
  { name: "Git & GitHub", level: 75 },
];

const education = [
  {
    year: "2022 - Present",
    degree: "Bachelor of Computer Science",
    place: "XYZ University",
  },
  {
    year: "2020 - 2022",
    degree: "Higher Secondary Education",
    place: "ABC Senior School",
  },
];

const SkillsEducation = () => {
  return (
    <section className="skills-education">
      <h2 className="section-title">Skills & Education</h2>
      <div className="content-wrapper">

        {/* Skills Section */}
        <div className="skills">
          <h3>My Skills</h3>
          {skills.map((skill, index) => (
            <div className="skill" key={index}>
              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Section */}
        <div className="education">
          <h3>My Education</h3>
          <ul className="timeline">
            {education.map((item, index) => (
              <li key={index}>
                <span className="timeline-year">{item.year}</span>
                <div className="timeline-content">
                  <h4>{item.degree}</h4>
                  <p>{item.place}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsEducation;
