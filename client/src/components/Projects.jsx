import styles from "../styles/App.module.css";

export default function Projects() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Projects</h2>

      <div className={styles.projectsGrid}>
       <ProjectCard
          title="Task Management App"
          description="A clean, intuitive task management application with real-time collaboration features. Built with modern React patterns and a focus on user experience."
          tech="React, Node.js, PostgreSQL"
        />

        <ProjectCard
            title="Data Visualization Dashboard"
            description="Interactive dashboard for visualizing complex datasets with customizable charts and filters."
            tech="React, D3.js, Python, FastAPI"
        />

        <ProjectCard
          title="Open Source Library"
          description="A lightweight utility library for form validation with TypeScript."
          tech="TypeScript, Jest, npm"
        />
      </div>
    </section>
  );
}

export function ProjectCard({ title, description, tech }) {
  return (
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.projectDescription}>{description}</p>
      <p className={styles.projectTech}>{tech}</p>
    </div>
  );
}
