import React, { useState, useEffect } from "react";
import styles from "./styles/App.module.css";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Experience from "./components/Experience";
import EnhancedProjects from "./components/EnhancedProjects";
import SocialLinks from "./components/SocialLinks";
import NetworkAnimation from "./components/NetworkAnimation";

const PersonalWebsite = () => {
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };


  return (
    <div className={styles.pageWrapper}>
      <div className={styles.networkBackground}>
        <NetworkAnimation />
      </div>
      <nav className={styles.navbar}>
        <div className={styles.navContent}>
          <div className={styles.navLogo}>TL</div>
          <ul className={styles.navLinks}>
            <li><a onClick={() => handleNavClick('home')} className={activeSection === 'home' ? styles.active : ''}>Home</a></li>
            <li><a onClick={() => handleNavClick('about')} className={activeSection === 'about' ? styles.active : ''}>About</a></li>
            <li><a onClick={() => handleNavClick('experience')} className={activeSection === 'experience' ? styles.active : ''}>Experience</a></li>
            <li><a onClick={() => handleNavClick('projects')} className={activeSection === 'projects' ? styles.active : ''}>Projects</a></li>
            <li><a onClick={() => handleNavClick('contact')} className={activeSection === 'contact' ? styles.active : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className={styles.container}>
        <section id="home" className={styles.section}>
          <Header />
        </section>
        <section id="about" className={styles.section}>
          <Bio />
        </section>
        <section id="experience" className={styles.section}>
          <Experience />
        </section>
        <section id="projects" className={styles.section}>
          <EnhancedProjects />
        </section>
        <section id="contact" className={styles.section}>
          <SocialLinks />
        </section>
      </div>
    </div>
  );
};

export default PersonalWebsite;
