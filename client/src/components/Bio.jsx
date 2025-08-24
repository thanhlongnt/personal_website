import React from 'react';
import styles from "../styles/App.module.css";

export default function Bio() {

  const skills = ["Python", "JavaScript", "Java", "C++", "C", "React", "Flask", "FastAPI", "Node.js", "PyTorch", "Hugging Face Transformers", "AWS", "Docker", "MongoDB", "Git", "Linux", "Kubernetes"]
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>About</h2>
      <div className={styles.bioContainer}>
        <div className={styles.bioContent}>
          <p className={styles.bio}>
            Hello and welcome to my corner of the internet! My full first name is Thanh-Long, but you can call me T.L.. I am currently studying Computer Science at the University of California San Diego as a Regents scholar. I am very interested in learning more about how to built impactful software and about the various applications of the growing field of artificial intelligence/machine learning, as I've always been very interested in innovation in the tech industry. Feel free to reach out!
          </p>
        </div>
        <div className={styles.skillsContainer}>
          <h3 className={styles.skillsTitle}>My Toolbox</h3>

          
          <div className={styles.skillTags}>
            {/* <span className={styles.skillTag}>React</span> */}

            {
            skills.map((skill, index) => (
              <span key={index} className={styles.skillTag}>{skill}</span>))
            }
          </div>
        </div>
      </div>
    </section>
  );
}
