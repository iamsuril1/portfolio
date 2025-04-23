import React from "react";
import "../styles/Services.css";
import "../styles/App.css";
import { FaCode, FaMobileAlt, FaRocket, FaPalette, FaSearch, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaCode />,
    title: "Web Development",
    description: "Build responsive and interactive websites using modern technologies like React, HTML, CSS, and JavaScript.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile-Friendly Design",
    description: "Create mobile-first layouts that look amazing on all screen sizes and devices.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Optimization",
    description: "Improve site speed, reduce load times, and optimize performance for better UX and SEO.",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    description: "Design beautiful interfaces with attention to user experience, accessibility, and clarity.",
  },
  {
    icon: <FaSearch />,
    title: "SEO Best Practices",
    description: "Use semantic HTML, metadata, and optimization techniques to rank higher in search engines.",
  },
  {
    icon: <FaTools />,
    title: "Maintenance & Support",
    description: "Ensure your site stays up-to-date, secure, and bug-free after deployment.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h2>My Services</h2>
        <p>I offer a complete frontend skill set tailored to help you build your dream website.</p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
