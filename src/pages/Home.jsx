import React from "react";
import { motion } from "framer-motion";
import "../styles/Home.css";
import "../styles/App.css";

const Home = () => {
  return (
    <section className="home">
      <motion.div
        className="home-content"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1>
          Hello, I'm <span>Your Name</span>
        </h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Frontend Developer | React Enthusiast
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          I build responsive, user-friendly websites and web apps with a focus on clean design and performance.
        </motion.p>

        <motion.a
          href="/assets/your-cv.pdf"
          download
          className="home-btn"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download CV
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
