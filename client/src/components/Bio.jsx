import React from 'react';
import styles from "../styles/App.module.css";

export default function Bio() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>About</h2>
      <div className={styles.bioContainer}>
        <div className={styles.bioContent}>
          <p className={styles.bio}>
            Welcome to my corner of the internet. I'm passionate about creating
            meaningful digital experiences and solving complex problems through
            code. With a focus on clean, efficient solutions, I strive to bridge the
            gap between technical excellence and user-centered design.
          </p>
          <p className={styles.bio}>
            When I'm not coding, you can find me exploring new technologies,
            contributing to open source projects, or enjoying a good book with a cup
            of coffee.
          </p>
        </div>
        <div className={styles.skillsContainer}>
          <h3 className={styles.skillsTitle}>My Toolbox</h3>
          <div className={styles.skillTags}>
            <span className={styles.skillTag}>React</span>
            <span className={styles.skillTag}>TypeScript</span>
            <span className={styles.skillTag}>Node.js</span>
            <span className={styles.skillTag}>Python</span>
            <span className={styles.skillTag}>PostgreSQL</span>
            <span className={styles.skillTag}>AWS</span>
            <span className={styles.skillTag}>Docker</span>
            <span className={styles.skillTag}>Git</span>
            <span className={styles.skillTag}>D3.js</span>
            <span className={styles.skillTag}>RESTful APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
}
